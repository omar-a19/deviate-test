import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const bubbleTextRef = useRef<HTMLSpanElement>(null);
  const gifOverlaysRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let currentX = 0, currentY = 0, targetX = 0, targetY = 0;
    const ease = 0.15;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
      raf = requestAnimationFrame(animate);
    };

    // Text + color bubble
    const onBubbleEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const text = el.dataset.cursorBubbleText;
      const color = el.dataset.cursorBubbleColor;
      cursor.dataset.cursorBubble = 'active';
      if (text && bubbleTextRef.current) bubbleTextRef.current.textContent = text;
      if (color) cursor.dataset.cursorBackground = color;
    };
    const onBubbleLeave = () => {
      cursor.dataset.cursorBubble = 'not-active';
      cursor.dataset.cursorBackground = 'primary';
      // Restore default text
      if (bubbleTextRef.current) bubbleTextRef.current.textContent = 'Scroll';
    };

    // GIF bubble
    const onGifEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const gifId = el.dataset.cursorGifTarget;
      if (!gifId || !gifOverlaysRef.current) return;
      cursor.dataset.cursorGif = 'active';
      gifOverlaysRef.current.querySelectorAll<HTMLElement>('.single-gif').forEach(gif => {
        const isTarget = gif.dataset.cursorGifId === gifId;
        gif.classList.toggle('active', isTarget);
        const v = gif.querySelector('video');
        if (isTarget) v?.play().catch(() => {});
        else { v?.pause(); }
      });
    };
    const onGifLeave = () => {
      cursor.dataset.cursorGif = 'not-active';
      gifOverlaysRef.current?.querySelectorAll<HTMLElement>('.single-gif').forEach(gif => {
        gif.classList.remove('active');
        gif.querySelector('video')?.pause();
      });
    };

    // Attach all listeners; re-run when DOM changes
    const attach = () => {
      document.querySelectorAll<HTMLElement>('[data-cursor-bubble-text]').forEach(el => {
        el.removeEventListener('mouseenter', onBubbleEnter);
        el.removeEventListener('mouseleave', onBubbleLeave);
        el.addEventListener('mouseenter', onBubbleEnter);
        el.addEventListener('mouseleave', onBubbleLeave);
      });
      document.querySelectorAll<HTMLElement>('[data-cursor-gif-target]').forEach(el => {
        el.removeEventListener('mouseenter', onGifEnter);
        el.removeEventListener('mouseleave', onGifLeave);
        el.addEventListener('mouseenter', onGifEnter);
        el.addEventListener('mouseleave', onGifLeave);
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    raf = requestAnimationFrame(animate);
    attach();
    cursor.dataset.cursorInit = 'true';

    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      data-cursor-init="false"
      data-cursor-bubble="not-active"
      data-cursor-gif="not-active"
      data-cursor-background="primary"
      data-cursor-status-move="not-active"
      data-cursor-status-drag="not-active"
    >
      <div className="cursor-bubble">
        <div className="cursor-before" />
        <div className="cursor-background" />
        {/* cursor-text shows bubble label; cursor-text-drag shows "Drag" during drag */}
        <span ref={bubbleTextRef} className="cursor-text">Drag</span>
        <span className="cursor-text-drag">Drag</span>
      </div>
      <div className="cursor-drag-dot left" />
      <div className="cursor-drag-dot right" />
      <div ref={gifOverlaysRef} className="cursor-gif">
        <div className="cursor-before" />
        <div className="overlay single-gif" data-cursor-gif-id="file://deviate-1">
          <video className="overlay" muted loop playsInline>
            <source type="video/mp4" src="/videos/deviate-intro.mp4" />
          </video>
        </div>
        <div className="overlay single-gif" data-cursor-gif-id="file://deviate-2">
          <video className="overlay" muted loop playsInline>
            <source type="video/mp4" src="/videos/deviate-outro.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

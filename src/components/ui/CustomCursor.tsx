import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const bubbleTextRef = useRef<HTMLSpanElement>(null);
  const gifOverlaysRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    const ease = 0.15;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      
      cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(animate);
    };

    const handleElementHover = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const bubbleText = target.dataset.cursorBubbleText;
      const bubbleColor = target.dataset.cursorBubbleColor;
      const gifTarget = target.dataset.cursorGifTarget;

      cursor.dataset.cursorBubble = 'active';
      
      if (bubbleText && bubbleTextRef.current) {
        bubbleTextRef.current.textContent = bubbleText;
      }
      
      if (bubbleColor) {
        cursor.dataset.cursorBackground = bubbleColor;
      }

      if (gifTarget && gifOverlaysRef.current) {
        cursor.dataset.cursorGif = 'active';
        const gifs = gifOverlaysRef.current.querySelectorAll('.single-gif');
        gifs.forEach(gif => {
          if (gif.getAttribute('data-cursor-gif-id') === gifTarget) {
            gif.classList.add('active');
            const video = gif.querySelector('video');
            if (video) video.play();
          } else {
            gif.classList.remove('active');
            const video = gif.querySelector('video');
            if (video) video.pause();
          }
        });
      }
    };

    const handleElementLeave = () => {
      cursor.dataset.cursorBubble = 'not-active';
      cursor.dataset.cursorGif = 'not-active';
      cursor.dataset.cursorBackground = 'primary';
      
      if (gifOverlaysRef.current) {
        const gifs = gifOverlaysRef.current.querySelectorAll('.single-gif');
        gifs.forEach(gif => {
          gif.classList.remove('active');
          const video = gif.querySelector('video');
          if (video) video.pause();
        });
      }
    };

    const attachHoverListeners = () => {
      const hoverElements = document.querySelectorAll('[data-cursor-bubble-text], [data-cursor-gif-target]');
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', handleElementHover);
        el.addEventListener('mouseleave', handleElementLeave);
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();
    attachHoverListeners();
    cursor.dataset.cursorInit = 'true';

    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
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
        <div className="cursor-before"></div>
        <div className="cursor-background"></div>
        <span ref={bubbleTextRef} className="cursor-text">Scroll</span>
        <span className="cursor-text-drag">Drag</span>
      </div>
      <div className="cursor-drag-dot left"></div>
      <div className="cursor-drag-dot right"></div>
      <div ref={gifOverlaysRef} className="cursor-gif">
        <div className="cursor-before"></div>
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
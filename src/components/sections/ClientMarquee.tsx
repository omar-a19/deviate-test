import { useEffect, useRef } from 'react';
import { CLIENTS } from '../data/siteData';

declare global { interface Window { gsap: any; ScrollTrigger: any; } }

export default function ClientMarquee() {
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = groupRef.current;
    if (!el || !window.gsap || !window.ScrollTrigger) return;

    const { gsap, ScrollTrigger } = window;
    const firstContent = el.querySelector<HTMLElement>('.marquee-content');
    if (!firstContent) return;

    const w = firstContent.offsetWidth;
    const speedAttr = el.querySelector<HTMLElement>('[data-marquee-speed]')?.dataset.marqueeSpeed;
    const speed = Number(speedAttr ?? 20) * (w / window.innerWidth);

    let direction = 1;

    function roll(targets: NodeListOf<Element>, vars: Record<string, any>, reverse?: boolean) {
      vars = { ease: 'none', ...vars };
      const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete() { (this as any).totalTime((this as any).rawTime() + (this as any).duration() * 10); },
      });
      const elements = gsap.utils.toArray(targets) as HTMLElement[];
      const clones = elements.map((e: HTMLElement) => {
        const c = e.cloneNode(true) as HTMLElement;
        e.parentNode!.appendChild(c); return c;
      });
      const pos = () => elements.forEach((e: HTMLElement, i: number) =>
        gsap.set(clones[i], { position: 'absolute', overwrite: false, top: e.offsetTop, left: e.offsetLeft + (reverse ? -e.offsetWidth : e.offsetWidth) })
      );
      pos();
      elements.forEach((e: HTMLElement, i: number) => tl.to([e, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0));
      const onResize = () => { const t = tl.totalTime(); tl.totalTime(0); pos(); tl.totalTime(t); };
      window.addEventListener('resize', onResize);
      (tl as any)._cleanup = () => { window.removeEventListener('resize', onResize); clones.forEach((c: HTMLElement) => c.remove()); };
      return tl;
    }

    const marqueeLeft = roll(el.querySelectorAll("[data-marquee-direction='left'] .marquee-content"), { duration: speed });

    const trigger = ScrollTrigger.create({
      trigger: document.querySelector('[data-scroll-container]') ?? document.body,
      onUpdate(self: any) {
        if (self.direction !== direction) {
          direction *= -1;
          gsap.to([marqueeLeft], { timeScale: direction, overwrite: true });
        }
        el.querySelectorAll<HTMLElement>('[data-marquee-status]').forEach(n => {
          n.dataset.marqueeStatus = self.direction === -1 ? 'normal' : 'inverted';
        });
      },
    });

    return () => {
      trigger.kill();
      (marqueeLeft as any)._cleanup?.();
      marqueeLeft.kill();
    };
  }, []);

  return (
    <section
      className="section section-clients-marquee"
      data-theme-section="dark"
      data-scroll-section=""
    >
      <div className="container full">
        <div className="marquee-group" ref={groupRef}>
          <div className="marquee" data-marquee-direction="left" data-marquee-status="normal" data-marquee-speed="20">
            <div className="marquee-scroll" data-scroll="" data-scroll-direction="horizontal" data-scroll-speed="2">
              <div className="marquee-content">
                {CLIENTS.map((client, i) => (
                  <div key={i} className="marquee-item">
                    {client.logo && (
                      <img src={client.logo} alt={client.name}
                        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    )}
                    <span>{client.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

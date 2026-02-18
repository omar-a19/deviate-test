import { useEffect, useRef } from 'react';

export default function Intro() {
  const drawLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = drawLineRef.current;
    if (!el) return;

    const path = el.querySelector<SVGPathElement>('svg path');
    if (path) {
      const length = Math.trunc(path.getTotalLength());
      el.style.setProperty('--svg-path-length', String(length));
      el.dataset.svgPathLength = String(length);
    }

    const { gsap, ScrollTrigger } = window as any;
    if (!gsap || !ScrollTrigger) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: '0% 100%',
        end: '100% 50%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(el, { opacity: 0 }, { opacity: 1, ease: 'none', duration: 0.001, delay: 0.2 });
    tl.to(path, { strokeDashoffset: 0, duration: 2, ease: 'expo.out' }, '< 0');

    return () => tl.scrollTrigger?.kill();
  }, []);

  const splitLine = (chars: string[]) =>
    chars.map((char, i) => (
      <span
        key={i}
        style={{ position: 'relative', display: 'inline-block' }}
        className="single-word"
      >
        <span
          style={{ position: 'relative', display: 'inline-block' }}
          className="single-char"
        >
          <span className="single-char-inner">
            {char === ' ' ? '\u00a0' : char}
          </span>
        </span>
      </span>
    ));

  return (
    <section
      className="section section-intro section-intro-home"
      id="section-intro"
      data-theme-section="dark"
      data-scroll-section=""
    >
      <div className="container">
        <div className="row split">
          <div className="col">
            <h4>
              <a
                href="/about"
                data-cursor-bubble-text="About us"
                data-cursor-bubble-color="secondary"
              >
                {/* Line 1: WE ARE */}
                <span className="split-chars" style={{ display: 'block' }}>
                  {splitLine(['W','E',' ','A','R','E'])}
                </span>
                {/* Line 2: DEVIATE */}
                <span className="split-chars" style={{ display: 'block' }}>
                  {splitLine(['D','E','V','I','A','T','E'])}
                </span>
              </a>
            </h4>
          </div>
        </div>

        <div className="row split">
          <div className="col">
            <div
              ref={drawLineRef}
              className="draw-line"
              data-scroll=""
              data-svg-path-length="399"
              style={{ '--svg-path-length': 399, opacity: 0 } as React.CSSProperties}
            >
              <svg width="233" height="121" viewBox="0 0 233 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1C24.1778 10.741 47.0701 20.9782 69.1085 33.1274C92.4583 45.9995 115.893 61.3548 132.06 83.0048C137.065 89.7066 142.941 98.5964 142.819 107.411C142.742 112.934 135.615 117.475 131.082 118.815C123.229 121.138 113.118 119.82 105.652 116.818C99.8574 114.489 89.8256 108.254 89.8256 100.977C89.8256 88.2399 117.102 86.4402 124.369 85.6229C160.566 81.5519 197.278 87.3847 232 97.3822"
                  stroke="#DEA3EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="col">
            <div className="col-row">
              <h4>
                a creative and marketing agency focused on brands, spaces, and experiences.
                We work closely with design-led and technical teams to translate complex work
                into clear visual identity and communication.
                <span className="symbol-small">®</span> WE DON&apos;T APPLY ONE FORMULA TO EVERY BRAND.
              </h4>
            </div>

            <div className="col-row styled-content">
              <p>
                Each project starts with understanding the industry, the audience, and the
                nature of the work — then building a visual and content system that fits.
              </p>
            </div>

            <div className="col-row">
              <div className="btn btn-primary" data-button-status="">
                <a href="/about" className="btn-click" data-transition-text="About us">
                  <div className="btn-content"><span>About us</span></div>
                  <div className="btn-arrow">
                    {[0, 1, 2].map(i => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <polyline points="14 19 21 12 14 5" fill="none" stroke="#000" strokeMiterlimit="10" />
                        <line x1="21" y1="12" x2="2" y2="12" fill="none" stroke="#000" strokeMiterlimit="10" />
                      </svg>
                    ))}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
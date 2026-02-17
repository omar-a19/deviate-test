import { useEffect, useRef } from 'react';
import 'flickity/css/flickity.css';
import Flickity from 'flickity';
import LazyLoad from 'vanilla-lazyload';
import { WORK_ITEMS } from '../data/siteData';

declare global { interface Window { Flickity: typeof Flickity; } }
window.Flickity = Flickity;

const TINY = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function srcset(base: string, fmt: 'jpg' | 'webp') {
  const s = base.replace(/\.(jpg|png|webp)$/, '');
  return [400, 540, 720, 1080].map(w => `${s}-${w}x-q72.${fmt} ${w}w`).join(', ');
}

export default function WorkSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const flktyRef   = useRef<Flickity | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // ── Flickity ─────────────────────────────────────────────────────
    // watchCSS MUST be false — the project has no .flickity-carousel::after
    // content:"flickity" rule, so watchCSS silently destroys the instance.
    const carousel = section.querySelector<HTMLElement>('.flickity-carousel');
    if (carousel) {
      flktyRef.current = new Flickity(carousel, {
        watchCSS:           false,   // ← critical fix
        contain:            true,
        wrapAround:         false,
        dragThreshold:      10,
        prevNextButtons:    false,
        pageDots:           false,
        cellAlign:          'left',
        selectedAttraction: 0.015,
        friction:           0.25,
        percentPosition:    true,
        freeScroll:         false,
        on: {
          dragStart: () => {
            const sl = carousel.querySelector<HTMLElement>('.flickity-slider');
            if (sl) sl.style.pointerEvents = 'none';
          },
          dragEnd: () => {
            const sl = carousel.querySelector<HTMLElement>('.flickity-slider');
            if (sl) sl.style.pointerEvents = '';
          },
        },
      });
    }

    // ── LazyLoad ─────────────────────────────────────────────────────
    const scrollEl = document.querySelector<HTMLElement>('[data-scroll-container]');
    const lazyLoad = new LazyLoad({
      container: scrollEl ?? document.documentElement,
      elements_selector: '.lazy',
    });

    // ── Video hover ───────────────────────────────────────────────────
    const videoItems = section.querySelectorAll<HTMLElement>('[data-thumb-video-on-hover="true"]');
    const onEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const v  = el.querySelector<HTMLVideoElement>('video');
      if (!v) return;
      el.dataset.thumbVideoStatus = 'active';
      v.load(); v.play().catch(() => {});
    };
    const onLeave = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const v  = el.querySelector<HTMLVideoElement>('video');
      if (!v) return;
      el.dataset.thumbVideoStatus = 'not-active';
      v.pause();
    };
    videoItems.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      flktyRef.current?.destroy();
      lazyLoad.destroy();
      videoItems.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section section-more-work-slider"
      data-theme-section="dark"
      data-scroll-section=""
    >
      <div className="container large">
        <div
          className={`flickity-slider-group count-${WORK_ITEMS.length}`}
          data-flickity-slider-type="work"
          id="flickity-slider-type-work-id-0"
        >
          <ul className="flickity-carousel" tabIndex={0}>
            {WORK_ITEMS.map((item, i) => (
              <li
                key={i}
                className="flickity-slide"
                data-flickity-slide-count={i}
                data-cursor-bubble-text="View"
                data-cursor-bubble-color="secondary"
              >
                <a
                  className="single-work-item"
                  href={item.href}
                  data-transition-text={item.client}
                  data-thumb-video-on-hover="true"
                  data-thumb-video-status="not-active"
                >
                  <div className="overlay tile">
                    <div className="overlay tile-inner">
                      <picture className="overlay">
                        <source type="image/webp" data-srcset={srcset(item.image, 'webp')} />
                        <img
                          alt={item.client}
                          className="lazy"
                          width={1080} height={810}
                          src={TINY}
                          data-src={item.image}
                          data-srcset={srcset(item.image, 'jpg')}
                        />
                      </picture>
                      {item.videoSrc && (
                        <video
                          className="overlay lazy"
                          muted loop playsInline
                          data-src={item.videoSrc}
                          data-poster={item.image}
                          poster={TINY}
                        >
                          <source type="video/mp4" data-src={item.videoSrc} />
                        </video>
                      )}
                      <div className="overlay overlay-dark" />
                    </div>
                  </div>
                  <div className="overlay content">
                    <h5 className="title">{item.title}</h5>
                    <h5 className="client">{item.client}</h5>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

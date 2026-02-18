import { useEffect, useRef } from 'react';
import { WORK_ITEMS } from '../data/siteData';

declare global {
  interface Window { Flickity: any; }
}

const TINY = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default function WorkSlider() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const carousel = section.querySelector<HTMLElement>('.flickity-carousel');
    if (!carousel) return;

    // Dynamically import Flickity so it only runs client-side
    import('flickity').then(({ default: Flickity }) => {
      // The CSS sets content:"flickity" on ::after which watchCSS reads.
      // We use watchCSS:true so it matches the original index.js behavior.
      const flkty = new Flickity(carousel, {
        watchCSS: true,   // respects .flickity-carousel::after { content: "flickity" }
        contain: true,
        wrapAround: false,
        dragThreshold: 10,
        prevNextButtons: false,
        pageDots: false,
        cellAlign: 'left',
        selectedAttraction: 0.015,
        friction: 0.25,
        percentPosition: true,
        freeScroll: false,
        on: {
          dragStart() {
            const sl = carousel.querySelector<HTMLElement>('.flickity-slider');
            if (sl) sl.style.pointerEvents = 'none';
            // Show "Drag" bubble on drag
            const cursor = document.querySelector('[data-cursor-status-drag]') as HTMLElement;
            const bubble = document.querySelector('[data-cursor-bubble]') as HTMLElement;
            if (cursor) cursor.dataset.cursorStatusDrag = 'active';
            if (bubble) bubble.setAttribute('data-cursor-bubble', 'active');
          },
          dragEnd() {
            const sl = carousel.querySelector<HTMLElement>('.flickity-slider');
            if (sl) sl.style.pointerEvents = '';
            const cursor = document.querySelector('[data-cursor-status-drag]') as HTMLElement;
            const bubble = document.querySelector('[data-cursor-bubble]') as HTMLElement;
            if (cursor) cursor.dataset.cursorStatusDrag = 'not-active';
            if (bubble) bubble.setAttribute('data-cursor-bubble', 'not-active');
          },
        },
      });

      // Show "Drag" cursor when hovering the slider area (not on a specific slide)
      const sliderGroup = section.querySelector<HTMLElement>('[data-flickity-slider-type="work"]');
      const handleSliderEnter = () => {
        const cursor = document.querySelector('[data-cursor-status-move]') as HTMLElement;
        if (cursor) cursor.dataset.cursorStatusMove = 'active';
      };
      const handleSliderLeave = () => {
        const cursor = document.querySelector('[data-cursor-status-move]') as HTMLElement;
        if (cursor) cursor.dataset.cursorStatusMove = 'not-active';
      };
      sliderGroup?.addEventListener('mousemove', handleSliderEnter);
      sliderGroup?.addEventListener('mouseleave', handleSliderLeave);

      // Video hover per slide
      const videoItems = section.querySelectorAll<HTMLElement>('[data-thumb-video-on-hover="true"]');
      const onEnter = (e: Event) => {
        const el = e.currentTarget as HTMLElement;
        el.dataset.thumbVideoStatus = 'active';
        el.querySelector<HTMLVideoElement>('video')?.play().catch(() => {});
      };
      const onLeave = (e: Event) => {
        const el = e.currentTarget as HTMLElement;
        el.dataset.thumbVideoStatus = 'not-active';
        el.querySelector<HTMLVideoElement>('video')?.pause();
      };
      videoItems.forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });

      // Lazy-load images inside slider
      import('vanilla-lazyload').then(({ default: LazyLoad }) => {
        new LazyLoad({ container: section, elements_selector: '.lazy' });
      });

      return () => {
        flkty.destroy();
        sliderGroup?.removeEventListener('mousemove', handleSliderEnter);
        sliderGroup?.removeEventListener('mouseleave', handleSliderLeave);
        videoItems.forEach(el => {
          el.removeEventListener('mouseenter', onEnter);
          el.removeEventListener('mouseleave', onLeave);
        });
      };
    });
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
          className="flickity-slider-group"
          data-flickity-slider-type="work"
          id="flickity-slider-type-work-id-0"
          // Slider area shows "Drag" cursor by default
          data-cursor-bubble-text="Drag"
          data-cursor-bubble-color="secondary"
        >
          <ul className="flickity-carousel" tabIndex={0}>
            {WORK_ITEMS.map((item, i) => (
              <li
                key={i}
                className="flickity-slide"
                data-flickity-slide-count={i}
              >
                {/* Each slide shows "View" when hovered */}
                <a
                  className="single-work-item"
                  href={item.href}
                  data-transition-text={item.client}
                  data-thumb-video-on-hover="true"
                  data-thumb-video-status="not-active"
                  data-cursor-bubble-text="View"
                  data-cursor-bubble-color="secondary"
                >
                  <div className="overlay tile">
                    <div className="overlay tile-inner">
                      <picture className="overlay">
                        <img
                          alt={item.client}
                          className="lazy"
                          width={1080}
                          height={810}
                          src={TINY}
                          data-src={item.image}
                        />
                      </picture>
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

import { useEffect, useRef } from 'react';

/**
 * Initialises Locomotive Scroll on the returned ref element.
 *
 * Locomotive Scroll v5 removed the `el` option — the constructor
 * now accepts the scroll container element directly as its first argument.
 * We import dynamically so it can't break SSR/vite build.
 */
export const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;

    let scroll: { destroy: () => void } | null = null;

    import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
      try {
        // v4 API (takes options object with `el`)
        scroll = new (LocomotiveScroll as any)({
          el,
          smooth: true,
          multiplier: 1,
        });
      } catch {
        // v5 API (takes element directly or no args — uses [data-scroll-container])
        try {
          scroll = new (LocomotiveScroll as any)();
        } catch (err) {
          console.warn('LocomotiveScroll init failed', err);
        }
      }
    });

    return () => {
      try { scroll?.destroy(); } catch {}
    };
  }, []);

  return scrollRef;
};

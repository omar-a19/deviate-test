import { useLocomotiveScroll } from '../hooks/useLocomotiveScroll';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/Pagetransition';
import CustomCursor from '../components/ui/CustomCursor';
import { WORK_ITEMS } from '../components/data/siteData';
import { splitChars } from '../components/ui/shared';
import WorkSlider from '../components/sections/WorkSlider';

const TINY = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default function WorkPage() {
  const scrollRef = useLocomotiveScroll();
  const currentPath = '/work';

  const allTags = Array.from(new Set(WORK_ITEMS.flatMap(w => w.tags)));

  return (
    <>
      <PageTransition />
      <CustomCursor />
      <main className="main" data-barba="container" data-barba-namespace="work">
        <div className="fixed-background dark"><div className="texture" /></div>
        <Navigation currentPath={currentPath} />
        <div className="main-wrap" data-scroll-container ref={scrollRef}>

          {/* ── Work Header ────────────────────────────────────────── */}
          <header
            className="section default-header full-height all-devices work-single-header"
            data-theme-section="dark"
            data-scroll-section=""
          >
            <div className="fixed-background dark"><div className="texture" /></div>
            <div className="overlay a-shape-pattern" />
            <div className="overlay overlay-dark" />
            <div className="container">
              <div className="row">
                <div className="col">
                  <h4 style={{ color: 'var(--color-secondary)', paddingBottom: '0.5em' }}>
                    Our Work
                  </h4>
                  <h1 className="split-chars animate-h1 desktop">
                    {splitChars('Portfolio')}
                  </h1>
                  <h1 className="split-chars animate-h1 mobile">
                    {splitChars('Work')}
                  </h1>
                </div>
              </div>
            </div>
          </header>

          {/* ── Filter / Tags ──────────────────────────────────────── */}
          <section
            className="section section-work-intro"
            data-theme-section="dark"
            data-scroll-section=""
          >
            <div className="container">
              <div className="row split">
                <div className="col">
                  <h3>Selected cases</h3>
                </div>
                <div className="col">
                  <div className="col-row styled-content">
                    <p>
                      Bold brands, ambitious campaigns, and experiences that deviate
                      from the ordinary. Every project starts with understanding —
                      and ends with impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Work Grid ──────────────────────────────────────────── */}
          <section
            className="section"
            data-theme-section="dark"
            data-scroll-section=""
            style={{ paddingTop: 0 }}
          >
            <div className="container large">
              <div
                className="section-grid-images"
                style={{ paddingTop: 0 }}
              >
                <div className="row" style={{ '--gap': '1.5em', '--columns': '3' } as React.CSSProperties}>
                  {WORK_ITEMS.map((item, i) => (
                    <div key={i} className="col">
                      <a
                        className="single-work-item"
                        href={item.href}
                        data-transition-text={item.client}
                        data-cursor-bubble-text="View"
                        data-cursor-bubble-color="secondary"
                        style={{ display: 'block', position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: 'var(--border-radius, 0.75em)', background: '#1a1a1a' }}
                      >
                        <div className="overlay tile">
                          <div className="overlay tile-inner">
                            <picture className="overlay">
                              <img
                                alt={item.client}
                                className="lazy"
                                src={TINY}
                                data-src={item.image}
                                width={1080}
                                height={810}
                                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                            </picture>
                            <div className="overlay overlay-dark" />
                          </div>
                        </div>
                        <div className="overlay content" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.25em 1.4em', gap: '0.2em' }}>
                          <h5 className="title">{item.title}</h5>
                          <h5 className="client" style={{ opacity: 0.7 }}>{item.client}</h5>
                          <div style={{ display: 'flex', gap: '0.5em', flexWrap: 'wrap', marginTop: '0.4em' }}>
                            {item.tags.map(tag => (
                              <span key={tag} style={{ fontSize: '0.65em', padding: '0.2em 0.6em', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '2em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Featured Slider ────────────────────────────────────── */}
          <section
            className="section section-home-work-intro"
            data-theme-section="dark"
            data-scroll-section=""
          >
            <div className="container">
              <div className="row split">
                <div className="col">
                  <h3>Drag through more</h3>
                </div>
              </div>
            </div>
          </section>
          <WorkSlider />

          <Footer />
        </div>
      </main>
    </>
  );
}

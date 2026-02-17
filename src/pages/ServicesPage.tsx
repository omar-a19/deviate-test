import { useLocomotiveScroll } from '../hooks/useLocomotiveScroll';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/Pagetransition';
import CustomCursor from '../components/ui/CustomCursor';
import { SERVICES } from '../components/data/siteData';
import { splitChars, PrimaryButton } from '../components/ui/shared';

export default function ServicesPage() {
  const scrollRef = useLocomotiveScroll();
  const currentPath = '/services';

  return (
    <>
      <PageTransition />
      <CustomCursor />
      <main className="main" data-barba="container" data-barba-namespace="services">
        <div className="fixed-background dark"><div className="texture" /></div>
        <Navigation currentPath={currentPath} />
        <div className="main-wrap" data-scroll-container ref={scrollRef}>

          {/* ── Header ───────────────────────────────────────────── */}
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
                  <h4 style={{ color: 'var(--color-secondary)', paddingBottom: '0.5em' }}>What we do</h4>
                  <h1 className="split-chars animate-h1 desktop">
                    {splitChars('Services')}
                  </h1>
                  <h1 className="split-chars animate-h1 mobile">
                    {splitChars('Services')}
                  </h1>
                </div>
              </div>
            </div>
          </header>

          {/* ── Intro ─────────────────────────────────────────────── */}
          <section
            className="section section-intro"
            data-theme-section="dark"
            data-scroll-section=""
          >
            <div className="container">
              <div className="row split">
                <div className="col">
                  <h3>What we do</h3>
                </div>
                <div className="col">
                  <div className="col-row">
                    <h4>
                      We build brands and campaigns that deviate from the ordinary.
                      Our services span strategy, identity, film, digital, and content —
                      always shaped by what your brand actually needs.<span className="symbol-small">®</span>
                    </h4>
                  </div>
                  <div className="col-row">
                    <PrimaryButton href="/contact" label="Start a project" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Services Grid ──────────────────────────────────────── */}
          <section
            className="section section-services"
            data-theme-section="dark"
            data-scroll-section=""
          >
            <div className="container">
              <div className="row" style={{ '--gap': 'var(--col-padding)', '--columns': '3', display: 'flex', flexWrap: 'wrap', gap: '0 var(--col-padding)' } as React.CSSProperties}>
                {SERVICES.map((service, i) => (
                  <div
                    key={i}
                    className="col"
                    data-button-status=""
                    style={{ width: 'calc((99.95% / 3) - (var(--col-padding) * (2/3)))', display: 'flex', flexDirection: 'column', gap: '0.75em', paddingTop: 'calc(var(--section-padding) * 0.6)', borderTop: '1px solid var(--color-border)' }}
                  >
                    <h4>
                      <span style={{ color: 'var(--color-secondary)', display: 'block', fontSize: '0.8em', marginBottom: '0.5em', fontWeight: 400 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {service.title}
                    </h4>
                    <div className="col-row" style={{ maxWidth: '20em' }}>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ───────────────────────────────────────────────── */}
          <section
            className="section section-empty"
            data-theme-section="dark"
            data-scroll-section=""
          >
            <div className="container">
              <div className="row" style={{ justifyContent: 'center', paddingTop: 'var(--section-padding)', borderTop: '1px solid var(--color-border)' }}>
                <div className="col" style={{ textAlign: 'center', maxWidth: '30em' }}>
                  <h3 style={{ marginBottom: '1em' }}>
                    <span
                      data-cursor-gif-target="file://deviate-2"
                      data-cursor-bubble-text="Contact"
                      data-cursor-bubble-color="secondary"
                    >
                      Ready to deviate?
                    </span>
                  </h3>
                  <p style={{ marginBottom: '2em' }}>
                    We work with a select number of clients at a time to give every
                    project our full attention. Let's talk about yours.
                  </p>
                  <PrimaryButton href="/contact" label="Get in touch" />
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}

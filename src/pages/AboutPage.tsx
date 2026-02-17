import { useLocomotiveScroll } from '../hooks/useLocomotiveScroll';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/Pagetransition';
import CustomCursor from '../components/ui/CustomCursor';
import { TEAM, SERVICES, SITE } from '../components/data/siteData';
import { splitChars, PrimaryButton } from '../components/ui/shared';
import ShowreelPlayer from '../components/sections/Showreel';
import ClientsMarquee from '../components/sections/ClientMarquee';

export default function AboutPage() {
  const scrollRef = useLocomotiveScroll();
  const currentPath = '/about';

  return (
    <>
      <PageTransition />
      <CustomCursor />
      <main className="main" data-barba="container" data-barba-namespace="about">
        <div className="fixed-background dark"><div className="texture" /></div>
        <Navigation currentPath={currentPath} />
        <div className="main-wrap" data-scroll-container ref={scrollRef}>

          {/* ── Header ───────────────────────────────────────────── */}
          <header
            className="section about-header"
            data-theme-section="dark"
            data-scroll-section=""
            style={{ overflow: 'hidden', position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center' }}
          >
            <div className="fixed-background dark"><div className="texture" /></div>
            <div className="overlay a-shape-pattern" />
            <div className="container">
              <div className="row">
                <div className="col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2em' }}>
                  <h4 style={{ color: 'var(--color-secondary)', zIndex: 2 }}>About us</h4>
                  <h1 className="split-chars animate-h1" style={{ zIndex: 2 }}>
                    {splitChars('Off the')}
                    <br />
                    {splitChars('Norm.')}
                  </h1>
                </div>
              </div>
            </div>
          </header>

          {/* ── Intro ─────────────────────────────────────────────── */}
          <section
            className="section section-intro section-intro-about"
            id="section-intro"
            data-theme-section="dark"
            data-scroll-section=""
          >
            <div className="container">
              <div className="row split">
                <div className="col">
                  <div
                    className="draw-line is-inview"
                    data-scroll=""
                    data-svg-path-length="399"
                    style={{ '--svg-path-length': 399, opacity: 1 } as React.CSSProperties}
                  >
                    <svg width="233" height="121" viewBox="0 0 233 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 1C24.1778 10.741 47.0701 20.9782 69.1085 33.1274C92.4583 45.9995 115.893 61.3548 132.06 83.0048C137.065 89.7066 142.941 98.5964 142.819 107.411C142.742 112.934 135.615 117.475 131.082 118.815C123.229 121.138 113.118 119.82 105.652 116.818C99.8574 114.489 89.8256 108.254 89.8256 100.977C89.8256 88.2399 117.102 86.4402 124.369 85.6229C160.566 81.5519 197.278 87.3847 232 97.3822"
                        stroke="#DEA3EB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{ strokeDashoffset: '0px' }}
                      />
                    </svg>
                  </div>
                </div>
                <div className="col">
                  <div className="col-row">
                    <h4>
                      {SITE.description} We work with brands, spaces, and experiences —
                      refusing to apply one formula to every project.<span className="symbol-small">®</span>
                    </h4>
                  </div>
                  <div className="col-row styled-content">
                    <p>
                      Each project starts with understanding the industry, the audience,
                      and the nature of the work — then building a visual and content
                      system that truly fits. No templates. No shortcuts. Just work that
                      deviates.
                    </p>
                  </div>
                  <div className="col-row">
                    <PrimaryButton href="/contact" label="Work with us" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Showreel ─────────────────────────────────────────── */}
          <ShowreelPlayer vimeoId={SITE.vimeoId} poster="/bg1.png" />

          {/* ── Founders / Team ──────────────────────────────────── */}
          {/* <section
            className="section section-founders"
            data-theme-section="dark"
            data-scroll-section=""
          >
            <div className="container">
              <div className="row split">
                <div className="col">
                  <h3>The team</h3>
                </div>
              </div>
              <div className="row split" style={{ '--gap': 'var(--col-padding)', '--columns': String(TEAM.length) } as React.CSSProperties}>
                {TEAM.map((member, i) => (
                  <div key={i} className="col" style={{ width: `calc((99.95% / ${TEAM.length}) - (var(--col-padding) * ${(TEAM.length - 1) / TEAM.length}))`, display: 'flex', flexDirection: 'column', gap: '1em', paddingTop: 'calc(var(--section-padding) * 0.6)' }}>
                    <div className="col-row" style={{ maxWidth: '14em', paddingBottom: '1.5em', position: 'relative' }}>
                      <div className="single-founder-image" style={{ borderRadius: 'calc(var(--border-radius) * 0.5)', aspectRatio: '3/4', width: '100%', position: 'relative', overflow: 'hidden', transform: 'rotate(5deg)', background: 'rgba(222,163,235,0.1)' }}>
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(222,163,235,0.2) 0%, rgba(222,163,235,0.05) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: '3em', opacity: 0.3 }}>D</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-row" style={{ paddingBottom: '0.5em' }}>
                      <h5 style={{ color: 'var(--color-secondary)' }}>{member.role}</h5>
                    </div>
                    <div className="col-row">
                      <h4>{member.name}</h4>
                    </div>
                    {member.email && (
                      <div className="col-row">
                        <p><a href={`mailto:${member.email}`}>{member.email}</a></p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section> */}

          {/* ── Stats ─────────────────────────────────────────────── */}
          <section
            className="section block-stats"
            data-theme-section="dark"
            data-scroll-section=""
          >
            <div className="container center pt-6">
              <div className="row">
                {[
                  { number: '50+', label: 'Brands deviated' },
                  { number: '8',   label: 'Years off the norm' },
                  { number: '3',   label: 'Cannes shortlists'  },
                ].map((stat, i) => (
                  <div key={i} className="col">
                    <div className="col-row" style={{ paddingBottom: 'var(--row-padding)' }}>
                      <h3 style={{ display: 'flex' }}>{stat.number}</h3>
                    </div>
                    <div className="col-row">
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Clients ───────────────────────────────────────────── */}
          <ClientsMarquee />

          <Footer />
        </div>
      </main>
    </>
  );
}

import { useParams, useNavigate } from 'react-router-dom';
import { useLocomotiveScroll } from '../hooks/useLocomotiveScroll';
import { WORK_ITEMS } from '../components/data/siteData';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import WorkSlider from '../components/sections/WorkSlider';

const PLACEHOLDER = '/devbg.png';

const BTN_LINES = [
  { w: 135, h: 5, vb: '0 0 135 5', d: 'M134 2.34581C110.524 3.61768 86.9065 1.6685 63.3919 2.39566C51.1632 2.77382 39.6174 4.61181 27.3033 3.79132C18.3941 3.19769 9.97867 1 1 1' },
  { w: 132, h: 6, vb: '0 0 132 6', d: 'M1 1C43.8806 5.55649 87.3778 5.96789 131 3.50575' },
  { w: 131, h: 8, vb: '0 0 131 8', d: 'M1 7C4.5751 6.87455 8.08097 6.30384 11.6235 5.87179C24.5768 4.29203 37.5833 3.24092 50.6327 2.58974C77.0517 1.27141 103.545 1 130 1' },
  { w: 132, h: 5, vb: '0 0 132 5', d: 'M1 2.89091C19.9425 2.89091 38.7471 0.740209 57.6912 1.02619C81.9375 1.3922 107.049 6.48833 131 2.455' },
  { w: 133, h: 7, vb: '0 0 133 7', d: 'M1.5 6.00004C13.8411 5.65915 26.1307 4.05664 38.4948 3.72227C59.9788 3.14126 81.6683 5.17836 103.099 3.38893C108.421 2.94454 113.818 2.00004 119.158 2.00004C120.87 2.00004 122.872 1.36997 124.43 1.52782C127.492 1.83797 128.804 3.00004 131.5 3.00004' },
  { w: 132, h: 6, vb: '0 0 132 6', d: 'M1 5C2.82682 4.9188 4.62167 4.31551 6.399 3.94961C13.4187 2.50446 20.6319 1.77026 27.783 1.30982C37.3154 0.696054 46.8967 0.940951 56.3185 2.52606C61.559 3.4077 66.84 3.9771 72.1763 3.70083C77.118 3.445 81.7816 1.75886 86.6773 1.32364C91.7109 0.876164 96.6096 0.938948 101.56 2.01468C106.226 3.02873 110.462 4.87567 115.34 4.7374C119.22 4.62744 123.162 3.30804 126.873 2.26346C128.2 1.89004 129.615 1.01958 131 1.01958' },
];

function BtnLines() {
  return (
    <div className="btn-line">
      {BTN_LINES.map((l, i) => (
        <div key={i} className="btn-line-item" data-line-status={i === 0 ? 'active' : ''}>
          <svg width={l.w} height={l.h} viewBox={l.vb} fill="none">
            <path d={l.d} stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      ))}
    </div>
  );
}

function splitChars(text: string) {
  return text.split(' ').map((word, wi) => (
    <div key={wi} style={{ position: 'relative', display: 'inline-block' }} className="single-word">
      {word.split('').map((char, ci) => (
        <div key={ci} style={{ position: 'relative', display: 'inline-block' }} className="single-char">
          <div className="single-char-inner">{char}</div>
        </div>
      ))}
    </div>
  ));
}

export default function WorkSinglePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const scrollRef = useLocomotiveScroll();

  const idx = WORK_ITEMS.findIndex(w => w.slug === slug);
  const item = WORK_ITEMS[idx];

  if (!item) {
    navigate('/work');
    return null;
  }

  const nextItem = WORK_ITEMS[(idx + 1) % WORK_ITEMS.length];

  return (
    <>
      <CustomCursor />
      <main className="main" data-barba="container" data-barba-namespace="work-single">
        <div className="fixed-background dark"><div className="texture" /></div>
        <Navigation currentPath="/work" />

        <div className="main-wrap" data-scroll-container ref={scrollRef}>

          {/* ── HERO HEADER ─────────────────────────────────────────── */}
          <header
            className="section default-header work-single-header full-height all-devices"
            data-theme-section="dark"
            data-scroll-section=""
          >
            <div className="overlay single-background">
              {/* Background image with parallax */}
              <picture
                className="overlay overlay-image overlay-image-desktop"
                data-scroll=""
                data-scroll-speed="-5"
                data-scroll-position="top"
              >
                <img
                  alt={item.client}
                  className="overlay"
                  src={item.image || PLACEHOLDER}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </picture>
              <div className="overlay overlay-fade" />
            </div>

            <div className="container medium">
              <div className="row">
                <div className="col">
                  <h1 className="split-chars animate-h1">
                    {splitChars(item.title)}
                  </h1>
                  <h4 className="animate-h4">
                    <span>{item.client}</span>
                  </h4>
                </div>
              </div>
            </div>

            {/* Bottom links: Scroll Down + Next case */}
            <div className="bottom-links">
              <div className="btn btn-link" data-button-status="">
                <div className="btn-click" style={{ cursor: 'pointer' }} onClick={() => {
                  document.getElementById('section-intro')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <div className="btn-content"><span>Scroll Down</span></div>
                  <BtnLines />
                </div>
              </div>
              <div className="btn btn-link" data-button-status="">
                <a href={`/work/${nextItem.slug}`} className="btn-click" data-transition-text={nextItem.client}>
                  <div className="btn-content"><span>Next case</span></div>
                  <BtnLines />
                </a>
              </div>
            </div>
          </header>

          {/* ── INTRO ────────────────────────────────────────────────── */}
          <section
            className="section work-single-intro"
            id="section-intro"
            data-theme-section="dark"
            data-scroll-section=""
          >
            <div className="container">
              <div className="row split">
                <div className="col">
                  <div className="col-wrap">
                    <div className="col-row services">
                      <h5>Services</h5>
                      <p>{item.tags.join(', ')}</p>
                    </div>
                    {item.year && (
                      <div className="col-row">
                        <h5>Year</h5>
                        <p>{item.year}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col">
                  <div className="col-row">
                    <h4>{item.description || `An outstanding project delivered for ${item.client}.`}</h4>
                  </div>
                  <div className="col-row styled-content">
                    <p>
                      We partnered with {item.client} to deliver a {item.tags[0]?.toLowerCase()} project
                      that breaks from the norm. Every decision was driven by the brand's core truth
                      and the audience's real needs — the result speaks for itself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── MAIN VIMEO / VIDEO ────────────────────────────────────── */}
          {item.videoSrc && (
            <section className="section block-vimeo-player" data-theme-section="dark" data-scroll-section="">
              <div className="container large count-1 size-large">
                <div className="single-vimeo-player player-theme-secondary">
                  <video
                    src={item.videoSrc}
                    controls
                    playsInline
                    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, objectFit: 'cover' }}
                  />
                  {/* Placeholder while video loads */}
                  <picture className="overlay vimeo-overlay-placeholder">
                    <img alt={item.title} src={item.image || PLACEHOLDER} className="overlay" style={{ objectFit: 'cover' }} />
                  </picture>
                </div>
              </div>
            </section>
          )}

          {/* ── TEXT SECTION ─────────────────────────────────────────── */}
          <section className="section block-textarea" data-theme-section="dark" data-scroll-section="">
            <div className="container small center">
              <div className="row row-title">
                <div className="col">
                  <h4>We love it when a brand comes together.</h4>
                </div>
              </div>
              <div className="row row-content">
                <div className="col styled-content">
                  <p>
                    Working with {item.client} was a reminder of what great collaboration looks like.
                    The brief was clear, the ambition was high, and the trust was real. We're proud
                    of what we built together — and we're looking forward to what comes next.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── IMAGES GRID ──────────────────────────────────────────── */}
          <section className="section block-images" data-theme-section="dark" data-scroll-section="">
            <div className="container large count-3">
              <div className="flickity-slider-group" data-flickity-slider-type="images" id="flickity-slider-type-images-id-0">
                <ul className="flickity-carousel">
                  {[PLACEHOLDER, item.image || PLACEHOLDER, PLACEHOLDER].map((src, i) => (
                    <li key={i} className="flickity-slide" data-cursor-bubble-color="secondary">
                      <figure>
                        <picture
                          className="styled-image"
                          data-ratio-status="true"
                          style={{ paddingTop: i === 0 ? '133%' : '75%', display: 'block', position: 'relative', overflow: 'hidden' }}
                        >
                          <img
                            alt={`${item.client} ${i + 1}`}
                            src={src}
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </picture>
                      </figure>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── MORE WORK INTRO ──────────────────────────────────────── */}
          <section className="section section-work-intro" data-theme-section="dark" data-scroll-section="">
            <div className="container">
              <div className="row split">
                <div className="col">
                  <div className="col-row">
                    <div className="btn btn-primary" data-button-status="">
                      <a href="/work" className="btn-click" data-transition-text="Work">
                        <div className="btn-content"><span>All work</span></div>
                        <div className="btn-arrow">
                          {[0, 1, 2].map(i => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <polyline points="14 19 21 12 14 5" fill="none" stroke="#000" strokeMiterlimit="10"/>
                              <line x1="21" y1="12" x2="2" y2="12" fill="none" stroke="#000" strokeMiterlimit="10"/>
                            </svg>
                          ))}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <h3>More work</h3>
                </div>
              </div>
            </div>
          </section>

          {/* ── MORE WORK SLIDER ─────────────────────────────────────── */}
          <WorkSlider />

          <Footer />
        </div>
      </main>
    </>
  );
}

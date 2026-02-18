import { SERVICES } from '../data/siteData';

export default function ServicesSection() {
  return (
    <section
      className="section section-services-grid"
      data-theme-section="dark"
      data-scroll-section=""
    >
      <div className="container">

        {/* Intro row */}
        <div className="row split" style={{ marginBottom: 'var(--section-padding)' }}>
          <div className="col">
            <h3>What we do</h3>
          </div>
          <div className="col">
            <div className="col-row">
              <h4>
                We build brands and campaigns that deviate from the ordinary.
                Strategy, identity, film, digital — always shaped by what your
                brand actually needs.<span className="symbol-small">®</span>
              </h4>
            </div>
            <div className="col-row" style={{ marginTop: 'var(--row-padding)' }}>
              <div className="btn btn-primary" data-button-status="">
                <a href="/services" className="btn-click" data-transition-text="Services">
                  <div className="btn-content"><span>All Services</span></div>
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

        {/* Services grid */}
        <div
          className="row"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0 var(--col-padding)',
          }}
        >
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="col section-services-grid"
              data-scroll=""
              data-scroll-speed={i % 2 === 0 ? '0' : '1'}
              style={{ paddingBottom: 'calc(var(--section-padding) * 0.75)' }}
            >
              <div style={{
                borderTop: '1px solid var(--color-border, rgba(255,255,255,0.12))',
                paddingTop: 'calc(var(--section-padding) * 0.5)',
              }}>
                <div style={{
                  fontSize: '0.7em',
                  fontWeight: 600,
                  color: '#DEA3EB',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75em',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 style={{ marginBottom: '0.75em', fontWeight: 700 }}>{service.title}</h4>
                <p style={{ fontSize: '0.9em', opacity: 0.7, maxWidth: '22em', lineHeight: 1.6 }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

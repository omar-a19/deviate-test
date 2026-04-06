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
        <div className="services-grid-wrapper">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="service-item-col"
              data-scroll=""
              data-scroll-speed={i % 2 === 0 ? '0' : '1'}
            >
              <div className="service-item-inner">
                <div className="service-number">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">
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

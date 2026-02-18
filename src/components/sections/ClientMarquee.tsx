import { CLIENTS } from '../data/siteData';

// Duplicate the list so the loop is seamless
const ITEMS = [...CLIENTS, ...CLIENTS, ...CLIENTS];

export default function ClientMarquee() {
  return (
    <section
      className="section section-clients-marquee"
      data-theme-section="dark"
      data-scroll-section=""
    >
      <div className="marquee-group">
        <div className="marquee" data-marquee-status="normal">
          {/* Pure CSS infinite scroll — no GSAP needed */}
          <div className="marquee-scroll-css">
            <div className="marquee-track">
              {ITEMS.map((client, i) => (
                <div key={i} className="marquee-item">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                      <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.25"/>
                    </svg>
                  )}
                  <span className="marquee-client-name">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

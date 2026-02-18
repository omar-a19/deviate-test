const BTN_LINES = [
  { w: 132, h: 6, vb: '0 0 132 6', d: 'M1 5C2.82682 4.9188 4.62167 4.31551 6.399 3.94961C13.4187 2.50446 20.6319 1.77026 27.783 1.30982C37.3154 0.696054 46.8967 0.940951 56.3185 2.52606C61.559 3.4077 66.84 3.9771 72.1763 3.70083C77.118 3.445 81.7816 1.75886 86.6773 1.32364C91.7109 0.876164 96.6096 0.938948 101.56 2.01468C106.226 3.02873 110.462 4.87567 115.34 4.7374C119.22 4.62744 123.162 3.30804 126.873 2.26346C128.2 1.89004 129.615 1.01958 131 1.01958' },
  { w: 135, h: 5, vb: '0 0 135 5', d: 'M134 2.34581C110.524 3.61768 86.9065 1.6685 63.3919 2.39566C51.1632 2.77382 39.6174 4.61181 27.3033 3.79132C18.3941 3.19769 9.97867 1 1 1' },
  { w: 132, h: 6, vb: '0 0 132 6', d: 'M1 1C43.8806 5.55649 87.3778 5.96789 131 3.50575' },
  { w: 132, h: 5, vb: '0 0 132 5', d: 'M1 2.89091C19.9425 2.89091 38.7471 0.740209 57.6912 1.02619C81.9375 1.3922 107.049 6.48833 131 2.455' },
  { w: 131, h: 8, vb: '0 0 131 8', d: 'M1 7C4.5751 6.87455 8.08097 6.30384 11.6235 5.87179C24.5768 4.29203 37.5833 3.24092 50.6327 2.58974C77.0517 1.27141 103.545 1 130 1' },
  { w: 133, h: 7, vb: '0 0 133 7', d: 'M1.5 6.00004C13.8411 5.65915 26.1307 4.05664 38.4948 3.72227C59.9788 3.14126 81.6683 5.17836 103.099 3.38893C108.421 2.94454 113.818 2.00004 119.158 2.00004C120.87 2.00004 122.872 1.36997 124.43 1.52782C127.492 1.83797 128.804 3.00004 131.5 3.00004' },
];

function BtnLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  return (
    <div className="btn btn-link" data-button-status="">
      <a
        href={href}
        className="btn-click"
        data-transition-text={label}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        <div className="btn-content"><span>{label}</span></div>
        <div className="btn-line">
          {BTN_LINES.map((l, i) => (
            <div key={i} className="btn-line-item" data-line-status={i === 0 ? 'active' : ''}>
              <svg width={l.w} height={l.h} viewBox={l.vb} fill="none">
                <path d={l.d} stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          ))}
        </div>
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="section footer"
      data-theme-section="dark"
      data-scroll-section=""
    >
      <div className="container">

        {/* ── Top row: CTA ─────────────────────────────────────────── */}
        <div className="row split">
          <div className="col">
            <h3>
              <span
                data-cursor-gif-target="file://deviate-2"
                data-cursor-bubble-color="secondary"
              >
                Let&apos;s get<br />Deviated
              </span>
            </h3>
          </div>
          <div className="col">
            <div className="col-row styled-content">
              <h4>Get in touch</h4>
              <p>
                Ready to break the norm? Whether you&apos;re a brand looking for bold identity
                or need a creative partner who refuses to blend in — we want to hear from you.
              </p>
            </div>
            <div className="col-row">
              <div className="btn btn-primary" data-button-status="">
                <a href="/contact" className="btn-click" data-transition-text="Contact">
                  <div className="btn-content"><span>Get in Touch</span></div>
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

        {/* ── Credentials row ───────────────────────────────────────── */}
        <div className="row row-credentials">
          <div className="col">
            <div className="col-row col-row-border">
              <h5>Head Office</h5>
            </div>
            <div className="col-row"><p>123 Maadi</p></div>
            <div className="col-row"><p>Cairo, Egypt</p></div>
          </div>

          <div className="col">
            <div className="col-row col-row-border">
              <h5>New Business</h5>
            </div>
            <div className="col-row">
              <p>Office: <a href="tel:+2012365874">+20 12 365 874</a></p>
            </div>
            <div className="col-row">
              <p>Mobile: <a href="tel:+20654987321">+20 65 498 7321</a></p>
            </div>
          </div>

          <div className="col">
            <div className="col-row col-row-border">
              <h5>Email</h5>
            </div>
            <div className="col-row">
              <p><a href="mailto:hello@deviate.agency">hello@deviate.agency</a></p>
            </div>
            <div className="col-row">
              <p><a href="mailto:work@deviate.agency">work@deviate.agency</a></p>
            </div>
          </div>

          <div className="col">
            <div className="col-row col-row-border">
              <h5>Connect</h5>
            </div>
            <div className="col-row">
              <p><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            </div>
            <div className="col-row">
              <p><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
            <div className="col-row">
              <p><a href="https://wa.me/201236587400" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
            </div>
          </div>
        </div>

        <div className="bottom-links">
          <BtnLink href="/work" label="Our Work" />
          <BtnLink href="/about" label="Our Story" />
        </div>

        <div className="footer-tagline">
          <p>Off the Norm. Deviated.</p>
        </div>

      </div>
    </footer>
  );
}

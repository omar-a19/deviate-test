export default function Footer() {
  return (
    <footer 
      className="section footer"
      data-theme-section="dark"
      data-scroll-section=""
    >
      <div className="container">
        <div className="row split">
          <div className="col">
            <h3>
              <span data-cursor-gif-target="file://deviate-2">
              Let's get Deviated 
              </span>
            </h3>
          </div>
          <div className="col">
            <div className="col-row styled-content">
              <h4>Get in touch</h4>
              <p>Ready to break the norm? Whether you're a brand looking for bold identity or need a creative partner who refuses to blend in — we want to hear from you.</p>
            </div>
            <div className="col-row">
              <div className="btn btn-primary" data-button-status="">
                <a href="/contact" className="btn-click" data-transition-text="Contact">
                  <div className="btn-content">
                    <span>Get in Touch</span>
                  </div>
                  <div className="btn-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <polyline points="14 19 21 12 14 5" fill="none" stroke="#000" strokeMiterlimit="10"/>
                      <line x1="21" y1="12" x2="2" y2="12" fill="none" stroke="#000" strokeMiterlimit="10"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <polyline points="14 19 21 12 14 5" fill="none" stroke="#000" strokeMiterlimit="10"/>
                      <line x1="21" y1="12" x2="2" y2="12" fill="none" stroke="#000" strokeMiterlimit="10"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <polyline points="14 19 21 12 14 5" fill="none" stroke="#000" strokeMiterlimit="10"/>
                      <line x1="21" y1="12" x2="2" y2="12" fill="none" stroke="#000" strokeMiterlimit="10"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-credentials">
          <div className="col">
            <div className="col-row col-row-border">
              <h5>HeadOffice</h5>
            </div>
            <div className="col-row">
              <p>123 Maadi</p>
            </div>
            <div className="col-row">
              <p>Cairo , EG</p>
            </div>
          </div>
          <div className="col">
            <div className="col-row col-row-border">
              <h5>New Business</h5>
            </div>
            <div className="col-row">
              <p>Ofiice: <a href="tel:+2012365874">+2012365874</a></p>
            </div>
            <div className="col-row">
              <p>Mobile: <a href="tel:+20654987321">+2012365874</a></p>
            </div>
          </div>
          <div className="col">
            <div className="col-row col-row-border">
              <h5>Email</h5>
            </div>
            <div className="col-row">
              <p><a href="mailto:support@deviatemarketingagency.com">support@deviate</a></p>
              <p><a href="mailto:support@deviatemarketingagency.com">support@deviate</a></p>
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
            
          </div>
        </div>
        <div className="bottom-links">
          <div className="btn btn-link" data-button-status="">
            <a href="/terms" className="btn-click" data-transition-text="Terms">
              <div className="btn-content">
                <span>Terms & Conditions</span>
              </div>
              <div className="btn-line">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="btn-line-item" data-line-status={i === 0 ? 'active' : ''}>
                    <svg width="132" height="6" viewBox="0 0 132 6" fill="none">
                      <path d="M1 5C2.82682 4.9188 4.62167 4.31551 6.399 3.94961C13.4187 2.50446 20.6319 1.77026 27.783 1.30982C37.3154 0.696054 46.8967 0.940951 56.3185 2.52606C61.559 3.4077 66.84 3.9771 72.1763 3.70083C77.118 3.445 81.7816 1.75886 86.6773 1.32364C91.7109 0.876164 96.6096 0.938948 101.56 2.01468C106.226 3.02873 110.462 4.87567 115.34 4.7374C119.22 4.62744 123.162 3.30804 126.873 2.26346C128.2 1.89004 129.615 1.01958 131 1.01958" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                ))}
              </div>
            </a>
          </div>
          <div className="btn btn-link" data-button-status="">
            <a href="/privacy" className="btn-click" data-transition-text="Privacy">
              <div className="btn-content">
                <span>Privacy Policy</span>
              </div>
              <div className="btn-line">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="btn-line-item" data-line-status={i === 1 ? 'active' : ''}>
                    <svg width="135" height="5" viewBox="0 0 135 5" fill="none">
                      <path d="M134 2.34581C110.524 3.61768 86.9065 1.6685 63.3919 2.39566C51.1632 2.77382 39.6174 4.61181 27.3033 3.79132C18.3941 3.19769 9.97867 1 1 1" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                ))}
              </div>
            </a>
          </div>
        </div>
        <div className="footer-tagline" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <p style={{ 
            fontFamily: 'Montserrat, sans-serif', 
            fontSize: '1.2rem', 
            fontWeight: 600,
            color: '#DEA3EB',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Off the Norm, Deviated.
          </p>
        </div>
      </div>
    </footer>
  );
}
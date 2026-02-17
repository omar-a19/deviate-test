export default function Intro() {
  return (
    <section
      className="section section-intro section-intro-home"
      id="section-intro"
      data-theme-section="dark"
      data-scroll-section=""
    >
      <div className="container">
        {/* First row: heading */}
        <div className="row split">
          <div className="col">
            <h3>
              <span>
                WE ARE DEVIATE
              </span>
            </h3>
          </div>
        </div>

        {/* Second row: draw line + text + button */}
        <div className="row split">
          <div className="col">
            <div 
              className="draw-line is-inview" 
              data-scroll="" 
              data-svg-path-length="399"
              style={{ '--svg-path-length': 399, opacity: 1 } as React.CSSProperties}
            >
              <svg
                width="233"
                height="121"
                viewBox="0 0 233 121"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
              a creative and marketing agency focused onn brands, spaces, and experiences.
              We work closely with
              design-led and technical teams to translate complex work into clear visual identity and
               communication.<span className="symbol-small">®</span> WE DON’T APPLY ONE FORMULA TO EVERY BRAND.
              </h4>
            </div>

            <div className="col-row styled-content">
              <p>Each project starts with understanding the industry, the 
               audience, and the nature of
               the work then building a visual
               and content system that fits.</p>
            </div>

            <div className="col-row">
              <div className="btn btn-primary" data-button-status="">
                <a
                  href="/about"
                  className="btn-click"
                  data-transition-text="About us"
                >
                  <div className="btn-content">
                    <span>About us</span>
                  </div>
                  <div className="btn-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <polyline
                        points="14 19 21 12 14 5"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                      />
                      <line
                        x1="21"
                        y1="12"
                        x2="2"
                        y2="12"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <polyline
                        points="14 19 21 12 14 5"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                      />
                      <line
                        x1="21"
                        y1="12"
                        x2="2"
                        y2="12"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <polyline
                        points="14 19 21 12 14 5"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                      />
                      <line
                        x1="21"
                        y1="12"
                        x2="2"
                        y2="12"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
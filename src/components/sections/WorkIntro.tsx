export default function WorkIntro() {
  return (
    <section
      className="section section-home-work-intro"
      data-theme-section="dark"
      data-scroll-section
    >
      <div className="container">
        <div className="row split">
          <div className="col">
            <h3>Selected cases</h3>
          </div>
        </div>
        <div className="row split">
          <div className="col">
            <div className="col-row styled-content">
              <p>
                Drag through our latest and greatest cases below. Want to watch
                even more Deviated stuff? Visit our full portfolio.
              </p>
            </div>
            <div className="col-row">
              <div className="btn btn-primary" data-button-status="">
                <a
                  href="/work"
                  className="btn-click"
                  data-transition-text="Work"
                >
                  <div className="btn-content">
                    <span>All work</span>
                  </div>
                  <div className="btn-arrow">
                    {/* Three identical arrows for slide‑through animation */}
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
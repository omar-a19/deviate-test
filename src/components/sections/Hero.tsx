import { useEffect } from "react";
import Player from "@vimeo/player";

export default function Hero() {
  useEffect(() => {
    const iframe1 = document.querySelector(
      "#vimeo-background-index-custom-1 iframe"
    );
    const iframe2 = document.querySelector(
      "#vimeo-background-index-custom-2 iframe"
    );

    if (iframe1) {
      const player1 = new Player(iframe1 as HTMLIFrameElement);
      player1.setVolume(0);
    }

    if (iframe2) {
      const player2 = new Player(iframe2 as HTMLIFrameElement);
      player2.setVolume(0);
    }
  }, []);

  const splitChars = (text: string) => {
    return text.split(" ").map((word, wordIdx) => (
      <div
        key={wordIdx}
        style={{ position: "relative", display: "inline-block" }}
        className="single-word"
      >
        {word.split("").map((char, charIdx) => (
          <div
            key={charIdx}
            style={{ position: "relative", display: "inline-block" }}
            className="single-char"
          >
            <div
              className="single-char-inner"
              style={{
                transform: "translate(0%, 3%) rotate(0.00115deg)",
              }}
            >
              {char}
            </div>
          </div>
        ))}
        &nbsp;
      </div>
    ));
  };

  const scrollToIntro = () => {
    const intro = document.getElementById("section-intro");
    if (intro) intro.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="section default-header full-height all-devices home-header"
      data-theme-section="dark"
      data-scroll-section
      data-vimeo-status-both-loaded="true"
    >
      {/* ================= BACKGROUND VIDEO ================= */}
      <div
        className="single-vimeo-background is-inview"
        id="vimeo-background-index-custom-1"
        data-scroll-speed="2"
        data-scroll-position="top"
        data-vimeo-background-target
        data-vimeo-status-sync="true"
        data-vimeo-status-activated="true"
        data-vimeo-status-loaded="true"
        data-vimeo-status-muted="true"
      >
        <iframe
          src="https://player.vimeo.com/video/883255612?h=409c8fe0a7?api=1&background=1&autoplay=1&loop=1&autopause=0"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />

        <picture className="overlay vimeo-overlay-placeholder placeholder-desktop">
          <source
            type="image/webp"
            srcSet="/bg1.png"
          />
          <img
            src="/bg1.png"
            alt=""
            width="1920"
            height="1080"
          />
        </picture>
      </div>

      <div className="overlay overlay-dark"></div>

      {/* ================= HEADLINE ================= */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="split-chars animate-h1 desktop">
              {splitChars("OFF THE NORM.")}<br/>
              {splitChars("#DEVIATED")}
            </h1>
            <h1 className="split-chars animate-h1 mobile">
              {splitChars("DEVIATE")}
            </h1>
          </div>
        </div>
      </div>

      {/* ================= SHAPE POLYGON (VIDEO ONLY, NO DUPLICATE TEXT) ================= */}
      <div className="shape-polygon">
        <div className="shape-polygon-inner">
          <div
            className="single-vimeo-background is-inview"
            id="vimeo-background-index-custom-2"
            data-scroll
            data-scroll-speed="-4"
            data-scroll-position="top"
            data-vimeo-background-target
            data-vimeo-status-sync="true"
            data-vimeo-status-activated="true"
            data-vimeo-status-loaded="true"
            data-vimeo-status-muted="true"
          >
            <iframe
              src="https://player.vimeo.com/video/883255612?h=409c8fe0a7?api=1&background=1&autoplay=1&loop=1&autopause=0"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />

            <picture className="overlay vimeo-overlay-placeholder placeholder-desktop">
              <source
                type="image/webp"
                srcSet="/bg1.png"
              />
              <img
                src="/bg1.png"
                alt=""
                width="1920"
                height="1080"
              />
            </picture>
          </div>
          <div className="overlay overlay-dark"></div>
          <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="split-chars animate-h1 desktop">
            {splitChars("OFF THE NORM.")}<br/>
            {splitChars("#DEVIATED")}
            </h1>
            <h1 className="split-chars animate-h1 mobile">
              {splitChars("DEVIATE")}
            </h1>
          </div>
        </div>
      </div>        </div>
      </div>

      {/* ================= SCROLL OVERLAY ================= */}
      <div
        className="overlay overlay-scroll"
        data-anchor-target="#section-intro"
        data-cursor-bubble-text="Scroll"
        data-cursor-bubble-color="primary"
        onClick={scrollToIntro}
      />

      {/* ================= BOTTOM BUTTONS ================= */}
      <div className="bottom-links is-inview" data-scroll>
        {/* SCROLL DOWN BUTTON */}
        <div className="btn btn-link" data-button-status="">
          <div className="btn-click" onClick={scrollToIntro}>
            <div className="btn-content">
              <span>Scroll Down</span>
            </div>
            <div className="btn-line">
              {/* 1 */}
              <div className="btn-line-item" data-line-status="active">
                <svg width="135" height="5" viewBox="0 0 135 5" fill="none">
                  <path d="M134 2.34581C110.524 3.61768 86.9065 1.6685 63.3919 2.39566C51.1632 2.77382 39.6174 4.61181 27.3033 3.79132C18.3941 3.19769 9.97867 1 1 1" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* 2 */}
              <div className="btn-line-item" data-line-status="">
                <svg width="132" height="6" viewBox="0 0 132 6" fill="none">
                  <path d="M1 5C2.82682 4.9188 4.62167 4.31551 6.399 3.94961C13.4187 2.50446 20.6319 1.77026 27.783 1.30982C37.3154 0.696054 46.8967 0.940951 56.3185 2.52606C61.559 3.4077 66.84 3.9771 72.1763 3.70083C77.118 3.445 81.7816 1.75886 86.6773 1.32364C91.7109 0.876164 96.6096 0.938948 101.56 2.01468C106.226 3.02873 110.462 4.87567 115.34 4.7374C119.22 4.62744 123.162 3.30804 126.873 2.26346C128.2 1.89004 129.615 1.01958 131 1.01958" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* 3 */}
              <div className="btn-line-item" data-line-status="">
                <svg width="132" height="6" viewBox="0 0 132 6" fill="none">
                  <path d="M1 1C43.8806 5.55649 87.3778 5.96789 131 3.50575" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* 4 */}
              <div className="btn-line-item" data-line-status="">
                <svg width="132" height="5" viewBox="0 0 132 5" fill="none">
                  <path d="M1 2.89091C19.9425 2.89091 38.7471 0.740209 57.6912 1.02619C81.9375 1.3922 107.049 6.48833 131 2.455" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* 5 */}
              <div className="btn-line-item" data-line-status="">
                <svg width="131" height="8" viewBox="0 0 131 8" fill="none">
                  <path d="M1 7C4.5751 6.87455 8.08097 6.30384 11.6235 5.87179C24.5768 4.29203 37.5833 3.24092 50.6327 2.58974C77.0517 1.27141 103.545 1 130 1" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* 6 */}
              <div className="btn-line-item" data-line-status="">
                <svg width="133" height="7" viewBox="0 0 133 7" fill="none">
                  <path d="M1.5 6.00004C13.8411 5.65915 26.1307 4.05664 38.4948 3.72227C59.9788 3.14126 81.6683 5.17836 103.099 3.38893C108.421 2.94454 113.818 2.00004 119.158 2.00004C120.87 2.00004 122.872 1.36997 124.43 1.52782C127.492 1.83797 128.804 3.00004 131.5 3.00004" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* GET IN TOUCH BUTTON */}
        <div className="btn btn-link" data-button-status="">
          <a href="/contact" className="btn-click" data-transition-text="Contact">
            <div className="btn-content">
              <span>Get in Touch</span>
            </div>
            <div className="btn-line">
              {/* 1 */}
              <div className="btn-line-item" data-line-status="active">
                <svg width="132" height="6" viewBox="0 0 132 6" fill="none">
                  <path d="M1 5C2.82682 4.9188 4.62167 4.31551 6.399 3.94961C13.4187 2.50446 20.6319 1.77026 27.783 1.30982C37.3154 0.696054 46.8967 0.940951 56.3185 2.52606C61.559 3.4077 66.84 3.9771 72.1763 3.70083C77.118 3.445 81.7816 1.75886 86.6773 1.32364C91.7109 0.876164 96.6096 0.938948 101.56 2.01468C106.226 3.02873 110.462 4.87567 115.34 4.7374C119.22 4.62744 123.162 3.30804 126.873 2.26346C128.2 1.89004 129.615 1.01958 131 1.01958" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* 2 */}
              <div className="btn-line-item" data-line-status="">
                <svg width="132" height="6" viewBox="0 0 132 6" fill="none">
                  <path d="M1 1C43.8806 5.55649 87.3778 5.96789 131 3.50575" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* 3 */}
              <div className="btn-line-item" data-line-status="">
                <svg width="133" height="7" viewBox="0 0 133 7" fill="none">
                  <path d="M1.5 6.00004C13.8411 5.65915 26.1307 4.05664 38.4948 3.72227C59.9788 3.14126 81.6683 5.17836 103.099 3.38893C108.421 2.94454 113.818 2.00004 119.158 2.00004C120.87 2.00004 122.872 1.36997 124.43 1.52782C127.492 1.83797 128.804 3.00004 131.5 3.00004" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* 4 */}
              <div className="btn-line-item" data-line-status="">
                <svg width="131" height="8" viewBox="0 0 131 8" fill="none">
                  <path d="M1 7C4.5751 6.87455 8.08097 6.30384 11.6235 5.87179C24.5768 4.29203 37.5833 3.24092 50.6327 2.58974C77.0517 1.27141 103.545 1 130 1" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* 5 */}
              <div className="btn-line-item" data-line-status="">
                <svg width="135" height="5" viewBox="0 0 135 5" fill="none">
                  <path d="M134 2.34581C110.524 3.61768 86.9065 1.6685 63.3919 2.39566C51.1632 2.77382 39.6174 4.61181 27.3033 3.79132C18.3941 3.19769 9.97867 1 1 1" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* 6 */}
              <div className="btn-line-item" data-line-status="">
                <svg width="132" height="5" viewBox="0 0 132 5" fill="none">
                  <path d="M1 2.89091C19.9425 2.89091 38.7471 0.740209 57.6912 1.02619C81.9375 1.3922 107.049 6.48833 131 2.455" stroke="#DEA3EB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
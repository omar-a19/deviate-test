import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

// ── Deviate logo SVG (shown first & as word variants) ──────────────────
const LogoSVG = () => (
  <svg width="218" height="40" viewBox="0 0 218 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2.5H9L1.5 33.5L210 34.5L208 23.5L210.5 2H165.5L164 4C163.6 4 161.5 2.66667 160.5 2H78.5L75.5 1L66.5 3.5L64 2.5H29.5L28 6.5L23 7L20 2.5Z" fill="#EFEFEF"/>
    <path d="M33.5847 9.68324L31.5371 22.0919L34.9157 22.0471L34.4284 9.59375L33.5847 9.68324Z" fill="#101010"/>
    <path d="M13.4401 9.68324L11.3926 22.0919L14.7748 22.0471L14.2839 9.59375L13.4401 9.68324Z" fill="#101010"/>
    <path d="M217.5 5.3654L211.59 1.02163L163.562 1.01417L163.456 2.71812L161.074 1.05891L78.4486 1.08874L76.8521 0H74.8045C72.1314 0 69.3347 0.738255 67.1053 2.26696L65.2432 1.01044L28.0601 1.13348L27.0745 5.13796L21.3973 0.920955L7.70097 1.16331L0.5 34.7241L6.36988 39.3139H179.349L179.393 38.6764C180.891 39.4668 182.895 40 184.685 40C187.616 40 189.791 39.1163 191.267 37.472L193.628 39.3139H216.267L211.19 22.3639L217.507 5.36913L217.5 5.3654Z" fill="#101010"/>
  </svg>
);

// ── Word list: SVG → font variants → final logo image ─────────────────
const WORDS = [
  { type: "svg" },
  { type: "text", font: "bulevar regular",  text: "Deviate" },
  { type: "text", font: "migra",            text: "Deviate" },
  { type: "text", font: "general-sans",     text: "Deviate" },
  { type: "text", font: "bulevar poster",   text: "Deviate" },
  { type: "text", font: "migra captials",   text: "Deviate" },
  { type: "text", font: "bulevar regular",  text: "Deviate" },
  { type: "text", font: "migra",            text: "Deviate" },
  { type: "text", font: "general-sans",     text: "Deviate" },
  { type: "text", font: "bulevar poster",   text: "Deviate" },
  { type: "text", font: "migra captials",   text: "Deviate" },
  { type: "logo" },
] as const;

// ── Intro loader — runs ONCE on first visit ────────────────────────────
function IntroLoader({ onDone }: { onDone: () => void }) {
  const [activeWord, setActiveWord] = useState(0);
  const screenRef = useRef<HTMLDivElement>(null);
  const innerRef  = useRef<HTMLDivElement>(null);
  const dupRef    = useRef<HTMLDivElement>(null);
  const dupInnerRef = useRef<HTMLDivElement>(null);
  const wordsRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cycle through words
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % WORDS.length;
      setActiveWord(idx);
    }, 130);

    // Animate screens out after words finish
    const total = WORDS.length * 130 + 200;
    const timer = setTimeout(() => {
      clearInterval(interval);
      const tl = gsap.timeline({ onComplete: onDone });
      if (wordsRef.current) tl.to(wordsRef.current, { yPercent: -50, duration: 1.4, ease: "power4.inOut" }, 0);
      tl.to(screenRef.current,    { yPercent: -100, duration: 1.1, ease: "expo.inOut" }, 0);
      tl.to(innerRef.current,     { yPercent:  100, duration: 1.1, ease: "expo.inOut" }, 0);
      tl.to(dupRef.current,       { yPercent: -100, duration: 1.4, ease: "expo.inOut" }, 0.1);
      tl.to(dupInnerRef.current,  { yPercent:  100, duration: 1.4, ease: "expo.inOut" }, 0.1);
    }, total);

    return () => { clearInterval(interval); clearTimeout(timer); };
  }, [onDone]);

  return (
    <div className="transition-container" data-transition-status="loading" data-theme-item="dark">
      {/* Primary screen */}
      <div className="transition-screen" ref={screenRef} style={{ transform: "translateY(0%)" }}>
        <div className="transition-screen-inner" ref={innerRef} style={{ transform: "translateY(0%)" }}>
          <div className="fixed-background primary"><div className="texture" /></div>
          <div className="overlay a-shape-pattern" />
          <div className="transition-words" ref={wordsRef} style={{ display: "flex" }}>
            {WORDS.map((w, i) => (
              <div
                key={i}
                className={`single-word${w.type === "text" ? ` ${w.font}` : ""}${w.type === "logo" ? " logo-title" : ""}`}
                data-transition-word-status={activeWord === i ? "active" : "not-active"}
              >
                {w.type === "svg"  && <LogoSVG />}
                {w.type === "text" && <span>{w.text}</span>}
                {w.type === "logo" && <img src="/logo2.png" alt="Deviate" width="260" height="58" />}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Duplicate screen */}
      <div className="transition-screen-duplicate" ref={dupRef} style={{ transform: "translateY(0%)" }}>
        <div className="transition-screen-duplicate-inner" ref={dupInnerRef} style={{ transform: "translateY(0%)" }}>
          <div className="fixed-background gray"><div className="texture" /></div>
        </div>
      </div>
    </div>
  );
}

// ── Between-page overlay — shows when navigating ───────────────────────
export function PageTransitionOverlay() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const screenRef   = useRef<HTMLDivElement>(null);
  const innerRef    = useRef<HTMLDivElement>(null);
  const dupRef      = useRef<HTMLDivElement>(null);
  const dupInnerRef = useRef<HTMLDivElement>(null);
  const prevPath    = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname === prevPath.current) return;
    prevPath.current = location.pathname;

    // Slide IN
    setVisible(true);
    gsap.set(screenRef.current,   { yPercent: 0 });
    gsap.set(innerRef.current,    { yPercent: 0 });
    gsap.set(dupRef.current,      { yPercent: 0 });
    gsap.set(dupInnerRef.current, { yPercent: 0 });

    // Slide OUT after a short pause
    const t = setTimeout(() => {
      const tl = gsap.timeline({ onComplete: () => setVisible(false) });
      tl.to(screenRef.current,   { yPercent: -100, duration: 1.1, ease: "expo.out" }, 0);
      tl.to(innerRef.current,    { yPercent:  100, duration: 1.1, ease: "expo.out" }, 0);
      tl.to(dupRef.current,      { yPercent: -100, duration: 1.4, ease: "expo.out" }, 0.1);
      tl.to(dupInnerRef.current, { yPercent:  100, duration: 1.4, ease: "expo.out" }, 0.1);
    }, 400);

    return () => clearTimeout(t);
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div className="transition-container" data-transition-status="transition" data-theme-item="dark" style={{ pointerEvents: "none" }}>
      <div className="transition-screen" ref={screenRef}>
        <div className="transition-screen-inner" ref={innerRef}>
          <div className="fixed-background primary"><div className="texture" /></div>
          <div className="overlay a-shape-pattern" />
        </div>
      </div>
      <div className="transition-screen-duplicate" ref={dupRef}>
        <div className="transition-screen-duplicate-inner" ref={dupInnerRef}>
          <div className="fixed-background gray"><div className="texture" /></div>
        </div>
      </div>
    </div>
  );
}

// ── Hook: intercept <a> clicks → React Router navigate ───────────────
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // LocoScroll lives on window.scroll — use it if available, 
    // otherwise fall back to native scroll
    const loco = (window as any).scroll;
    if (loco && typeof loco.scrollTo === 'function') {
      loco.scrollTo('top', { duration: 0, disableLerp: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}


export function useNavTransition() {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") || href.startsWith("#") || a.target === "_blank") return;
      e.preventDefault();
      navigate(href);
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [navigate]);
}

// ── Main export: wraps everything ─────────────────────────────────────
const INTRO_DONE_KEY = "deviate_intro_done";

export default function PageTransition() {
  const [showIntro, setShowIntro] = useState(() => {
    try { return !sessionStorage.getItem(INTRO_DONE_KEY); } catch { return true; }
  });

  const handleIntroDone = () => {
    try { sessionStorage.setItem(INTRO_DONE_KEY, "1"); } catch {}
    setShowIntro(false);
  };

  // Wire up link-click → navigate
  useNavTransition();

  if (showIntro) return <IntroLoader onDone={handleIntroDone} />;
  return <PageTransitionOverlay />;
}

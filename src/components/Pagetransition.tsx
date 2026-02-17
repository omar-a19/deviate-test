import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type TransitionStatus = "idle" | "loading" | "transition";

const TRANSITION_WORDS = [
  { type: "svg", svg: 1 },      // first SVG
  { type: "text", font: "bulevar regular", text: "Deviate" },
  { type: "text", font: "migra", text: "Deviate" },
  { type: "text", font: "general-sans", text: "Deviate" },
  { type: "text", font: "bulevar poster", text: "Deviate" },
  { type: "text", font: "migra captials", text: "Deviate" },
  { type: "text", font: "bulevar regular", text: "Deviate" },
  { type: "text", font: "migra", text: "Deviate" },
  { type: "text", font: "general-sans", text: "Deviate" },
  { type: "text", font: "bulevar poster", text: "Deviate" },
  { type: "text", font: "migra captials", text: "Deviate" },
  { type: "logo" },             // final logo image
];

// First SVG (identical to second)
const LogoSVG = ({ className }: { className?: string }) => (
  <svg
    width="218"
    height="40"
    viewBox="0 0 218 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M20 2.5H9L1.5 33.5L210 34.5L208 23.5L210.5 2H165.5L164 4C163.6 4 161.5 2.66667 160.5 2H78.5L75.5 1L66.5 3.5L64 2.5H29.5L28 6.5L23 7L20 2.5Z" fill="#EFEFEF"/>
    <path d="M33.5847 9.68324L31.5371 22.0919L34.9157 22.0471L34.4284 9.59375L33.5847 9.68324Z" fill="#101010"/>
    <path d="M13.4401 9.68324L11.3926 22.0919L14.7748 22.0471L14.2839 9.59375L13.4401 9.68324Z" fill="#101010"/>
    <path d="M217.5 5.3654L211.59 1.02163L163.562 1.01417L163.456 2.71812L161.074 1.05891L78.4486 1.08874L76.8521 0H74.8045C72.1314 0 69.3347 0.738255 67.1053 2.26696L65.2432 1.01044L28.0601 1.13348L27.0745 5.13796L21.3973 0.920955L7.70097 1.16331L0.5 34.7241L6.36988 39.3139H179.349L179.393 38.6764C180.891 39.4668 182.895 40 184.685 40C187.616 40 189.791 39.1163 191.267 37.472L193.628 39.3139H216.267L211.19 22.3639L217.507 5.36913L217.5 5.3654ZM15.1747 32.4534L14.9965 28.1357L10.3704 28.1805L9.65759 32.4534H3.2531L9.52303 3.20283L19.3534 3.19165L21.6192 32.4497H15.1711L15.1747 32.4534ZM35.3192 32.4534L35.141 28.1357L30.5149 28.1805L29.8021 32.4534H23.3976L29.7876 3.23266L39.498 3.13945L41.7637 32.4534H35.3156H35.3192ZM61.1554 32.4534H54.7509L50.7504 16.003L49.7284 32.4534H44.0367L45.4588 9.54884L43.5458 9.5041L43.9895 3.25131L52.7506 3.2774L56.2202 19.1834L57.1985 3.2774L62.8902 3.23266L61.1554 32.4534V32.4534ZM74.0517 23.818C74.0517 29.5451 70.3166 33.1805 64.8032 33.1805L63.3339 25.7271C65.7815 25.7271 67.4253 24.0455 67.4253 21.4579C67.4253 18.5496 65.025 13.8218 65.025 10.7308C65.025 5.68606 68.8946 2.27815 74.8081 2.27815L75.43 9.45936C73.117 9.45936 71.6477 10.824 71.6477 12.8225C71.6477 16.6853 74.048 19.4109 74.048 23.8218L74.0517 23.818ZM92.105 9.42953L87.5699 9.44072L86.1478 32.4571H80.4562L81.8782 9.41462L76.8957 9.50783L77.2958 3.25503L92.5051 3.23639L92.105 9.43326V9.42953ZM109.889 9.42953L101.441 9.5302L101.084 15.4101H107.398L106.998 21.3647H100.684L100.372 26.5026H108.689L108.289 32.4534H94.3235L95.7455 9.45563L93.8325 9.50037L94.2326 3.27368L110.286 3.22893L109.886 9.4258L109.889 9.42953ZM129.812 32.4534H123.673L120.603 21.3647H118.912L118.243 32.4534H112.551L113.973 9.41089L112.06 9.5041L112.504 3.19538L120.021 3.23266L119.265 15.4101H120.822L124.604 3.26622L130.739 3.23266L125.404 17.6846L129.808 32.4534H129.812ZM148.574 9.42953L140.126 9.5302L139.77 15.4101H146.083L145.683 21.3647H139.37L139.057 26.5026H147.374L146.974 32.4534H133.009L134.431 9.45563L132.518 9.50037L132.918 3.24758L148.971 3.22893L148.571 9.4258L148.574 9.42953ZM162.54 32.4534H151.244L152.622 9.41089L150.753 9.5041L151.197 3.25131L158.714 3.23266L157.292 26.5026H162.94L162.54 32.4534V32.4534ZM171.345 32.4534H165.653L167.075 9.45563L165.162 9.50037L165.606 3.19165L173.123 3.22893L171.345 32.4497V32.4534ZM185.754 23.4526C185.532 27.5876 185.488 33.1357 178.771 33.1357C177.436 33.1357 175.702 32.6808 174.458 31.9985L176.105 26.1372C176.905 26.4541 177.527 26.5921 178.062 26.5921C179.44 26.5921 179.975 25.5444 180.11 23.4564L180.953 9.36615L177.884 9.5041L178.327 3.19538L186.954 3.18419L185.754 23.4526V23.4526ZM207.368 32.4534H201.229L198.159 21.3647H196.468L195.799 32.4534H190.107L191.529 9.41089L189.616 9.5041L190.06 3.19538L197.577 3.23266L196.821 15.4101H198.377L202.16 3.24012L208.295 3.23266L202.96 17.6846L207.364 32.4534H207.368Z" fill="#101010"/>
  </svg>
);

// Hook to intercept link clicks and manage transition status
export function usePageTransition() {
  const [status, setStatus] = useState<TransitionStatus>("idle");
  const [activeWord, setActiveWord] = useState(0);
  const wordTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pendingHref = useRef<string | null>(null);

  const startTransition = (href: string) => {
    pendingHref.current = href;
    setStatus("loading");
    setActiveWord(0);

    // Cycle words during loading
    let idx = 0;
    wordTimerRef.current = setInterval(() => {
      idx = (idx + 1) % TRANSITION_WORDS.length;
      setActiveWord(idx);
    }, 120);

    // After loading screen in, navigate
    setTimeout(() => {
      if (wordTimerRef.current) clearInterval(wordTimerRef.current);
      setStatus("transition");
      setTimeout(() => {
        if (pendingHref.current) {
          window.location.href = pendingHref.current;
        }
      }, 800);
    }, 1200);
  };

  // Intercept all internal link clicks
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("mailto") ||
        href.startsWith("tel") ||
        href.startsWith("#") ||
        target.getAttribute("target") === "_blank"
      ) return;

      e.preventDefault();
      startTransition(href);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // On page load — run exit animation
  useEffect(() => {
    setStatus("transition");
    const t = setTimeout(() => setStatus("idle"), 800);
    return () => clearTimeout(t);
  }, []);

  return { status, activeWord };
}

// Main component
export default function PageTransition() {
  const { status, activeWord } = usePageTransition();
  const screenRef = useRef<HTMLDivElement>(null);
  const screenInnerRef = useRef<HTMLDivElement>(null);
  const dupScreenRef = useRef<HTMLDivElement>(null);
  const dupScreenInnerRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useEffect(() => {
    if (status === "loading") {
      // Both screens slide in
      gsap.to([screenRef.current, dupScreenRef.current], {
        y: "0%",
        duration: 0.8,
        ease: "power2.inOut",
      });
      gsap.to([screenInnerRef.current, dupScreenInnerRef.current], {
        y: "0%",
        duration: 0.8,
        ease: "power2.inOut",
      });
    } else if (status === "transition") {
      // Both screens slide out
      gsap.to(screenRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power2.inOut",
      });
      gsap.to(screenInnerRef.current, {
        y: "100%",
        duration: 0.8,
        ease: "power2.inOut",
      });
      gsap.to(dupScreenRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.15,
      });
      gsap.to(dupScreenInnerRef.current, {
        y: "100%",
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.15,
      });
    }
  }, [status]);

  return (
    <div
      className="transition-container"
      data-transition-status={status}
      data-theme-item="dark"
    >
      {/* Primary screen */}
      <div
        className="transition-screen"
        ref={screenRef}
        style={{ transform: "translateY(100%)" }}
      >
        <div
          className="transition-screen-inner"
          ref={screenInnerRef}
          style={{ transform: "translateY(-100%)" }}
        >
          <div className="fixed-background primary">
            <div className="texture"></div>
          </div>
          <div className="overlay a-shape-pattern"></div>
          <div className="transition-words">
            {TRANSITION_WORDS.map((word, i) => {
              let className = "single-word";
              if (word.type === "text") {
                className += ` ${word.font}`;
              }
              if (word.type === "logo") {
                className += " logo-title";
              }
              return (
                <div
                  key={i}
                  className={className}
                  data-transition-word-status={activeWord === i ? "active" : "not-active"}
                >
                  {word.type === "svg" && <LogoSVG />}
                  {word.type === "text" && <span>{word.text}</span>}
                  {word.type === "logo" && (
                    <img src="/logo2.png" alt="Deviate" width="260" height="58" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Duplicate screen */}
      <div
        className="transition-screen-duplicate"
        ref={dupScreenRef}
        style={{ transform: "translateY(100%)" }}
      >
        <div
          className="transition-screen-duplicate-inner"
          ref={dupScreenInnerRef}
          style={{ transform: "translateY(-100%)" }}
        >
          <div className="fixed-background gray">
            <div className="texture"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
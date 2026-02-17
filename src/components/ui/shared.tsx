import type { ReactNode } from 'react';

/**
 * Splits a string into individual characters wrapped in the markup
 * structure expected by the original site's index.js GSAP animations.
 *
 * Output:
 *   <div class="single-word">
 *     <div class="single-char">
 *       <div class="single-char-inner">X</div>
 *     </div>
 *     …
 *   </div>
 */
export function splitChars(text: string): ReactNode {
  return text.split(' ').map((word, wi) => (
    <div
      key={wi}
      style={{ position: 'relative', display: 'inline-block' }}
      className="single-word"
    >
      {word.split('').map((char, ci) => (
        <div
          key={ci}
          style={{ position: 'relative', display: 'inline-block' }}
          className="single-char"
        >
          <div
            className="single-char-inner"
            style={{ transform: 'translate(0%, 3%) rotate(0.00115deg)' }}
          >
            {char}
          </div>
        </div>
      ))}
      {/* Space between words */}
      {'\u00a0'}
    </div>
  ));
}

/**
 * Convenience for inline text without the split-chars wrapper.
 * Used in navigation items where each character is already wrapped.
 */
export function splitInline(text: string): ReactNode {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }} className="single-word">
      {text.split('').map((char, i) => (
        <div key={i} style={{ position: 'relative', display: 'inline-block' }} className="single-char">
          <div className="single-char-inner">{char}</div>
        </div>
      ))}
    </div>
  );
}

/** Standard set of 6 wobbly SVG underlines used for btn-link */
export function BtnLines({ color = '#DEA3EB' }: { color?: string }) {
  const paths = [
    <path key={0} d="M1 5C2.82682 4.9188 4.62167 4.31551 6.399 3.94961C13.4187 2.50446 20.6319 1.77026 27.783 1.30982C37.3154 0.696054 46.8967 0.940951 56.3185 2.52606C61.559 3.4077 66.84 3.9771 72.1763 3.70083C77.118 3.445 81.7816 1.75886 86.6773 1.32364C91.7109 0.876164 96.6096 0.938948 101.56 2.01468C106.226 3.02873 110.462 4.87567 115.34 4.7374C119.22 4.62744 123.162 3.30804 126.873 2.26346C128.2 1.89004 129.615 1.01958 131 1.01958" stroke={color} strokeWidth="2" strokeLinecap="round"/>,
    <path key={1} d="M134 2.34581C110.524 3.61768 86.9065 1.6685 63.3919 2.39566C51.1632 2.77382 39.6174 4.61181 27.3033 3.79132C18.3941 3.19769 9.97867 1 1 1" stroke={color} strokeWidth="2" strokeLinecap="round"/>,
    <path key={2} d="M1 1C43.8806 5.55649 87.3778 5.96789 131 3.50575" stroke={color} strokeWidth="2" strokeLinecap="round"/>,
    <path key={3} d="M1 2.89091C19.9425 2.89091 38.7471 0.740209 57.6912 1.02619C81.9375 1.3922 107.049 6.48833 131 2.455" stroke={color} strokeWidth="2" strokeLinecap="round"/>,
    <path key={4} d="M1 7C4.5751 6.87455 8.08097 6.30384 11.6235 5.87179C24.5768 4.29203 37.5833 3.24092 50.6327 2.58974C77.0517 1.27141 103.545 1 130 1" stroke={color} strokeWidth="2" strokeLinecap="round"/>,
    <path key={5} d="M1.5 6.00004C13.8411 5.65915 26.1307 4.05664 38.4948 3.72227C59.9788 3.14126 81.6683 5.17836 103.099 3.38893C108.421 2.94454 113.818 2.00004 119.158 2.00004C120.87 2.00004 122.872 1.36997 124.43 1.52782C127.492 1.83797 128.804 3.00004 131.5 3.00004" stroke={color} strokeWidth="2" strokeLinecap="round"/>,
  ];
  const viewBoxes = [
    '0 0 132 6', '0 0 135 5', '0 0 132 6',
    '0 0 132 5', '0 0 131 8', '0 0 133 7',
  ];
  const wh = [
    [132,6],[135,5],[132,6],[132,5],[131,8],[133,7],
  ] as const;

  return (
    <div className="btn-line">
      {paths.map((path, i) => (
        <div key={i} className="btn-line-item" data-line-status={i === 0 ? 'active' : ''}>
          <svg width={wh[i][0]} height={wh[i][1]} viewBox={viewBoxes[i]} fill="none">
            {path}
          </svg>
        </div>
      ))}
    </div>
  );
}

/** Primary button with arrow */
export function PrimaryButton({ href, label }: { href: string; label: string }) {
  return (
    <div className="btn btn-primary" data-button-status="">
      <a href={href} className="btn-click" data-transition-text={label}>
        <div className="btn-content"><span>{label}</span></div>
        <div className="btn-arrow">
          {[0,1,2].map(i => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <polyline points="14 19 21 12 14 5" fill="none" stroke="#000" strokeMiterlimit="10"/>
              <line x1="21" y1="12" x2="2" y2="12" fill="none" stroke="#000" strokeMiterlimit="10"/>
            </svg>
          ))}
        </div>
      </a>
    </div>
  );
}

/** Link button with animated underline */
export function LinkButton({ href, label, target }: { href: string; label: string; target?: string }) {
  return (
    <div className="btn btn-link" data-button-status="">
      <a
        href={href}
        className="btn-click"
        data-transition-text={label}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        <div className="btn-content"><span>{label}</span></div>
        <BtnLines />
      </a>
    </div>
  );
}

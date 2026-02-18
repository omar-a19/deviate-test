import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../data/siteData';
import { splitInline, BtnLines } from '../ui/shared';

interface NavigationProps { currentPath: string; }

export default function Navigation({ currentPath }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(NAV_ITEMS[0].id);

  useEffect(() => {
    document.body.dataset.navigationStatus = isOpen ? 'active' : 'not-active';
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const match = NAV_ITEMS.find(n => n.href === currentPath);
    if (match) setActiveImage(match.id);
  }, [currentPath]);

  return (
    <nav className="navigation" data-theme-item="dark">
      <div className="main-navigation">
        <div className="overlay main-navigation-inner">
          <div className="fixed-background dark"><div className="texture" /></div>
          <div className="row split">
            <div className="col col-images">
              <div className="stacked-images">
                {NAV_ITEMS.map(item => (
                  <div key={item.id} data-stacked-image-id={item.id}
                    data-stacked-image-status={activeImage === item.id ? 'active' : 'not-active'}
                    data-link-status={currentPath === item.href ? 'active' : 'not-active'}
                    className="single-stacked-image"
                    style={{ zIndex: activeImage === item.id ? 2 : 1, transform: `rotate(${activeImage === item.id ? -3 : 3}deg)` }}>
                    <picture className="overlay">
                      <img alt="" src={item.image} width="810" height="1080" />
                    </picture>
                    <h4>{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
            <ul className="col col-ul">
              {NAV_ITEMS.map(item => (
                <li key={item.id} data-nav-id={item.id}
                  data-link-status={currentPath === item.href ? 'active' : 'not-active'}
                  onMouseEnter={() => setActiveImage(item.id)}>
                  <a href={item.href} data-transition-text={item.title}
                    data-cursor-bubble-text={item.title} data-cursor-bubble-color="secondary"
                    onClick={() => setIsOpen(false)}>
                    <h3>
                      <span className="split-chars first">{splitInline(item.title)}</span>
                      <span className="split-chars second">{splitInline(item.title)}</span>
                    </h3>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bottom-links">
            <div className="btn btn-link" data-button-status="">
              <a href="/work" className="btn-click" data-transition-text="Our Work" onClick={() => setIsOpen(false)}>
                <div className="btn-content"><span>Our Work</span></div>
                <BtnLines />
              </a>
            </div>
            <div className="btn btn-link" data-button-status="">
              <a href="/about" className="btn-click" data-transition-text="Our Story" onClick={() => setIsOpen(false)}>
                <div className="btn-content"><span>Our Story</span></div>
                <BtnLines />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main-navigation-duplicate">
        <div className="overlay main-navigation-inner-duplicate">
          <div className="fixed-background primary"><div className="texture" /></div>
          <div className="overlay a-shape-pattern" />
        </div>
      </div>
      <div className="main-navigation-duplicate-duplicate">
        <div className="overlay main-navigation-inner-duplicate-duplicate">
          <div className="fixed-background gray"><div className="texture" /></div>
        </div>
      </div>
      <a className="logo" href="/" data-transition-text="Home">
        <img src="/logo2.png" alt="Deviate" width="40" height="40" />
      </a>
      <div className="hamburger" data-navigation-toggle="toggle" role="button" tabIndex={0}
        onClick={() => setIsOpen(p => !p)}
        onKeyDown={e => e.key === 'Enter' && setIsOpen(p => !p)}>
        <div className="bar first" />
        <div className="bar middle" />
        <div className="bar last" />
      </div>
    </nav>
  );
}

import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

/**
 * Simple path-based router — no library needed.
 * Works with the existing Barba/GSAP page-transition system which
 * already intercepts <a> clicks and does window.location.href navigation.
 */
export default function Router() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/work')     return <WorkPage />;
  if (path === '/about')    return <AboutPage />;
  if (path === '/contact')  return <ContactPage />;
  if (path === '/services') return <ServicesPage />;
  return <HomePage />;
}

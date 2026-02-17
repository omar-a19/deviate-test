import { useLocomotiveScroll } from '../hooks/useLocomotiveScroll';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/Pagetransition';
import CustomCursor from '../components/ui/CustomCursor';
import Hero from '../components/sections/Hero';
import SectionIntro from '../components/sections/Intro';
import ShowreelPlayer from '../components/sections/Showreel';
import ClientsMarquee from '../components/sections/ClientMarquee';
import WorkIntro from '../components/sections/WorkIntro';
import WorkSlider from '../components/sections/WorkSlider';

export default function HomePage() {
  const scrollRef = useLocomotiveScroll();
  const currentPath = window.location.pathname;

  return (
    <>
      <PageTransition />
      <CustomCursor />
      <main className="main" data-barba="container" data-barba-namespace="home">
        <div className="fixed-background dark"><div className="texture" /></div>
        <Navigation currentPath={currentPath} />
        <div className="main-wrap" data-scroll-container ref={scrollRef}>
          <Hero />
          <SectionIntro />
          <ShowreelPlayer />
          <ClientsMarquee />
          <WorkIntro />
          <WorkSlider />
          <Footer />
        </div>
      </main>
    </>
  );
}

import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import PageTransition, {ScrollToTop} from "./components/Pagetransition";

const TITLES = [
  'Deviate - Off the Norm',
  'Think Different - Deviate',
  'Breaking Boundaries - Deviate',
];

export default function App() {
  useEffect(() => {
    document.body.dataset.themePage = 'dark';
    document.body.dataset.themeNav = 'dark';
    document.body.dataset.navigationStatus = 'not-active';
    const t = TITLES[Math.floor(Math.random() * TITLES.length)];
    document.title = t;
  }, []);

  return (
    <BrowserRouter>
    <ScrollToTop />
      {/* PageTransition must be inside BrowserRouter to use useNavigate/useLocation */}
      <PageTransition />
      <Router />
    </BrowserRouter>
  );
}

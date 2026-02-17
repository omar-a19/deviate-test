import { useEffect } from "react";
import Router from "./router";

const TITLES = [
  'Deviate - Off the Norm',
  'Think Different - Deviate ✨',
  'Breaking Boundaries - Deviate 🚀',
];

export default function App() {
  useEffect(() => {
    document.body.dataset.themePage = 'dark';
    document.body.dataset.themeNav = 'dark';
    document.body.dataset.barba = 'wrapper';
    document.body.dataset.navigationStatus = 'not-active';
    const t = TITLES[Math.floor(Math.random() * TITLES.length)];
    document.title = t;
    document.body.dataset.documentRandomTitle = t;
  }, []);

  return <Router />;
}

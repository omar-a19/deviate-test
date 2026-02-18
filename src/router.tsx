import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import WorkSinglePage from './pages/WorkSinglePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/"               element={<HomePage />} />
      <Route path="/work"           element={<WorkPage />} />
      <Route path="/work/:slug"     element={<WorkSinglePage />} />
      <Route path="/about"          element={<AboutPage />} />
      <Route path="/contact"        element={<ContactPage />} />
      <Route path="/services"       element={<ServicesPage />} />
    </Routes>
  );
}

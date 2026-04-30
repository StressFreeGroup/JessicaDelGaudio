import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Services from './pages/Services/Services.jsx';

// Scroll to top on route change, or to hash anchor if present
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);
  return null;
}

const ComingSoon = ({ title }) => (
  <main style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', padding: '120px 24px' }}>
    <div style={{ textAlign: 'center', maxWidth: 560 }}>
      <p className="eyebrow">More info</p>
      <h1 style={{ marginTop: 8 }}>{title}</h1>
      <p style={{ marginTop: 16 }}>
        Working on this page next. In the meantime, head to the{' '}
        <a href="/#schedule" style={{ color: 'var(--sage-700)', borderBottom: '1px solid currentColor' }}>
          schedule section
        </a>{' '}
        on the home page to book.
      </p>
    </div>
  </main>
);

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<ComingSoon title="About Jessica" />} />
        <Route path="/rates" element={<ComingSoon title="Rates & Insurance" />} />
        <Route path="/payment" element={<ComingSoon title="Payment" />} />
        <Route path="/contact" element={<ComingSoon title="Contact" />} />
        <Route path="/privacy" element={<ComingSoon title="Privacy Notice" />} />
      </Routes>
      <Footer />
    </>
  );
}

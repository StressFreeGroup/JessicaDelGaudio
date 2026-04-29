import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';

// Placeholder stubs — will be built in subsequent turns
const Stub = ({ title }) => (
  <main style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', padding: '120px 24px' }}>
    <div style={{ textAlign: 'center', maxWidth: 560 }}>
      <p className="eyebrow">Coming next</p>
      <h1>{title}</h1>
      <p style={{ marginTop: 16 }}>This page is part of the next build phase.</p>
    </div>
  </main>
);

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Stub title="About Jessica" />} />
        <Route path="/services" element={<Stub title="Services & Approach" />} />
        <Route path="/rates" element={<Stub title="Rates & Insurance" />} />
        <Route path="/payment" element={<Stub title="Payment" />} />
        <Route path="/contact" element={<Stub title="Contact" />} />
        <Route path="/privacy" element={<Stub title="Privacy Notice" />} />
      </Routes>
      <Footer />
    </>
  );
}

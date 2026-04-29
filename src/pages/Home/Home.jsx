import Hero from './sections/Hero.jsx';
import Approach from './sections/Approach.jsx';
import HelpsWith from './sections/HelpsWith.jsx';
import Pricing from './sections/Pricing.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Booking from './sections/Booking.jsx';
import FinalCTA from './sections/FinalCTA.jsx';
import TrustStrip from '../../components/TrustStrip/TrustStrip.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Approach />
      <HelpsWith />
      <Pricing />
      <HowItWorks />
      <Booking />
      <FinalCTA />
    </main>
  );
}

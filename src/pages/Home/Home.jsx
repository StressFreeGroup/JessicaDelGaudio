import Hero from './sections/Hero.jsx';
import TrustStrip from '../../components/TrustStrip/TrustStrip.jsx';
import Schedule from './sections/Schedule.jsx';
import HelpsWith from './sections/HelpsWith.jsx';
import Approach from './sections/Approach.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Reviews from './sections/Reviews.jsx';
import FAQ from './sections/FAQ.jsx';
import FinalCTA from './sections/FinalCTA.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Schedule />
      <HelpsWith />
      <Approach />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

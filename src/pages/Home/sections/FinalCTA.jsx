import Button from '../../../components/Button/Button.jsx';
import { booking, contact } from '../../../config/booking.js';
import s from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={s.section} aria-labelledby="cta-title">
      <div className="container">
        <div className={s.panel}>
          <div className={s.text}>
            <span className={s.eyebrow}>Ready when you are</span>
            <h2 id="cta-title" className={s.title}>
              The first step is the hardest. The next ones get lighter.
            </h2>
            <p className={s.lead}>
              Book a session in the calendar above, or reach out for a free 15-minute consultation
              to talk about what you&rsquo;re looking for and whether we&rsquo;re a good fit. No pressure to continue.
            </p>
          </div>

          <div className={s.actions}>
            <Button href="#schedule" variant="accent" size="lg">
              Schedule a session
            </Button>
            <Button href={booking.freeConsult} target="_blank" rel="noopener noreferrer" variant="outline" size="md">
              Free 15-min consult
            </Button>
            <Button href={`mailto:${contact.email}`} variant="ghost" size="md">Send a message</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

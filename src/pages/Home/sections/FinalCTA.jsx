import Button from '../../../components/Button/Button.jsx';
import { booking } from '../../../config/booking.js';
import s from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={s.section} aria-labelledby="cta-title">
      <div className="container">
        <div className={s.panel}>
          <div className={s.text}>
            <span className={s.eyebrow}>Ready when you are</span>
            <h2 id="cta-title" className={s.title}>
              The first step is the<br />hardest. The next ones get lighter.
            </h2>
            <p className={s.lead}>
              Book a free 15-minute consultation. We&rsquo;ll talk about what you&rsquo;re looking for, what I do,
              and whether we&rsquo;re a good fit. There&rsquo;s no pressure to continue.
            </p>
          </div>

          <div className={s.actions}>
            <Button href={booking.freeConsult} target="_blank" rel="noopener noreferrer" variant="accent" size="lg">
              Book your free consultation
            </Button>
            <Button href="mailto:jess@jessicadelgaudio.com" variant="outline" size="md">Or send a message</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

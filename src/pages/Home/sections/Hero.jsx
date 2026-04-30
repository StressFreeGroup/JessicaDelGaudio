import Button from '../../../components/Button/Button.jsx';
import VerifiedBadge from '../../../components/VerifiedBadge/VerifiedBadge.jsx';
import { booking } from '../../../config/booking.js';
import s from './Hero.module.css';

export default function Hero() {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className={s.bgDecor} aria-hidden="true">
        <div className={s.bgArc} />
      </div>

      <div className="container">
        <div className={s.grid}>
          <div className={s.text}>
            <span className={s.eyebrow}>Jessica Del Gaudio, LMHC &middot; Newburgh, NY</span>

            <h1 id="hero-title" className={s.title}>
              Therapy that meets you<br />
              <span className={s.titleAccent}>where you are.</span>
            </h1>

            <p className={s.lead}>
              I&rsquo;m a licensed mental health counselor in New York with nine years of practice.
              I work with adults navigating anxiety, grief, addiction recovery, relationship strain, and the
              quiet weight of life transitions &mdash; with respect, sensitivity, and a treatment plan tailored to you.
            </p>

            <div className={s.actions}>
              <Button href="#schedule" variant="accent" size="lg">
                Book a session
              </Button>
              <Button href={booking.freeConsult} target="_blank" rel="noopener noreferrer" variant="ghost" size="md">
                Free 15-min consult
              </Button>
            </div>

            <div className={s.proof}>
              <VerifiedBadge />
            </div>
          </div>

          <div className={s.visual}>
            <div className={s.portraitFrame}>
              <div className={s.portraitImage}>
                <img
                  src="/jessica-headshot.jpg"
                  alt="Jessica Del Gaudio, LMHC"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
              <div className={s.portraitMeta}>
                <span className={s.metaLabel}>Now Accepting New Clients</span>
                <ul className={s.metaList}>
                  <li>
                    <span className={s.metaDot} aria-hidden="true" />
                    <span><strong>In-Person</strong> &mdash; Newburgh, NY</span>
                  </li>
                  <li>
                    <span className={s.metaDot} aria-hidden="true" />
                    <span><strong>Virtual</strong> &mdash; Phone &amp; Video</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

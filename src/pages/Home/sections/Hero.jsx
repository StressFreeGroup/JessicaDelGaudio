import { Link } from 'react-router-dom';
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
            <span className={s.eyebrow}>Jessica Del Gaudio, LMHC · Newburgh, NY</span>

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
              <Button href={booking.freeConsult} target="_blank" rel="noopener noreferrer" variant="accent" size="lg">
                Book a free 15-min consultation
              </Button>
              <Button href="#book" variant="ghost" size="md">See all booking options</Button>
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
                <span className={s.metaLabel}>Now accepting</span>
                <span className={s.metaValue}>New clients · NY only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

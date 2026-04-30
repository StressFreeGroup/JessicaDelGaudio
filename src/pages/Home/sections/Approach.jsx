import Button from '../../../components/Button/Button.jsx';
import s from './Approach.module.css';

export default function Approach() {
  return (
    <section className={s.section} aria-labelledby="approach-title">
      <div className="container">
        <header className={s.head}>
          <span className={s.eyebrow}>My approach</span>
          <h2 id="approach-title" className={s.title}>
            A space to be heard. A plan that&rsquo;s yours.
          </h2>
        </header>

        <div className={s.body}>
          <p className={s.lead}>
            My mission is to empower individuals to achieve emotional wellbeing and personal growth.
          </p>
          <p>
            I foster a safe, compassionate, and non-judgmental space for clients to explore their
            challenges, build resilience, and develop the skills necessary to lead fulfilling lives.
            It takes courage to seek out a more fulfilling and happier life &mdash; and to take the first
            steps toward change. My role is to support and empower you in that journey.
          </p>
          <p>
            I draw from nine evidence-based modalities &mdash; including CBT, DBT, ACT,
            Emotionally-Focused Therapy, and Mindfulness &mdash; choosing the approach that fits your
            goals rather than asking you to fit a method.
          </p>

          <div className={s.creds}>
            <span className={s.credLine}>Master of Arts, Long Island University &mdash; with honors</span>
            <span className={s.credLine}>Bachelor of Arts, Dominican College</span>
            <span className={s.credLine}>NY LMHC #013081 &middot; 9 years in practice</span>
          </div>

          <div className={s.actions}>
            <Button to="/services" variant="outline">View services &amp; modalities</Button>
            <Button href="#schedule" variant="ghost">Book a session</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

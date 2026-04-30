import Button from '../../../components/Button/Button.jsx';
import s from './Approach.module.css';

export default function Approach() {
  return (
    <section className={s.section} aria-labelledby="approach-title">
      <div className="container">
        <header className={s.head}>
          <span className={s.eyebrow}>My approach</span>
          <h2 id="approach-title" className={s.title}>
            A space to be heard. <span className={s.titleAccent}>A plan that&rsquo;s yours.</span>
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
        </div>

        {/* Credentials block — full color-blocked panel, dignified, no floating stats */}
        <div className={s.credBlock}>
          <div className={s.credHead}>
            <span className={s.credEyebrow}>Education, license &amp; experience</span>
            <h3 className={s.credTitle}>Nine years in practice. Licensed in New York since 2017.</h3>
          </div>
          <div className={s.credGrid}>
            <div className={s.credCell}>
              <span className={s.credCellLabel}>Master&rsquo;s degree</span>
              <strong>Long Island University</strong>
              <span className={s.credCellNote}>M.A., with honors</span>
            </div>
            <div className={s.credCell}>
              <span className={s.credCellLabel}>Undergraduate</span>
              <strong>Dominican College</strong>
              <span className={s.credCellNote}>B.A.</span>
            </div>
            <div className={s.credCell}>
              <span className={s.credCellLabel}>State license</span>
              <strong>NY LMHC #013081</strong>
              <span className={s.credCellNote}>Renews June 2028</span>
            </div>
            <div className={s.credCell}>
              <span className={s.credCellLabel}>National provider</span>
              <strong>NPI 1548763600</strong>
              <span className={s.credCellNote}>Verified record</span>
            </div>
          </div>
        </div>

        <div className={s.actions}>
          <Button to="/services" variant="outline">View services &amp; modalities</Button>
          <Button href="#schedule" variant="ghost">Book a session</Button>
        </div>
      </div>
    </section>
  );
}

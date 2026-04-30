import Button from '../../../components/Button/Button.jsx';
import s from './Approach.module.css';

export default function Approach() {
  return (
    <section className={s.section} aria-labelledby="approach-title">
      <div className={s.bgDecor} aria-hidden="true">
        <div className={s.blob} />
      </div>

      <div className="container">
        <header className={s.head}>
          <span className={s.eyebrow}>My approach</span>
          <h2 id="approach-title" className={s.title}>
            A space to be heard. <span className={s.titleAccent}>A plan that&rsquo;s yours.</span>
          </h2>
        </header>

        <div className={s.layout}>
          {/* LEFT — body prose */}
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

            <div className={s.actions}>
              <Button to="/services" variant="outline">View services &amp; modalities</Button>
              <Button href="#schedule" variant="ghost">Book a session</Button>
            </div>
          </div>

          {/* RIGHT — stat tower + credentials */}
          <aside className={s.sidebar}>
            <div className={s.statBlock}>
              <span className={s.statNum}>9</span>
              <div className={s.statLabel}>
                <span className={s.statTop}>years</span>
                <span className={s.statBottom}>in practice</span>
              </div>
            </div>

            <div className={s.creds}>
              <span className={s.credLabel}>Education &amp; license</span>
              <ul className={s.credList}>
                <li className={s.credItem}>
                  <strong>Master of Arts</strong>
                  <span>Long Island University &mdash; with honors</span>
                </li>
                <li className={s.credItem}>
                  <strong>Bachelor of Arts</strong>
                  <span>Dominican College</span>
                </li>
                <li className={s.credItem}>
                  <strong>NY LMHC #013081</strong>
                  <span>License renews June 2028</span>
                </li>
                <li className={s.credItem}>
                  <strong>NPI 1548763600</strong>
                  <span>Verified provider record</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

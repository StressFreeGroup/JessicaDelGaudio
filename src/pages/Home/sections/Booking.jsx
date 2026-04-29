import { booking } from '../../../config/booking.js';
import s from './Booking.module.css';

/**
 * Four booking paths:
 *  1. Free 15-min consult  → direct to Google Appointment Scheduling
 *  2. On the Spot $80      → Stripe Payment Link → success URL = Google scheduler
 *  3. Weekly Plan $399/mo  → Stripe Subscription → success URL = Google scheduler
 *  4. Annual Plan $3,750   → Stripe Subscription → success URL = Google scheduler
 */
const paths = [
  {
    key: 'free',
    eyebrow: 'Start here',
    name: 'Free Consultation',
    duration: '15 minutes',
    price: 'Free',
    pitch: 'A short call to talk about what you\u2019re looking for and whether we\u2019re the right fit.',
    href: booking.freeConsult,
    cta: 'Book free consult',
    style: 'feature'
  },
  {
    key: 'spot',
    eyebrow: 'Single session',
    name: 'On the Spot',
    duration: '60 minutes',
    price: '$80',
    pitch: 'A focused one-on-one hour, when you need to think something through. No commitment beyond the hour.',
    href: booking.onTheSpot,
    cta: 'Pay & schedule',
    style: 'plain'
  },
  {
    key: 'weekly',
    eyebrow: 'Most popular',
    name: 'Weekly Plan',
    duration: 'Up to 5 sessions / month',
    price: '$399 / mo',
    pitch: 'Up to five sessions a month with full scheduling flexibility. Auto-renewing, cancel any time.',
    href: booking.weeklyPlan,
    cta: 'Subscribe & schedule',
    style: 'plain'
  },
  {
    key: 'annual',
    eyebrow: 'Long-term wellness',
    name: 'Annual Plan',
    duration: 'Up to 52 sessions / year',
    price: '$3,750 / yr',
    pitch: 'Fifty-two weekly sessions at the lowest per-session rate. For the long arc of growth.',
    href: booking.annualPlan,
    cta: 'Subscribe & schedule',
    style: 'plain'
  }
];

export default function Booking() {
  return (
    <section className={s.section} id="book" aria-labelledby="book-title">
      <div className="container">
        <header className={s.head}>
          <span className="eyebrow">Schedule</span>
          <h2 id="book-title" className={s.title}>
            Find a time that works for you.
          </h2>
          <p className={s.lead}>
            Pick the path that fits. The free consultation is the easiest first step. For paid sessions,
            you&rsquo;ll check out securely through Stripe and be brought straight to my calendar to pick
            your time.
          </p>
        </header>

        <div className={s.paths}>
          {paths.map(p => (
            <article key={p.key} className={`${s.path} ${s[p.style]}`}>
              <span className={s.pathEyebrow}>{p.eyebrow}</span>
              <h3 className={s.pathName}>{p.name}</h3>
              <div className={s.pathMeta}>
                <span className={s.pathDuration}>{p.duration}</span>
                <span className={s.pathDot} aria-hidden="true">·</span>
                <span className={s.pathPrice}>{p.price}</span>
              </div>
              <p className={s.pathPitch}>{p.pitch}</p>
              <a
                href={p.href}
                target={p.key === 'free' ? '_blank' : '_self'}
                rel={p.key === 'free' ? 'noopener noreferrer' : undefined}
                className={s.pathCta}
              >
                {p.cta}
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        <div className={s.flowNote}>
          <span className={s.flowKicker}>How payment works</span>
          <p className={s.flowText}>
            For paid sessions, you&rsquo;ll be taken to a secure Stripe checkout. After your card clears,
            you&rsquo;re sent straight to my booking calendar to pick a time. The whole flow takes less
            than two minutes. Stripe and Google are both HIPAA business associates and never share your
            information beyond what&rsquo;s required to schedule the session.
          </p>
        </div>

        <p className={s.note}>
          Sessions are conducted by secure video. After your booking is confirmed you&rsquo;ll receive
          intake paperwork to complete before our first session. Need to reschedule? Use the link in your
          confirmation email up to 24 hours before your session.
        </p>
      </div>
    </section>
  );
}

import Button from '../../../components/Button/Button.jsx';
import SchedulerEmbed from '../../../components/SchedulerEmbed/SchedulerEmbed.jsx';
import { booking } from '../../../config/booking.js';
import s from './Schedule.module.css';

/**
 * Schedule section — the conversion fold.
 *
 * Order intentional:
 *   1. Calendar widget at the top (the actual booking surface)
 *   2. Pricing tiers below — Weekly Plan is the visual hero (MOST POPULAR)
 *      flanked by On the Spot and Annual Plan as supporting tiers.
 *   3. Free Consult as a quiet single-line link below pricing
 *      (entry point, not the conversion goal).
 */

const tiers = [
  {
    key: 'spot',
    eyebrow: 'Single session',
    name: 'On the Spot',
    price: '$80',
    cadence: 'per session',
    pitch: 'A focused one-on-one hour, when you need a single check-in. No commitment beyond the hour.',
    features: [
      'One 60-minute session',
      'No commitment beyond the hour',
      'FSA / HSA eligible'
    ],
    cta: 'Pay & schedule',
    href: booking.onTheSpot,
    style: 'plain'
  },
  {
    key: 'weekly',
    eyebrow: 'Most popular',
    name: 'Weekly Plan',
    price: '$399',
    cadence: 'per month',
    pitch: 'Up to five sessions a month with full scheduling flexibility \u2014 the rhythm most clients need.',
    features: [
      'Up to 5 sessions per month',
      'Auto-renewing, cancel anytime',
      'Add 45-min sessions for $45',
      'FSA / HSA eligible'
    ],
    cta: 'Subscribe & schedule',
    href: booking.weeklyPlan,
    style: 'feature'
  },
  {
    key: 'annual',
    eyebrow: 'Long-term wellness',
    name: 'Annual Plan',
    price: '$3,750',
    cadence: 'per year',
    pitch: 'Fifty-two weekly sessions at the lowest per-session rate \u2014 for the long arc of growth.',
    features: [
      'Up to 52 one-hour sessions',
      'Roughly $72 per session',
      'Add 45-min sessions for $45',
      'FSA / HSA eligible'
    ],
    cta: 'Commit to the year',
    href: booking.annualPlan,
    style: 'plain'
  }
];

export default function Schedule() {
  return (
    <section className={s.section} id="schedule" aria-labelledby="schedule-title">
      <div className="container">
        <header className={s.head}>
          <span className={s.eyebrow}>Schedule</span>
          <h2 id="schedule-title" className={s.title}>
            Find a time that works for you.
          </h2>
          <p className={s.lead}>
            Pick an open slot below. After scheduling you&rsquo;ll receive a secure intake form and the
            video link for our session. For paid plans, payment runs through Stripe before the appointment is locked.
          </p>
        </header>

        {/* CALENDAR — visible first, the actual conversion surface */}
        <div className={s.calendarWrap}>
          <SchedulerEmbed />
        </div>

        {/* PRICING — Weekly Plan as visual hero */}
        <div className={s.pricingHead}>
          <span className={s.pricingEyebrow}>Choose a plan</span>
          <h3 className={s.pricingTitle}>Three ways to begin. Same care, different cadence.</h3>
        </div>

        <div className={s.tiers}>
          {tiers.map(t => (
            <article
              key={t.key}
              className={`${s.tier} ${t.style === 'feature' ? s.feature : s.plain}`}
            >
              {t.style === 'feature' && <span className={s.badge}>{t.eyebrow}</span>}
              {t.style !== 'feature' && <span className={s.tierEyebrow}>{t.eyebrow}</span>}

              <h4 className={s.tierName}>{t.name}</h4>

              <div className={s.priceLine}>
                <span className={s.price}>{t.price}</span>
                <span className={s.cadence}>{t.cadence}</span>
              </div>

              <p className={s.pitch}>{t.pitch}</p>

              <ul className={s.features}>
                {t.features.map(f => (
                  <li key={f} className={s.featureItem}>
                    <svg className={s.check} viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className={s.tierCta}>
                <Button
                  href={t.href}
                  variant={t.style === 'feature' ? 'accent' : 'outline'}
                  size="md"
                >
                  {t.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Free consult — demoted to a quiet single-line link */}
        <p className={s.consultLine}>
          Not sure yet?{' '}
          <a
            href={booking.freeConsult}
            target="_blank"
            rel="noopener noreferrer"
            className={s.consultLink}
          >
            Start with a free 15-minute consultation
          </a>
          {' '}&mdash; no commitment, just a conversation.
        </p>

        <p className={s.fineprint}>
          Sessions are 60 minutes by secure video unless otherwise noted. Plans renew automatically and may
          be cancelled in writing before the next billing date. Missed sessions without 24 hours&rsquo; notice
          are not refunded. I&rsquo;ll provide a superbill on request for clients pursuing out-of-network
          insurance reimbursement.
        </p>
      </div>
    </section>
  );
}

import Button from '../../../components/Button/Button.jsx';
import SchedulerEmbed from '../../../components/SchedulerEmbed/SchedulerEmbed.jsx';
import { booking } from '../../../config/booking.js';
import s from './Schedule.module.css';

/**
 * Schedule section — clearer two-path payment flow.
 *
 * PATH A — paid sessions (pricing tiers first):
 *   Choose tier → Stripe checkout → on success, Stripe redirects to
 *   the matching Google Appointment Scheduling URL → pick time → done.
 *
 * PATH B — free 15-min consultation (calendar inline):
 *   Pick a time directly on the calendar widget → Google scheduler → done.
 *   No payment needed.
 *
 * The visual hierarchy now reflects that paid bookings flow through Stripe
 * BEFORE the calendar, and free consults skip payment entirely.
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
      <div className={s.bgDecor} aria-hidden="true">
        <div className={s.blob} />
      </div>

      <div className="container">
        <header className={s.head}>
          <span className={s.eyebrow}>Schedule a session</span>
          <h2 id="schedule-title" className={s.title}>
            Two paths to begin. <span className={s.titleAccent}>Pick yours.</span>
          </h2>
          <p className={s.lead}>
            For paid sessions, choose a plan below and check out securely through Stripe \u2014
            after payment, you&rsquo;re sent straight to my calendar to pick a time.
            Or start with a free 15-minute consultation: no payment needed, just pick a time.
          </p>
        </header>

        {/* PATH A — Paid plans (Pricing tiers, Weekly Plan as MOST POPULAR hero) */}
        <div className={s.pathHead}>
          <span className={s.pathLabel}>
            <span className={s.pathLetter}>A</span>
            Paid sessions
          </span>
          <p className={s.pathHint}>
            Click a tier &rarr; secure Stripe checkout &rarr; back to the calendar to lock your time.
          </p>
        </div>

        <div className={s.tiers}>
          {tiers.map(t => (
            <article
              key={t.key}
              className={`${s.tier} ${t.style === 'feature' ? s.feature : s.plain}`}
            >
              {t.style === 'feature' && <span className={s.badge}>{t.eyebrow}</span>}
              {t.style !== 'feature' && <span className={s.tierEyebrow}>{t.eyebrow}</span>}

              <h3 className={s.tierName}>{t.name}</h3>

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

        {/* Payment flow explainer */}
        <div className={s.flowExplainer}>
          <span className={s.flowEyebrow}>How payment works</span>
          <ol className={s.flowSteps}>
            <li><strong>1.</strong> You choose a plan above and check out securely through Stripe.</li>
            <li><strong>2.</strong> After payment, Stripe redirects you straight to my calendar.</li>
            <li><strong>3.</strong> You pick a time, I&rsquo;m notified, the slot is yours.</li>
          </ol>
          <p className={s.flowNote}>
            Subscriptions cancel anytime in writing before the next billing cycle. FSA and HSA cards
            are accepted at checkout. I provide superbills on request for out-of-network reimbursement.
          </p>
        </div>

        {/* DIVIDER */}
        <div className={s.divider} aria-hidden="true">
          <span className={s.dividerLine} />
          <span className={s.dividerText}>or</span>
          <span className={s.dividerLine} />
        </div>

        {/* PATH B — Free consultation calendar (clean typographic header, not a banner) */}
        <div className={s.consultHead}>
          <span className={s.consultHeadEyebrow}>Free 15-minute consultation</span>
          <h3 className={s.consultHeadTitle}>
            Or start with a brief no-obligation call.
          </h3>
          <p className={s.consultHeadSub}>
            Pick a time below. No payment, no commitment &mdash; just a conversation about
            what you&rsquo;re looking for and whether we&rsquo;re a good fit.
          </p>
        </div>

        <div className={s.calendarWrap}>
          <SchedulerEmbed />
        </div>

        <p className={s.fineprint}>
          All sessions are 60 minutes by default \u2014 in-person at the Newburgh, NY office or by secure video
          and phone for clients elsewhere in New York State. Missed sessions without 24 hours&rsquo; notice are
          not refunded. Reschedule anytime through the link in your confirmation email.
        </p>
      </div>
    </section>
  );
}

import Button from '../../../components/Button/Button.jsx';
import { booking } from '../../../config/booking.js';
import s from './Pricing.module.css';

const tiers = [
  {
    key: 'spot',
    name: 'On the Spot',
    price: '$80',
    cadence: 'per session',
    pitch: 'A single one-on-one hour, when you need a focused space to think something through.',
    features: [
      'One 60-minute individual session',
      'No commitment beyond the hour',
      'Ideal for a one-time check-in',
      'FSA / HSA eligible'
    ],
    cta: 'Book a single session',
    href: booking.onTheSpot,
    style: 'plain'
  },
  {
    key: 'weekly',
    name: 'Weekly Plan',
    price: '$399',
    cadence: 'per month',
    pitch: 'Up to five sessions a month with full scheduling flexibility &mdash; the rhythm most people need.',
    features: [
      'Up to 5 sessions per month',
      'Auto-renewing monthly subscription',
      'Flexible scheduling around your calendar',
      'Add 45-min sessions at a discounted $45',
      'FSA / HSA eligible'
    ],
    badge: 'Most popular',
    cta: 'Start the weekly plan',
    href: booking.weeklyPlan,
    style: 'feature'
  },
  {
    key: 'annual',
    name: 'Annual Plan',
    price: '$3,750',
    cadence: 'per year',
    pitch: 'Fifty-two weekly sessions at the lowest per-session rate &mdash; for the long arc of growth.',
    features: [
      'Up to 52 one-hour sessions',
      'Roughly $72 per session',
      'Flexible weekly scheduling',
      'Add 45-min sessions at a discounted $45',
      'FSA / HSA eligible'
    ],
    badge: 'Long-term wellness',
    cta: 'Commit to the year',
    href: booking.annualPlan,
    style: 'plain'
  }
];

export default function Pricing() {
  return (
    <section className={s.section} aria-labelledby="pricing-title">
      <div className="container">
        <header className={s.head}>
          <span className="eyebrow">Rates &amp; plans</span>
          <h2 id="pricing-title" className={s.title}>
            Three ways to begin.<br />Same care, different cadence.
          </h2>
          <p className={s.lead}>
            All plans are private-pay. I&rsquo;ll provide a superbill on request for clients seeking
            out-of-network insurance reimbursement, and FSA / HSA cards are accepted at checkout.
          </p>
        </header>

        <div className={s.tiers}>
          {tiers.map(t => (
            <article
              key={t.key}
              className={`${s.tier} ${t.style === 'feature' ? s.feature : s.plain}`}
            >
              {t.badge && <span className={s.badge}>{t.badge}</span>}

              <header className={s.tierHead}>
                <h3 className={s.tierName}>{t.name}</h3>
                <div className={s.priceLine}>
                  <span className={s.price}>{t.price}</span>
                  <span className={s.cadence}>{t.cadence}</span>
                </div>
                <p className={s.pitch} dangerouslySetInnerHTML={{ __html: t.pitch }} />
              </header>

              <hr className={s.divider} />

              <ul className={s.features}>
                {t.features.map(f => (
                  <li key={f} className={s.featureItem}>
                    <svg className={s.check} viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
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

        <p className={s.fineprint}>
          Prepaid plans renew automatically on a monthly or annual cycle and may be cancelled in writing
          before the next billing date. Sessions are 60 minutes unless otherwise noted; missed sessions
          without 24 hours&rsquo; notice are not refunded. Full policy on the <a href="/rates">Rates page</a>.
        </p>
      </div>
    </section>
  );
}

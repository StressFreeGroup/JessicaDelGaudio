import { useState } from 'react';
import { booking } from '../../../config/booking.js';
import s from './HowItWorks.module.css';

const steps = [
  {
    n: '01',
    title: 'Free 15-minute consultation',
    body: 'A short call where we talk about what brought you here and whether we\u2019re the right fit. No pressure, no obligation, no paperwork yet.',
    detail: 'You\u2019ll book directly through my calendar \u2014 most clients pick a slot within the next week. We chat by phone or video. If it doesn\u2019t feel right, no hard feelings.',
    ctaLabel: 'Book the consult',
    ctaHref: booking.freeConsult,
    ctaTarget: '_blank',
    ctaIsExternal: true
  },
  {
    n: '02',
    title: 'Pick a program that fits',
    body: 'Single session, monthly plan, or annual commitment \u2014 whichever matches your situation. Most clients land on the Weekly Plan.',
    detail: 'On the Spot is for one-off check-ins. The Weekly Plan ($399/mo) is the default for ongoing therapy. The Annual Plan locks in the lowest per-session rate for committed long-term work. All plans are private-pay through Stripe with FSA / HSA accepted.',
    ctaLabel: 'See plans & pricing',
    ctaHref: '#schedule',
    ctaIsExternal: false
  },
  {
    n: '03',
    title: 'Begin the work, on your schedule',
    body: 'In-person in Newburgh, NY or by secure video. Book sessions through the calendar, reschedule when life shifts, and keep what you build between us.',
    detail: 'After your first session you\u2019ll get a private booking link to reschedule any future appointment up to 24 hours before. Your case file stays HIPAA-protected and your conversations stay between us.',
    ctaLabel: 'Open the calendar',
    ctaHref: '#schedule',
    ctaIsExternal: false
  }
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className={s.section} aria-labelledby="how-title">
      <div className={s.bgDecor} aria-hidden="true">
        <div className={s.blob1} />
        <div className={s.blob2} />
      </div>

      <div className="container">
        <header className={s.head}>
          <span className={s.eyebrow}>How it works</span>
          <h2 id="how-title" className={s.title}>
            Three steps to <span className={s.titleAccent}>getting started.</span>
          </h2>
          <p className={s.lead}>
            The whole process from first call to first session usually takes about a week.
          </p>
        </header>

        <ol className={s.grid}>
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <li
                key={step.n}
                className={`${s.step} ${isActive ? s.stepActive : ''}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i); } }}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
              >
                <div className={s.stepIndicator}>
                  <span className={s.num}>{step.n}</span>
                  <span className={s.numUnderline} />
                </div>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepBody}>{step.body}</p>

                <div className={s.detailBox} aria-hidden={!isActive}>
                  <p className={s.detailText}>{step.detail}</p>
                  <a
                    href={step.ctaHref}
                    target={step.ctaTarget || undefined}
                    rel={step.ctaIsExternal ? 'noopener noreferrer' : undefined}
                    className={s.stepCta}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {step.ctaLabel}
                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </li>
            );
          })}
        </ol>

        <div className={s.progress}>
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${s.progressDot} ${i === active ? s.progressDotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

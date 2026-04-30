import s from './HowItWorks.module.css';

const steps = [
  {
    n: '01',
    title: 'Book a free 15-minute consultation',
    body: 'A short call where we talk about what brought you here and whether we\u2019re the right fit. No pressure, no obligation, no paperwork yet.'
  },
  {
    n: '02',
    title: 'Pick a rhythm that fits your life',
    body: 'Single session, monthly plan, or annual commitment \u2014 whichever matches the cadence you actually need. Everyone starts somewhere different.'
  },
  {
    n: '03',
    title: 'Begin the work, on your schedule',
    body: 'In-person in Newburgh or by secure video. Book sessions through the calendar, reschedule when life shifts, and keep what you build between us.'
  }
];

export default function HowItWorks() {
  return (
    <section className={s.section} aria-labelledby="how-title">
      <div className="container">
        <header className={s.head}>
          <span className={s.eyebrow}>How it works</span>
          <h2 id="how-title" className={s.title}>
            Getting started, simply.
          </h2>
        </header>

        <ol className={s.grid}>
          {steps.map(step => (
            <li key={step.n} className={s.step}>
              <span className={s.num} aria-hidden="true">{step.n}</span>
              <h3 className={s.stepTitle}>{step.title}</h3>
              <p className={s.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

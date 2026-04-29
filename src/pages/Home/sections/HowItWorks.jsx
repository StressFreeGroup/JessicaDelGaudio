import s from './HowItWorks.module.css';

const steps = [
  {
    n: '01',
    title: 'Free 15-min consultation',
    body: 'A short call to talk about what you\u2019re looking for and whether we\u2019re the right fit. No pressure, no obligation.'
  },
  {
    n: '02',
    title: 'Pick a plan that fits',
    body: 'Choose a single session, a flexible monthly plan, or commit to a year of weekly work \u2014 whichever matches the rhythm you need.'
  },
  {
    n: '03',
    title: 'Begin the work, on your schedule',
    body: 'All sessions are virtual. Book directly through my calendar, reschedule when life shifts, and keep what you build between us.'
  }
];

export default function HowItWorks() {
  return (
    <section className={s.section} aria-labelledby="how-title">
      <div className="container">
        <header className={s.head}>
          <span className="eyebrow">How it works</span>
          <h2 id="how-title" className={s.title}>
            Getting started, simply.
          </h2>
        </header>

        <ol className={s.list}>
          {steps.map((step, i) => (
            <li key={step.n} className={s.step}>
              <span className={s.num}>{step.n}</span>
              <div className={s.body}>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepText}>{step.body}</p>
              </div>
              {i < steps.length - 1 && <hr className={s.connector} />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

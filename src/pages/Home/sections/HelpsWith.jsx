import { Link } from 'react-router-dom';
import s from './HelpsWith.module.css';

const specialties = [
  {
    n: '01',
    title: 'Anxiety & Stress',
    body: 'From persistent worry and racing thoughts to panic, we build practical skills to interrupt the spiral and stay grounded in the present.'
  },
  {
    n: '02',
    title: 'Depression & Mood',
    body: 'Working through low energy, hopelessness, and the loss of pleasure in things that used to matter \u2014 with both warmth and structure.'
  },
  {
    n: '03',
    title: 'Grief & Loss',
    body: 'Holding space for what you\u2019ve lost, while finding a way to carry it that lets life keep moving forward at your own pace.'
  },
  {
    n: '04',
    title: 'Relationship Strain',
    body: 'Family conflict, intimacy, communication breakdowns, and the patterns that keep showing up across every connection in your life.'
  },
  {
    n: '05',
    title: 'Addiction Recovery',
    body: 'Compassionate, non-judgmental support for substance use and process addictions \u2014 meeting you wherever you are on the road to stability.'
  },
  {
    n: '06',
    title: 'Trauma & PTSD',
    body: 'Trauma-informed care that prioritizes safety, pacing, and your own sense of what\u2019s ready to be looked at and what isn\u2019t.'
  }
];

export default function HelpsWith() {
  return (
    <section className={s.section} aria-labelledby="helps-title">
      <div className="container">
        <header className={s.head}>
          <span className={s.eyebrow}>What I help with</span>
          <h2 id="helps-title" className={s.title}>
            Six places people most often arrive at my door.
          </h2>
          <p className={s.lead}>
            Most clients reach me at a transition &mdash; something has shifted, something hurts, or something needs
            to change. These are the territories I work in most often.
          </p>
        </header>

        <ul className={s.list}>
          {specialties.map(item => (
            <li key={item.n} className={s.item}>
              <span className={s.num} aria-hidden="true">{item.n}</span>
              <h3 className={s.itemTitle}>{item.title}</h3>
              <p className={s.itemBody}>{item.body}</p>
            </li>
          ))}
        </ul>

        <div className={s.cta}>
          <Link to="/services" className={s.ctaLink}>
            See full list of specialties &amp; modalities
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

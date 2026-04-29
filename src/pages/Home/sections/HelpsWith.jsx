import { Link } from 'react-router-dom';
import s from './HelpsWith.module.css';

const specialties = [
  {
    title: 'Anxiety & Stress',
    body: 'From persistent worry to panic, we build skills to interrupt the spiral and stay grounded in the present.',
    bg: 'sage'
  },
  {
    title: 'Depression & Mood',
    body: 'Working through low energy, hopelessness, and the loss of pleasure &mdash; with both warmth and structure.',
    bg: 'cream'
  },
  {
    title: 'Grief & Loss',
    body: 'Holding space for what you\u2019ve lost while finding a way to carry it that lets life keep moving.',
    bg: 'terracotta'
  },
  {
    title: 'Relationship Strain',
    body: 'Family conflict, intimacy, communication, and the patterns that show up across every connection.',
    bg: 'cream'
  },
  {
    title: 'Addiction Recovery',
    body: 'Compassionate, non-judgmental support for substance use, process addictions, and the road to stability.',
    bg: 'sage'
  },
  {
    title: 'Trauma & PTSD',
    body: 'Trauma-informed care that prioritizes safety, pacing, and your own sense of what\u2019s ready.',
    bg: 'terracotta'
  }
];

export default function HelpsWith() {
  return (
    <section className={s.section} aria-labelledby="helps-title">
      <div className="container">
        <header className={s.head}>
          <span className="eyebrow">What I help with</span>
          <h2 id="helps-title" className={s.title}>
            Six places people most often<br />arrive at my door.
          </h2>
          <p className={s.lead}>
            Most clients reach me at a transition &mdash; something has shifted, something hurts, or something needs
            to change. Below are the territories I work in most often. The full list of specialties lives on the
            services page.
          </p>
        </header>

        <div className={s.grid}>
          {specialties.map(item => (
            <article key={item.title} className={`${s.block} ${s[item.bg]}`}>
              <h3 className={s.itemTitle}>{item.title}</h3>
              <p className={s.itemBody} dangerouslySetInnerHTML={{ __html: item.body }} />
            </article>
          ))}
        </div>

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

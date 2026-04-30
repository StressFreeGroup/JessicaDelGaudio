import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import { booking } from '../../config/booking.js';
import s from './Services.module.css';

const modalities = [
  {
    name: 'Cognitive Behavioral Therapy (CBT)',
    body: 'Identifying the thought patterns that drive distress and learning to interrupt and reshape them. CBT is structured, skills-based, and grounded in decades of outcome research.'
  },
  {
    name: 'Dialectical Behavior Therapy (DBT)',
    body: 'Skills for emotion regulation, distress tolerance, interpersonal effectiveness, and mindfulness \u2014 especially useful when feelings run hot and reactive patterns get in the way.'
  },
  {
    name: 'Acceptance & Commitment Therapy (ACT)',
    body: 'Learning to make room for difficult thoughts and feelings rather than fight them, while taking action on what actually matters to you.'
  },
  {
    name: 'Emotionally-Focused Therapy (EFT)',
    body: 'Working with emotion as information \u2014 understanding what feelings are signaling and using that to deepen connection with yourself and others.'
  },
  {
    name: 'Attachment-Based Therapy',
    body: 'Examining how early relational patterns show up in adult relationships, and gently revising the templates that no longer serve you.'
  },
  {
    name: 'Client-Centered Therapy',
    body: 'A foundation of unconditional positive regard and genuine listening. You set the agenda; I follow your lead and reflect what I hear.'
  },
  {
    name: 'Existential Therapy',
    body: 'Sitting with the bigger questions \u2014 meaning, purpose, mortality, freedom, isolation \u2014 and finding your own answers rather than borrowed ones.'
  },
  {
    name: 'Mindfulness-Based Therapy',
    body: 'Practical mindfulness skills for staying present with what is, rather than getting pulled into the past or pushed into the future.'
  },
  {
    name: 'Motivational Interviewing',
    body: 'A collaborative conversational style that helps you find and strengthen your own motivation for change \u2014 particularly useful in recovery work.'
  }
];

const specialties = [
  'Anxiety & stress',
  'Depression & mood',
  'Grief & loss',
  'Addiction recovery',
  'Trauma & PTSD',
  'Relationship issues',
  'Family conflict',
  'Life transitions',
  'Self-esteem',
  'Career challenges',
  'Codependency',
  'Coping skills',
  'Anger management',
  'Identity & self-discovery',
  'Loneliness & isolation',
  'Spirituality',
  'Women\u2019s issues',
  'Caregiver stress'
];

const populations = [
  'Adults (18+)',
  'Couples (relationship work)',
  'Family members of those in recovery',
  'Adult children of difficult families',
  'Professionals navigating burnout',
  'Anyone in transition'
];

export default function Services() {
  return (
    <main className={s.page}>
      {/* Header */}
      <section className={s.hero}>
        <div className="container">
          <span className={s.heroEyebrow}>Services &amp; modalities</span>
          <h1 className={s.heroTitle}>How I work, and who I work with.</h1>
          <p className={s.heroLead}>
            Therapy isn&rsquo;t one method. I draw from nine evidence-based approaches and meet you with the
            one that fits your goals \u2014 not the other way around. Below is the full picture of what that
            looks like in practice.
          </p>
        </div>
      </section>

      {/* Modalities */}
      <section className={s.section}>
        <div className="container">
          <header className={s.sectionHead}>
            <span className={s.sectionEyebrow}>Approaches I draw from</span>
            <h2 className={s.sectionTitle}>Nine evidence-based modalities.</h2>
            <p className={s.sectionLead}>
              Most clients benefit from a blend. I don&rsquo;t pick one and stick to it \u2014 we adjust based
              on what helps you move forward.
            </p>
          </header>

          <div className={s.modalityGrid}>
            {modalities.map((m, i) => (
              <article key={m.name} className={s.modality}>
                <span className={s.modalityNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={s.modalityName}>{m.name}</h3>
                <p className={s.modalityBody}>{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties + Populations */}
      <section className={s.altSection}>
        <div className="container">
          <div className={s.twoCol}>
            <div>
              <span className={s.sectionEyebrow}>Specialties</span>
              <h2 className={s.colTitle}>Areas I focus on.</h2>
              <ul className={s.tagList}>
                {specialties.map(sp => <li key={sp} className={s.tag}>{sp}</li>)}
              </ul>
            </div>

            <div>
              <span className={s.sectionEyebrow}>Who I work with</span>
              <h2 className={s.colTitle}>Populations served.</h2>
              <ul className={s.bulletList}>
                {populations.map(p => (
                  <li key={p} className={s.bullet}>
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
                      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className={s.note}>
                I am licensed in New York State only. All sessions are in-person in Newburgh, NY,
                or by secure video and phone for clients elsewhere in NY.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA back to schedule */}
      <section className={s.ctaSection}>
        <div className="container">
          <div className={s.ctaPanel}>
            <h2 className={s.ctaTitle}>Ready to begin?</h2>
            <p className={s.ctaLead}>
              Pick a time on the calendar, or start with a free 15-minute consultation to see if we&rsquo;re a fit.
            </p>
            <div className={s.ctaActions}>
              <Button to="/#schedule" variant="accent" size="lg">View calendar &amp; plans</Button>
              <Button href={booking.freeConsult} target="_blank" rel="noopener noreferrer" variant="outline" size="md">
                Free 15-min consult
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

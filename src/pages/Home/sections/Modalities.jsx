import s from './Modalities.module.css';

const modalities = [
  {
    short: 'CBT',
    name: 'Cognitive Behavioral Therapy',
    body: 'Identifying the thought patterns that drive distress and learning to interrupt and reshape them.'
  },
  {
    short: 'DBT',
    name: 'Dialectical Behavior Therapy',
    body: 'Skills for emotion regulation, distress tolerance, interpersonal effectiveness, and mindfulness.'
  },
  {
    short: 'ACT',
    name: 'Acceptance & Commitment',
    body: 'Making room for difficult feelings rather than fighting them, while taking action on what matters.'
  },
  {
    short: 'EFT',
    name: 'Emotionally-Focused Therapy',
    body: 'Working with emotion as information \u2014 deepening connection with yourself and others.'
  },
  {
    short: 'Attachment',
    name: 'Attachment-Based',
    body: 'Examining how early relational patterns show up in adult relationships and revising the templates.'
  },
  {
    short: 'Person-Centered',
    name: 'Client-Centered',
    body: 'A foundation of unconditional positive regard and genuine listening. You set the agenda.'
  },
  {
    short: 'Existential',
    name: 'Existential Therapy',
    body: 'Sitting with the bigger questions \u2014 meaning, purpose, mortality \u2014 and finding your own answers.'
  },
  {
    short: 'Mindfulness',
    name: 'Mindfulness-Based',
    body: 'Practical mindfulness skills for staying present with what is, rather than past or future.'
  },
  {
    short: 'MI',
    name: 'Motivational Interviewing',
    body: 'A collaborative style that helps you find and strengthen your own motivation for change.'
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

export default function Modalities() {
  return (
    <section className={s.section} aria-labelledby="modalities-title">
      <div className={s.bgDecor} aria-hidden="true">
        <div className={s.blob} />
      </div>

      <div className="container">
        <header className={s.head}>
          <span className={s.eyebrow}>Approaches &amp; specialties</span>
          <h2 id="modalities-title" className={s.title}>
            Nine evidence-based approaches.<br />
            <span className={s.titleAccent}>Eighteen areas of focus.</span>
          </h2>
          <p className={s.lead}>
            Therapy isn&rsquo;t one method. I draw from nine evidence-based modalities and meet you with
            the one that fits your goals \u2014 not the other way around.
          </p>
        </header>

        {/* MODALITIES — full grid, all visible */}
        <div className={s.modalityHeader}>
          <span className={s.subEyebrow}>How I work</span>
          <h3 className={s.subTitle}>Modalities I draw from</h3>
        </div>

        <ul className={s.modalityGrid}>
          {modalities.map((m, i) => (
            <li key={m.short} className={s.modality}>
              <div className={s.modalityNum}>
                <span className={s.modalityShortBadge}>{m.short}</span>
                <span className={s.modalityIndex}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h4 className={s.modalityName}>{m.name}</h4>
              <p className={s.modalityBody}>{m.body}</p>
            </li>
          ))}
        </ul>

        {/* SPECIALTIES — pills, full list */}
        <div className={s.specialtiesHeader}>
          <span className={s.subEyebrow}>What I help with</span>
          <h3 className={s.subTitle}>Areas of focus</h3>
        </div>

        <ul className={s.specialtyList}>
          {specialties.map(sp => (
            <li key={sp} className={s.specialty}>{sp}</li>
          ))}
        </ul>

        <p className={s.note}>
          Most clients benefit from a blend of approaches. We adjust based on what helps you move forward.
        </p>
      </div>
    </section>
  );
}

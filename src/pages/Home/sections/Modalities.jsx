import s from './Modalities.module.css';

const modalities = [
  {
    short: 'CBT',
    name: 'Cognitive Behavioral Therapy',
    body: 'A structured, present-focused approach examining the loop between thoughts, feelings, and behaviors. We identify the automatic thoughts driving distress, test them against evidence, and build practical skills you can use between sessions. Strong fit for anxiety, depression, OCD, and panic. Most clients see meaningful change in 12 to 20 sessions.'
  },
  {
    short: 'DBT',
    name: 'Dialectical Behavior Therapy',
    body: 'Originally developed for clients with intense emotions, DBT teaches four core skill modules: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. We work through specific techniques like opposite-action and wise-mind that you can deploy when feelings run hot. Strong fit for emotional reactivity and relational patterns that damage what matters.'
  },
  {
    short: 'ACT',
    name: 'Acceptance & Commitment',
    body: 'Rather than fighting difficult thoughts and feelings, we learn to make space for them while taking committed action toward what matters most. ACT uses experiential exercises and metaphors to build psychological flexibility \u2014 holding uncomfortable internal experiences without letting them dictate your life. Pairs well with values-based work and chronic stress.'
  },
  {
    short: 'EFT',
    name: 'Emotionally-Focused Therapy',
    body: 'Treats emotion as core information rather than a problem to manage. We slow down to identify what feelings are signaling underneath the surface, then use that understanding to deepen your relationship with yourself and the people who matter. Strong evidence base for couples work and attachment-focused individual therapy.'
  },
  {
    short: 'Attachment',
    name: 'Attachment-Based',
    body: 'Examines how the relational templates you formed early in life are still shaping your adult relationships \u2014 with partners, family, friends, even with yourself. We trace the patterns, understand their roots, and revise the ones that no longer serve you. Particularly useful for chronic relationship difficulties, fear of intimacy, and unresolved family-of-origin issues.'
  },
  {
    short: 'Person-Centered',
    name: 'Client-Centered',
    body: 'Carl Rogers\u2019 foundational approach. The therapeutic relationship itself is the change agent \u2014 unconditional positive regard, accurate empathy, and genuine listening create the conditions for self-exploration. You set the agenda; I follow your lead. Often woven through other modalities as the underlying relational stance.'
  },
  {
    short: 'Existential',
    name: 'Existential Therapy',
    body: 'Sits with the questions that don\u2019t have easy answers \u2014 meaning, purpose, mortality, freedom, isolation, identity. The work isn\u2019t about finding the right answer; it\u2019s about confronting the questions honestly and finding YOUR answer rather than borrowed ones. Useful at major life transitions, after loss, or when \u201cwhat am I doing with my life?\u201d becomes loud.'
  },
  {
    short: 'Mindfulness',
    name: 'Mindfulness-Based',
    body: 'Present-moment awareness as a core skill. We practice noticing thoughts, feelings, and bodily sensations without judgment, building the muscle to step out of automatic reactivity. Drawn from MBSR and MBCT lineages, with formal practices and applications to everyday moments. Strong fit for anxiety, rumination, and stress reduction.'
  },
  {
    short: 'MI',
    name: 'Motivational Interviewing',
    body: 'A collaborative conversational style that helps you find and strengthen your OWN motivation for change \u2014 not motivation imposed from outside. We explore ambivalence honestly, evoke your reasons for change, and build self-efficacy. Originally developed for substance use treatment, now widely used wherever someone is stuck between wanting change and resisting it.'
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

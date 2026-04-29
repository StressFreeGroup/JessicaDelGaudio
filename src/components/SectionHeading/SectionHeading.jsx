import s from './SectionHeading.module.css';

export default function SectionHeading({ eyebrow, title, lead, align = 'left' }) {
  return (
    <header className={`${s.head} ${s[align]}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={s.title}>{title}</h2>
      {lead && <p className={`${s.lead} lead`}>{lead}</p>}
    </header>
  );
}

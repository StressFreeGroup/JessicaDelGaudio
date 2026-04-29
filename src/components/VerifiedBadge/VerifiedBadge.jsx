import s from './VerifiedBadge.module.css';

export default function VerifiedBadge() {
  return (
    <a
      href="https://www.mind-diagnostics.org/listing/207162-Jessica-Del-Gaudio"
      target="_blank"
      rel="noopener noreferrer"
      className={s.badge}
    >
      <span className={s.stars} aria-hidden="true">
        {[0,1,2,3,4].map(i => (
          <svg key={i} viewBox="0 0 20 20" className={s.star}>
            <path d="M10 1.5l2.6 5.3 5.9.85-4.25 4.15 1 5.85L10 14.85l-5.25 2.8 1-5.85L1.5 7.65l5.9-.85L10 1.5z" />
          </svg>
        ))}
      </span>
      <span className={s.text}>
        <span className={s.score}>4.6 stars</span>
        <span className={s.sub}>50 verified reviews on Mind Diagnostics</span>
      </span>
      <svg viewBox="0 0 16 16" className={s.arrow} aria-hidden="true">
        <path d="M5 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    </a>
  );
}

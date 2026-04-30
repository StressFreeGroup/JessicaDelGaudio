import { reviews } from '../../../config/booking.js';
import s from './Reviews.module.css';

function StarRow({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.round(rating);
    stars.push(
      <svg key={i} viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" className={filled ? s.starFilled : s.starEmpty}>
        <path
          d="M10 1.5l2.6 5.5 6 .9-4.4 4.3 1 6-5.4-2.9-5.4 2.9 1-6L1 7.9l6-.9z"
          fill={filled ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return <div className={s.stars} aria-label={`${rating} out of 5 stars`}>{stars}</div>;
}

export default function Reviews() {
  const { primary, others } = reviews;
  return (
    <section className={s.section} aria-labelledby="reviews-title">
      <div className="container">
        <header className={s.head}>
          <span className={s.eyebrow}>Verified reviews</span>
          <h2 id="reviews-title" className={s.title}>
            What clients are saying.
          </h2>
        </header>

        <div className={s.card}>
          <div className={s.ratingBlock}>
            <StarRow rating={primary.rating} />
            <div className={s.ratingNum}>{primary.rating.toFixed(1)}</div>
            <p className={s.ratingMeta}>
              Across <strong>{primary.count} verified reviews</strong> on {primary.platform}
            </p>
          </div>

          <div className={s.linkBlock}>
            <p className={s.linkLabel}>Read full reviews on Jessica&rsquo;s verified directory listings:</p>
            <div className={s.linkList}>
              <a href={primary.url} target="_blank" rel="noopener noreferrer" className={s.directoryLink}>
                {primary.platform}
                <svg viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden="true">
                  <path d="M5 3h8v8M13 3L5.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              {others.map(r => (
                <a key={r.platform} href={r.url} target="_blank" rel="noopener noreferrer" className={s.directoryLink}>
                  {r.platform}
                  <svg viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden="true">
                    <path d="M5 3h8v8M13 3L5.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className={s.disclosure}>
          As a licensed clinician in New York, Jessica does not republish client testimonials on her own
          website. Reviews live on independent verified-clinician directories where the platform owns
          moderation and authenticity \u2014 the links above take you directly to them.
        </p>
      </div>
    </section>
  );
}

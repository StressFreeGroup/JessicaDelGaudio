import s from './TrustStrip.module.css';

const items = [
  { kicker: 'Credential', value: 'NY LMHC #013081' },
  { kicker: 'Experience', value: '9 Years in Practice' },
  { kicker: 'Sessions', value: 'In-Person & Virtual' },
  { kicker: 'Payment', value: 'FSA / HSA Accepted' }
];

export default function TrustStrip() {
  return (
    <div className={s.strip}>
      <div className={s.inner}>
        {items.map(it => (
          <div key={it.value} className={s.item}>
            <span className={s.kicker}>{it.kicker}</span>
            <span className={s.value}>{it.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import s from './FAQ.module.css';

const faqs = [
  {
    q: 'Do you take insurance?',
    a: 'I\u2019m a private-pay practice. On request, I\u2019ll provide a superbill that you can submit to your insurance company for possible out-of-network reimbursement. FSA and HSA cards are accepted at checkout.'
  },
  {
    q: 'Do you offer in-person sessions?',
    a: 'Yes. I see clients in-person at my Newburgh, NY office. I also offer secure video and phone sessions for clients across New York State who prefer telehealth or live too far to travel.'
  },
  {
    q: 'How long is a session?',
    a: 'A standard therapy session is 60 minutes. Plan members can also book 45-minute sessions at a discounted rate for shorter check-ins between full sessions.'
  },
  {
    q: 'What if I need to cancel or reschedule?',
    a: 'Use the link in your confirmation email to reschedule up to 24 hours before your appointment. Cancellations made with less than 24 hours\u2019 notice or missed sessions are not refunded.'
  },
  {
    q: 'How do I know if we\u2019re a good fit?',
    a: 'The free 15-minute consultation exists for exactly this. We\u2019ll talk about what brings you here, what you\u2019re hoping for, and whether my approach matches what you need. No pressure to move forward.'
  },
  {
    q: 'Is everything we discuss confidential?',
    a: 'Yes. Everything stays between us, with the standard legal exceptions all licensed therapists are required to follow (imminent risk of harm to self or others, suspected abuse of a vulnerable person, court order). I\u2019ll review these in detail at our first session.'
  }
];

export default function FAQ() {
  return (
    <section className={s.section} aria-labelledby="faq-title">
      <div className="container">
        <header className={s.head}>
          <span className={s.eyebrow}>Common questions</span>
          <h2 id="faq-title" className={s.title}>
            Things people ask before they reach out.
          </h2>
        </header>

        <dl className={s.list}>
          {faqs.map(item => (
            <div key={item.q} className={s.item}>
              <dt className={s.q}>{item.q}</dt>
              <dd className={s.a}>{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

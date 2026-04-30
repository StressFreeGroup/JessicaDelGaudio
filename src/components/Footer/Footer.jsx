import { Link } from 'react-router-dom';
import { contact } from '../../config/booking.js';
import s from './Footer.module.css';

const forms = [
  { label: 'Notice of Privacy Practices',     href: '/forms/Notice-of-Privacy-Practices.pdf' },
  { label: 'Informed Consent for Treatment',  href: '/forms/Informed-Consent-for-Treatment.pdf' },
  { label: 'Telehealth Consent (NY)',         href: '/forms/Telehealth-Consent.pdf' },
  { label: 'Cancellation & Refund Policy',    href: '/forms/Cancellation-and-Refund-Policy.pdf' },
  { label: 'Auto-Renewal Disclosure',         href: '/forms/Auto-Renewal-Disclosure.pdf' }
];

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
      <path d="M8 2v9M4 7l4 4 4-4M3 13.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={`${s.col} ${s.colWide}`}>
          <Link to="/" className={s.brand}>
            <span className={s.brandMark}>Jessica Del Gaudio, LMHC</span>
          </Link>
          <p className={s.tagline}>
            Compassionate, evidence-based therapy for adults navigating anxiety, grief, addiction recovery,
            and life transitions. In-person sessions in Newburgh, NY &mdash; with secure video and phone sessions across New York State.
          </p>
        </div>

        <div className={s.col}>
          <h4 className={s.label}>Practice</h4>
          <ul className={s.links}>
            <li><Link to="/services">Services &amp; Modalities</Link></li>
            <li><a href="/#schedule">Schedule a Session</a></li>
            <li><Link to="/about">About Jessica</Link></li>
            <li><Link to="/rates">Rates &amp; Insurance</Link></li>
          </ul>
        </div>

        <div className={s.col}>
          <h4 className={s.label}>Contact</h4>
          <ul className={s.links}>
            <li><a href={`tel:${contact.phoneE164}`}>{contact.phone}</a></li>
            <li><a href={`mailto:${contact.personalEmail}`}>{contact.personalEmail}</a></li>
            <li><Link to="/contact">Send a message</Link></li>
            <li><Link to="/payment">Payment options</Link></li>
          </ul>
        </div>

        <div className={s.col}>
          <h4 className={s.label}>Forms &amp; Disclosures</h4>
          <ul className={s.linksForms}>
            {forms.map(f => (
              <li key={f.href}>
                <a href={f.href} target="_blank" rel="noopener noreferrer" download>
                  <DownloadIcon />
                  <span>{f.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.col}>
          <h4 className={s.label}>Credentials</h4>
          <ul className={s.linksSmall}>
            <li>NY LMHC #013081</li>
            <li>NPI 1548763600</li>
            <li>FSA / HSA accepted</li>
            <li>License renews June 2028</li>
          </ul>
        </div>
      </div>

      <div className={s.subFoot}>
        <div className={s.subInner}>
          <p>&copy; {new Date().getFullYear()} Jessica Del Gaudio, LMHC, PLLC. All rights reserved.</p>
          <div className={s.subLinks}>
            <Link to="/privacy">Privacy Notice</Link>
            <span aria-hidden="true">&middot;</span>
            <a href="https://npiregistry.cms.hhs.gov/provider-view/1548763600" target="_blank" rel="noopener noreferrer">NPI Registry</a>
            <span aria-hidden="true">&middot;</span>
            <span>988 &mdash; Suicide &amp; Crisis Lifeline</span>
          </div>
        </div>
        <p className={s.disclaimer}>
          If you are experiencing a mental health emergency, please call or text 988 or go to your nearest emergency room. This website does not provide crisis services.
        </p>
      </div>
    </footer>
  );
}

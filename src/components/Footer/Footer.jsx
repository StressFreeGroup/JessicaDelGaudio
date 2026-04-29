import { Link } from 'react-router-dom';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.col}>
          <Link to="/" className={s.brand}>
            <span className={s.brandMark}>Jessica Del Gaudio, LMHC</span>
          </Link>
          <p className={s.tagline}>
            Compassionate, evidence-based therapy for adults navigating anxiety, grief, addiction recovery, and life transitions. Based in Newburgh, NY &mdash; offering telehealth across New York State.
          </p>
        </div>

        <div className={s.col}>
          <h4 className={s.label}>Practice</h4>
          <ul className={s.links}>
            <li><Link to="/about">About Jessica</Link></li>
            <li><Link to="/services">Services &amp; Approach</Link></li>
            <li><Link to="/rates">Rates &amp; Insurance</Link></li>
            <li><Link to="/">Book a Session</Link></li>
          </ul>
        </div>

        <div className={s.col}>
          <h4 className={s.label}>Contact</h4>
          <ul className={s.links}>
            <li><a href="tel:18456625773">(845) 662-5773</a></li>
            <li><a href="mailto:jess@jessicadelgaudio.com">jess@jessicadelgaudio.com</a></li>
            <li><Link to="/contact">Send a message</Link></li>
            <li><Link to="/payment">Payment options</Link></li>
          </ul>
        </div>

        <div className={s.col}>
          <h4 className={s.label}>Credentials</h4>
          <ul className={s.linksSmall}>
            <li>NY LMHC #013081</li>
            <li>NPI 1548763600</li>
            <li>FSA / HSA accepted</li>
            <li>Renews June 2028</li>
          </ul>
        </div>
      </div>

      <div className={s.subFoot}>
        <div className={s.subInner}>
          <p>&copy; {new Date().getFullYear()} Jessica Del Gaudio, LMHC, PLLC. All rights reserved.</p>
          <div className={s.subLinks}>
            <Link to="/privacy">Privacy Notice</Link>
            <span aria-hidden="true">·</span>
            <a href="https://npiregistry.cms.hhs.gov/provider-view/1548763600" target="_blank" rel="noopener noreferrer">NPI Registry</a>
            <span aria-hidden="true">·</span>
            <span>988 — Suicide &amp; Crisis Lifeline</span>
          </div>
        </div>
        <p className={s.disclaimer}>
          If you are experiencing a mental health emergency, please call or text 988 or go to your nearest emergency room. This website does not provide crisis services.
        </p>
      </div>
    </footer>
  );
}

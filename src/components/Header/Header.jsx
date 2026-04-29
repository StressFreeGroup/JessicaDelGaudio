import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { booking } from '../../config/booking.js';
import s from './Header.module.css';

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/rates', label: 'Rates' },
  { to: '/payment', label: 'Payment' },
  { to: '/contact', label: 'Contact' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
      <div className={s.inner}>
        <Link to="/" className={s.brand} onClick={() => setOpen(false)}>
          <span className={s.brandMark}>Jessica Del Gaudio</span>
          <span className={s.brandSub}>LMHC · Therapy &amp; Counseling</span>
        </Link>

        <nav className={s.nav} aria-label="Primary">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `${s.link} ${isActive ? s.linkActive : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a href={booking.freeConsult} target="_blank" rel="noopener noreferrer" className={s.cta}>
          Book Session
        </a>

        <button
          className={s.burger}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className={`${s.burgerLine} ${open ? s.burgerLineOpen1 : ''}`} />
          <span className={`${s.burgerLine} ${open ? s.burgerLineOpen2 : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${s.drawer} ${open ? s.drawerOpen : ''}`} aria-hidden={!open}>
        <nav className={s.drawerNav} aria-label="Mobile">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `${s.drawerLink} ${isActive ? s.drawerLinkActive : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <a href={booking.freeConsult} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className={s.drawerCta}>
            Book Session
          </a>
        </nav>
      </div>
    </header>
  );
}

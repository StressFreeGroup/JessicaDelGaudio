import { Link } from 'react-router-dom';
import s from './Button.module.css';

export default function Button({
  to,
  href,
  variant = 'primary', // primary | accent | ghost | outline
  size = 'md',         // md | lg
  children,
  ...rest
}) {
  const cls = `${s.btn} ${s[variant]} ${s[size]}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}<Arrow /></Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}<Arrow /></a>;
  return <button className={cls} {...rest}>{children}<Arrow /></button>;
}

function Arrow() {
  return (
    <svg className={s.arrow} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

import { Link } from 'react-router-dom';
import { seriesLinks } from '../data/nav';

const CONTACT_TEXT = 'TA KONTAKT FOR NÆRMERE OPPLYSNINGER OG PRISER';
const EPOKE_TEXT = 'BEGGE BØKENE KAN BESTILLES FRA WWW.EPOKEFORLAG.NO';

export default function Footer({ variant = 'series' }) {
  return (
    <footer className="site-footer">
      <div className="site-footer-left">
        {variant === 'series' &&
          seriesLinks.map((item, i) => (
            <span key={item.to}>
              <Link to={item.to}>{item.label}</Link>
              {i < seriesLinks.length - 1 ? '  ·  ' : ''}
            </span>
          ))}
        {variant === 'contact' && <span>{CONTACT_TEXT}</span>}
        {variant === 'epoke' && <span>{EPOKE_TEXT}</span>}
      </div>
      <div>© 2026 GJORVEN.NO</div>
    </footer>
  );
}

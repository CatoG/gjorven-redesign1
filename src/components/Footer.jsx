import { Link } from 'react-router-dom';
import { seriesLinks } from '../data/nav';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-left">
        {seriesLinks.map((item, i) => (
          <span key={item.to}>
            <Link to={item.to}>{item.label}</Link>
            {i < seriesLinks.length - 1 ? '  ·  ' : ''}
          </span>
        ))}
      </div>
      <div>© 2026 GJORVEN.NO</div>
    </footer>
  );
}

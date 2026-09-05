import { Link, useLocation } from 'react-router-dom';
import { mainNav } from '../data/nav';

export default function Header({ overlay = false }) {
  const { pathname } = useLocation();

  return (
    <header className={`site-header${overlay ? ' site-header--overlay' : ''}`}>
      <Link to="/" className="wordmark">
        <span className="wordmark-title">Reidar Gjørven</span>
        <span className="wordmark-subtitle">Grafisk designer</span>
      </Link>
      <nav className="main-nav" aria-label="Hovedmeny">
        {mainNav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={pathname === item.to ? 'is-current' : undefined}
            aria-current={pathname === item.to ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

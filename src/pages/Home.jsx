import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { home } from '../data/content';

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-image" src={home.hero.image} alt="" />
        <div className="hero-scrim" />
        <div className="hero-content">
          <Header overlay />
          <div className="hero-bottom">
            <div className="hero-copy">
              <h1 className="hero-title">{home.hero.title}</h1>
              <p className="hero-body">{home.hero.body}</p>
            </div>
            <Link to="/fjordscapes" className="btn-ghost">
              Se galleri
            </Link>
          </div>
        </div>
      </section>

      <main>
        <div className="teaser-grid">
          {home.teaser.map((t) => (
            <div key={t.file} className={`teaser-tile${t.span === 2 ? ' teaser-tile--span2' : ''}`}>
              <img src={`/gallery/${t.file}`} alt={t.title} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="series-index">
          {home.seriesIndex.map((row) => (
            <Link key={row.to} to={row.to} className="series-row">
              <span className="series-row-title">{row.title}</span>
              <span className="series-row-meta">{row.meta} →</span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

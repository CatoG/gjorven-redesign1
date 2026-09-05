import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { oppdrag } from '../data/content';

export default function Oppdrag() {
  return (
    <>
      <Header />
      <main>
        <div className="title-band">
          <h1 className="page-title">{oppdrag.heading}</h1>
        </div>

        <div className="service-columns">
          {oppdrag.services.map((s) => (
            <div key={s.num} className="service-column">
              <span className="service-num">{s.num}</span>
              <h2 className="service-title">{s.title}</h2>
              <p className="service-body">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="work-cards">
          {oppdrag.cards.map((c) => (
            <Link key={c.to} to={c.to} className="work-card">
              <img src={c.image} alt="" style={c.objectPosition ? { objectPosition: c.objectPosition } : undefined} />
              <span className="work-card-caption">{c.title}</span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

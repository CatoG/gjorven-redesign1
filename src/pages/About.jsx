import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { about } from '../data/content';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <div className="about-body">
          <div className="about-main">
            <h1 className="about-title">{about.heading}</h1>
            {about.paragraphs.map((p) => (
              <p key={p} className="about-lead">
                {p}
              </p>
            ))}
          </div>
          <img className="about-portrait" src={about.portrait} alt="Portrett av Reidar Gjørven" />
          <div className="about-clients">
            <span className="eyebrow">{about.clientsEyebrow}</span>
            <p className="about-clients-body">{about.clientsBody}</p>
            <Link to="/referanser" className="underline-link">
              Alle referanser
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Header from '../components/Header';
import Footer from '../components/Footer';
import { kontakt } from '../data/content';

export default function Kontakt() {
  return (
    <>
      <Header />
      <main>
        <div className="kontakt-body">
          <div className="kontakt-main">
            <h1 className="page-title">{kontakt.heading}</h1>

            <div className="kontakt-fields">
              {kontakt.fields.map((f) => (
                <div key={f.eyebrow} className="kontakt-field">
                  <span className="eyebrow">{f.eyebrow}</span>
                  {f.value ? (
                    // Kept as obfuscated plain text (no mailto:) to defeat scrapers, matching
                    // the current live site — see README "Email obfuscation". Styled to match
                    // the mock's underline; ask Reidar before wiring a real mailto: link.
                    <span className="kontakt-value kontakt-value--muted-link">{f.value}</span>
                  ) : (
                    f.lines.map((line) => (
                      <span key={line} className="kontakt-value">
                        {line}
                      </span>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="kontakt-closing">
            <p>{kontakt.closing}</p>
          </div>
          <img className="kontakt-image" src={kontakt.image} alt="Odden, Nordfjord" />
        </div>
      </main>
      <Footer />
    </>
  );
}

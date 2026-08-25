import Header from '../components/Header';
import Footer from '../components/Footer';
import { referanser } from '../data/content';

export default function Referanser() {
  return (
    <>
      <Header />
      <main>
        <div className="title-band title-band--stack">
          <h1 className="page-title">{referanser.heading}</h1>
          <span className="eyebrow">{referanser.eyebrow}</span>
        </div>

        <div className="referanser-list">
          {referanser.columns.map((col, ci) => (
            <div key={ci}>
              {col.map((name) => (
                <div key={name} className="referanser-item">
                  {name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer variant="series" />
    </>
  );
}

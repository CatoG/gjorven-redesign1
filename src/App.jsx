import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import About from './pages/About';
import Oppdrag from './pages/Oppdrag';
import Referanser from './pages/Referanser';
import Kontakt from './pages/Kontakt';
import MoreAbout from './pages/MoreAbout';

import { galleries } from './data/galleries';

import fjordscapesRaw from './data/pages/fjordscapes';
import evigIsRaw from './data/pages/evigIs';
import bestefarsBokRaw from './data/pages/bestefarsBok';
import floralisRaw from './data/pages/floralis';
import bokdesignRaw from './data/pages/bokdesign';
import grafikkRaw from './data/pages/grafikkOgIllustrasjon';

const moreContent = {
  fjordscapes: fjordscapesRaw.more,
  'evig-is': evigIsRaw.more,
  'bestefars-bok': bestefarsBokRaw.more,
  floralis: floralisRaw.more,
  bokdesign: bokdesignRaw.more,
  'grafikk-og-illustrasjon': grafikkRaw.more,
};

export default function App() {
  return (
    <div className="site">
      <Routes>
        <Route path="/" element={<Home />} />

        {Object.values(galleries).map((g) => (
          <Route key={g.slug} path={`/${g.slug}`} element={<GalleryPage data={g} />} />
        ))}

        {Object.entries(moreContent).map(([slug, more]) => (
          <Route
            key={`${slug}-more`}
            path={`/${slug}/mer-om-${slug}`}
            element={<MoreAbout heading={more.heading} bodyHtml={more.body} footerVariant={galleries[slug]?.footer ?? 'series'} />}
          />
        ))}

        <Route path="/om-reidar-gjorven" element={<About />} />
        <Route path="/oppdrag" element={<Oppdrag />} />
        <Route path="/referanser" element={<Referanser />} />
        <Route path="/kontaktinformasjon" element={<Kontakt />} />
      </Routes>
    </div>
  );
}

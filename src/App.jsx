import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GalleryPage from './pages/GalleryPage';
import MoreAboutPage from './pages/MoreAboutPage';
import ArticlePage from './pages/ArticlePage';

import fjordscapes from './data/pages/fjordscapes';
import evigIs from './data/pages/evigIs';
import bestefarsBok from './data/pages/bestefarsBok';
import floralis from './data/pages/floralis';
import bokdesign from './data/pages/bokdesign';
import grafikkOgIllustrasjon from './data/pages/grafikkOgIllustrasjon';
import logoOgIdentitet from './data/pages/logoOgIdentitet';

import omReidarGjorven from './data/pages/omReidarGjorven';
import oppdrag from './data/pages/oppdrag';
import referanser from './data/pages/referanser';
import kontaktinformasjon from './data/pages/kontaktinformasjon';

const galleries = [
  { path: '/', data: fjordscapes },
  { path: '/evig-is', data: evigIs },
  { path: '/bestefars-bok', data: bestefarsBok },
  { path: '/floralis', data: floralis },
  { path: '/bokdesign', data: bokdesign },
  { path: '/grafikk-og-illustrasjon', data: grafikkOgIllustrasjon },
  { path: '/logo-og-identitet', data: logoOgIdentitet },
];

const articles = [
  { path: '/om-reidar-gjorven', data: omReidarGjorven },
  { path: '/oppdrag', data: oppdrag },
  { path: '/referanser', data: referanser },
  { path: '/kontaktinformasjon', data: kontaktinformasjon },
];

export default function App() {
  return (
    <Layout>
      <Routes>
        {galleries.map((g) => (
          <Route key={g.path} path={g.path} element={<GalleryPage data={g.data} />} />
        ))}
        {galleries
          .filter((g) => g.data.more)
          .map((g) => (
            <Route
              key={`${g.path}-more`}
              path={`/${g.data.slug}/mer-om-${g.data.slug}`}
              element={<MoreAboutPage data={g.data} />}
            />
          ))}
        {articles.map((a) => (
          <Route key={a.path} path={a.path} element={<ArticlePage data={a.data} />} />
        ))}
      </Routes>
    </Layout>
  );
}

// Series manifests for the gallery templates.
// Image dimensions/filenames are sourced from the original Joomla export
// (src/data/pages/*.js); titles and copy are rewritten to match the
// design handoff (design_handoff_gjorven_site/README.md).

import fjordscapesRaw from './pages/fjordscapes';
import evigIsRaw from './pages/evigIs';
import floralisRaw from './pages/floralis';
import bokdesignRaw from './pages/bokdesign';
import grafikkRaw from './pages/grafikkOgIllustrasjon';
import logoRaw from './pages/logoOgIdentitet';

// The Joomla export left the last four Fjordscapes titles blank; the design
// handoff derives them from their filenames (README "Galleri — Fjordscapes").
const fjordscapesTitleFixes = ['Stryn høst', 'Svane', 'Tindefjell', 'Vinterlys'];
const fjordscapesThumbs = fjordscapesRaw.thumbs.map((t, i) =>
  t.title ? t : { ...t, title: fjordscapesTitleFixes[i - 20] },
);

const bokdesignThumbs = [{ file: 'storenorske.jpg', title: '' }, ...bokdesignRaw.thumbs];

// Bestefars bok: the 35 illustrations shown in the design mock, matched to
// their source files by subject (see design_handoff_gjorven_site/README.md).
const bestefarsBokThumbs = [
  { file: 'image1be2.jpg', title: 'Bamse' },
  { file: 'image5717.jpg', title: 'Bebelam' },
  { file: 'image3042.jpg', title: 'Elefantbrann' },
  { file: 'image0d61.jpg', title: 'Engel' },
  { file: 'imagea258.jpg', title: 'Erteprinsesse' },
  { file: 'image1302.jpg', title: 'Fabelfisk' },
  { file: 'image3bba.jpg', title: 'Frukt' },
  { file: 'image4a40.jpg', title: 'Geita' },
  { file: 'image1464.jpg', title: 'Griser' },
  { file: 'imaged68d.jpg', title: 'Hane og rev' },
  { file: 'image3851.jpg', title: 'Hattekanin' },
  { file: 'image2ada.jpg', title: 'Heddalstroll' },
  { file: 'image486f.jpg', title: 'Kanin' },
  { file: 'imageb077.jpg', title: 'Killing' },
  { file: 'image2620.jpg', title: 'Kje' },
  { file: 'imagea9d1.jpg', title: 'Klippesau' },
  { file: 'image76ec.jpg', title: 'Konge' },
  { file: 'imagee7c1.jpg', title: 'Kontoristen' },
  { file: 'imagec61b.jpg', title: 'Marikåpe' },
  { file: 'imagee4f9.jpg', title: 'Mus' },
  { file: 'image4652.jpg', title: 'Nattmåne' },
  { file: 'image5c54.jpg', title: 'Okseskaft' },
  { file: 'image055d.jpg', title: 'Pitt Pott' },
  { file: 'image3dcc.jpg', title: 'Prinsen' },
  { file: 'imageba87.jpg', title: 'Tekanna' },
  { file: 'image5cc7.jpg', title: 'Tordenskjold' },
  { file: 'image6057.jpg', title: 'Trekanthatt' },
  { file: 'image1eaf.jpg', title: 'Tre kinesere' },
  { file: 'image6664.jpg', title: 'Alle fugler' },
  { file: 'imagebd46.jpg', title: 'Fyrlys' },
  { file: 'imagec9ce.jpg', title: 'Admiral' },
  { file: 'image5de6.jpg', title: 'Bukkene Bruse' },
  { file: 'imagef8d8.jpg', title: 'Elefanten' },
  { file: 'image34c4.jpg', title: 'Elefantvanter' },
  { file: 'imagef711.jpg', title: 'Fiskeskjær' },
];

export const galleries = {
  fjordscapes: {
    slug: 'fjordscapes',
    title: 'Fjordscapes',
    kind: 'photo',
    showFilters: true,
    heading: 'Fjordscapes - landskap fra norske fjorder',
    intro:
      'Fjordlandskapet er en av våre viktigste naturressurser enten vi ser det fra bilveien, fra dekket på Hurtigruta, eller vi se det i fugleperspektiv fra en snøkledt topp. Sommer som vinter. Med bakgrunn fra Stryn i Nordfjord har jeg bygget opp et betydelig billedarkiv med landskapsmotiver fra fjell og fjord. En del av motivene er videre bearbeidet som akryl- eller akvarellmalerier og digital grafikk. Noen kan også leveres som doble postkort.',
    counterLabel: (n) => `${n} MOTIV`,
    footer: 'series',
    thumbs: fjordscapesThumbs,
  },
  'evig-is': {
    slug: 'evig-is',
    title: 'Evig is?',
    kind: 'photo',
    showFilters: true,
    heading: 'Evig is? Eternal ice?',
    intro:
      'Isbreene er blant våre mest besøkte turistattraksjoner, og en viktig del av vår norske identitet. Vil de være borte om 50 år på grunn av klimaendringer? Designeren Reidar Gjørven henter inspirasjon i brelandskapet, og tolker is, vann og stein i ord og bilder. Bildene danner også grunnlaget for skulpturelle objekter i glass.',
    counterLabel: (n) => `${n} MOTIV`,
    footer: 'series',
    cover: 'images/boksbilder/evig_is_cover2.jpg',
    thumbs: evigIsRaw.thumbs,
  },
  'bestefars-bok': {
    slug: 'bestefars-bok',
    title: 'Bestefars bok',
    kind: 'illustration',
    showFilters: true,
    heading: 'Bestefars bok',
    intro:
      'I 2008 lanserte Epoke Forlag "Bestefars bok". Design og illustrasjoner ved Reidar Gjørven. Boken inneholder sanger, barnerim, regler og eventyr. Den er illustrert med over 200 tegninger og akvareller. Bestemors bok kom på samme forlag i 2007.',
    counterLabel: (n) => `${n} ILLUSTRASJONER I UTVALG`,
    footer: 'epoke',
    cover: 'images/boksbilder/COVER_LR_Bedstefars-bok.jpg',
    thumbs: bestefarsBokThumbs,
  },
  floralis: {
    slug: 'floralis',
    title: 'Floralis',
    kind: 'photo',
    showFilters: true,
    heading: 'Floralis',
    intro:
      'Med stor interesse for våre ville planter har jeg bygget opp en samling på flere tusen digitale plantefotos. De fleste er fra norsk villflora, men også en del hageplanter og planter fra varmere strøk er med. I tillegg til rene plantefotos har jeg laget en serie plantegrafikk, der bildene er bearbeidet til dekorative formål. Ta gjerne kontakt for nærmere informasjon.',
    counterLabel: (n) => `${n} MOTIV`,
    footer: 'series',
    thumbs: floralisRaw.thumbs,
  },
  bokdesign: {
    slug: 'bokdesign',
    title: 'Bokdesign',
    kind: 'photo',
    tall: true,
    showFilters: true,
    heading: 'Bokdesign',
    intro:
      'Mitt hovedarbeidsområde har vært design og illustrasjon av bokforsider. Jeg har mange års forlagserfaring fra Cappelen og Aschehoug, men driver nå eget designfirma. De største kundene har vært Cappelen, Gyldendal Tiden og Aschehoug. Jeg har illustrert over 2 000 norske bokforsider, og levert binddesign og boklayout til et stort antall bøker.',
    counterLabel: (n) => `${n} MOTIV`,
    footer: 'series',
    thumbs: bokdesignThumbs,
  },
  'grafikk-og-illustrasjon': {
    slug: 'grafikk-og-illustrasjon',
    title: 'Grafikk og illustrasjon',
    kind: 'photo',
    showFilters: true,
    heading: 'Grafikk og illustrasjon',
    intro:
      'Design og trykk av reklamemateriell. Digital grafikk, malerier i akvarell og akryl utføres på bestilling.',
    counterLabel: (n) => `${n} MOTIV`,
    footer: 'series',
    thumbs: grafikkRaw.thumbs,
  },
  'logo-og-identitet': {
    slug: 'logo-og-identitet',
    title: 'Logo og identitet',
    kind: 'illustration',
    showFilters: true,
    heading: 'Logo og identitet',
    intro: 'Typografiske arbeider, logodesign og visuell identitet.',
    counterLabel: (n) => `${n} MOTIV`,
    footer: 'series',
    thumbs: logoRaw.thumbs,
  },
};

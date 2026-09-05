// Static page copy, transcribed verbatim from design_handoff_gjorven_site/README.md.

export const home = {
  hero: {
    image: '/gallery/image6e7b.jpg', // Midnattsol
    title: 'Fjordscapes',
    body: 'Landskap fra norske fjorder. Med bakgrunn fra Stryn i Nordfjord har jeg bygget opp et betydelig billedarkiv med landskapsmotiver fra fjell og fjord.',
  },
  teaser: [
    { file: 'image6918.jpg', title: 'Breifonn', span: 2 },
    { file: 'image1a43.jpg', title: 'Lodalskåpa' },
    { file: 'image6471.jpg', title: 'Natt' },
    { file: 'imagea075.jpg', title: 'Odden' },
    { file: 'image2658.jpg', title: 'Strynefjell', span: 2 },
    { file: 'imageae41.jpg', title: 'Briksdalsbru' },
  ],
  seriesIndex: [
    { title: 'Evig is', to: '/evig-is', meta: 'SERIE' },
    { title: 'Bestefars bok', to: '/bestefars-bok', meta: 'SERIE' },
    { title: 'Floralis', to: '/floralis', meta: 'SERIE' },
    { title: 'Bokdesign, grafikk, logo og identitet', to: '/oppdrag', meta: 'OPPDRAG' },
  ],
};

export const about = {
  heading: 'Om Reidar Gjørven',
  paragraphs: [
    'Reidar Gjørven har en rekke års byråerfaring og 13 års praksis fra reklameavdeling og produksjonsavdeling i bokforlag: 5 år som AD i Aschehoug Forlag, 8 år som designsjef i J. W. Cappelens Forlag.',
    'Startet eget designstudio i 1986: Cover Design as.',
  ],
  clientsEyebrow: 'Største oppdragsgivere gjennom årene',
  clientsBody:
    'Mobil Oil, Prior Norge, Collett Kjemi, Jernbaneverket, Landkreditt, Norrek, BNP Paribas, og forlagene Aschehoug, Cappelen, Kunnskapsforlaget, Tiden, Landbruksforlaget, EDB-Kunnskap og Gyldendal Yrkesopplæring.',
  portrait: '/images/reidar.jpg',
};

export const oppdrag = {
  heading: 'Oppdrag',
  services: [
    {
      num: '01',
      title: 'Grafisk design og profilering',
      body: 'Reidar Gjørven utarbeider alle typer reklame- og informasjonstrykksaker, og leverer ferdig opplag på kundens lager. Solide underleverandører sikrer høy kvalitet og moderate priser.',
    },
    {
      num: '02',
      title: 'Forlagsdesign',
      body: 'Bokomslag og bokdesign, binddesign, bokannonser og kataloger, informasjon til bokhandlere, utforming av messemateriell til bokmessen i Frankfurt.',
    },
    {
      num: '03',
      title: 'Foto, grafikk og illustrasjon',
      body: 'Kreativ fotografi, grafikk og akvareller. Illustrasjoner for ethvert behov.',
    },
  ],
  cards: [
    {
      title: 'Logo og identitet',
      to: '/logo-og-identitet',
      image: '/gallery/image57c8.jpg',
      objectPosition: 'top',
    },
    {
      title: 'Bokdesign',
      to: '/bokdesign',
      image: '/gallery/image432b.jpg', 
    },
    {
      title: 'Grafikk og illustrasjon',
      to: '/grafikk-og-illustrasjon',
      image: '/gallery/imaged846.jpg', 
    },
  ],
};

export const referanser = {
  heading: 'Referanser',
  eyebrow: 'Største oppdragsgivere gjennom årene',
  columns: [
    ['Aschehoug', 'Cappelen', 'Kunnskapsforlaget', 'Tiden', 'Landbruksforlaget', 'EDB-Kunnskap', 'Gyldendal Yrkesopplæring'],
    ['Mobil Oil', 'Prior Norge', 'Collett Kjemi', 'Jernbaneverket', 'Landkreditt', 'Norrek', 'BNP Paribas'],
  ],
};

export const kontakt = {
  heading: 'Kontakt',
  fields: [
    { eyebrow: 'ADRESSE', lines: ['Reidar Gjørven', 'Gløshamaren 51, 6783 Stryn'] },
    { eyebrow: 'E-POST', value: 'reidar(a)gjorven.no' },
    { eyebrow: 'TELEFON', lines: ['+47 966 07 695'] },
  ],
  closing: '...',
  image: '/images/reidar.jpg',
};

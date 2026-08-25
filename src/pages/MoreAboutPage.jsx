import IntroBlock from '../components/IntroBlock';

export default function MoreAboutPage({ data }) {
  const { intro, slug, more } = data;
  const galleryTo = slug === 'fjordscapes' ? '/' : `/${slug}`;

  return (
    <>
      <div className="moduletable">
        <IntroBlock intro={intro} moreTo={`/${slug}/mer-om-${slug}`} galleryTo={galleryTo} />
      </div>
      <div id="system-message-container" />
      <div className="item-page">
        <div className="page-header">
          <h2>{more.heading}</h2>
        </div>
        <div itemProp="articleBody" dangerouslySetInnerHTML={{ __html: more.body }} />
      </div>
    </>
  );
}

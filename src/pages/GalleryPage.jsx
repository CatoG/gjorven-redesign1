import IntroBlock from '../components/IntroBlock';
import Gallery from '../components/Gallery';

export default function GalleryPage({ data }) {
  const { intro, thumbs, slug, more } = data;
  return (
    <>
      <div className="moduletable">
        <IntroBlock intro={intro} moreTo={more ? `/${slug}/mer-om-${slug}` : null} galleryTo={`/${slug === 'fjordscapes' ? '' : slug}`} />
      </div>
      <div id="system-message-container" />
      <style>{`.eventgallery-add2cart { display: none !important; }`}</style>
      <Gallery thumbs={thumbs} />
    </>
  );
}

import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterChips from '../components/FilterChips';
import GalleryGrid from '../components/GalleryGrid';

export default function GalleryPage({ data }) {
  const count = data.thumbs.length;

  return (
    <>
      <Header />
      <main>
        {data.cover ? (
          <div className="intro-block intro-block--cover">
            <div className="intro-copy">
              <h1 className="intro-title">{data.heading}</h1>
              <p className="intro-body">{data.intro}</p>
              <span className="intro-counter">{data.counterLabel(count)}</span>
            </div>
            <img className="intro-cover" src={`/${data.cover}`} alt={`Bokomslag: ${data.heading}`} />
          </div>
        ) : (
          <div className="intro-block">
            <div className="intro-copy">
              <h1 className="intro-title">{data.heading}</h1>
              <p className="intro-body">{data.intro}</p>
            </div>
            <span className="intro-counter">{data.counterLabel(count)}</span>
          </div>
        )}

        {data.showFilters && <FilterChips active={data.slug} />}

        <GalleryGrid thumbs={data.thumbs} kind={data.kind} seriesTitle={data.title} tall={data.tall} />
      </main>
      <Footer variant={data.footer} />
    </>
  );
}

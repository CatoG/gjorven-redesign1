import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MoreAbout({ heading, bodyHtml }) {
  return (
    <>
      <Header />
      <main>
        <div className="title-band">
          <h1 className="page-title">{heading}</h1>
        </div>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </main>
      <Footer />
    </>
  );
}

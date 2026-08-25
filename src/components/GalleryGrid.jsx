import { useEffect, useMemo, useRef, useState } from 'react';
import Lightbox from './Lightbox';

function fileSlug(file) {
  return file.replace(/\.[^.]+$/, '');
}

export default function GalleryGrid({ thumbs, kind, seriesTitle }) {
  const items = useMemo(
    () => thumbs.map((t, i) => ({ ...t, title: t.title || `${seriesTitle} ${i + 1}` })),
    [thumbs, seriesTitle],
  );

  const [activeIndex, setActiveIndex] = useState(null);
  const tileRefs = useRef([]);
  const pushedRef = useRef(false);

  useEffect(() => {
    function syncFromHash() {
      const slug = window.location.hash.slice(1);
      if (!slug) {
        setActiveIndex(null);
        pushedRef.current = false;
        return;
      }
      const i = items.findIndex((it) => fileSlug(it.file) === slug);
      setActiveIndex(i === -1 ? null : i);
    }
    syncFromHash();
    window.addEventListener('popstate', syncFromHash);
    return () => window.removeEventListener('popstate', syncFromHash);
  }, [items]);

  function open(i) {
    setActiveIndex(i);
    window.history.pushState({ lightbox: true }, '', `#${fileSlug(items[i].file)}`);
    pushedRef.current = true;
  }

  function navigate(i) {
    setActiveIndex(i);
    window.history.replaceState({ lightbox: true }, '', `#${fileSlug(items[i].file)}`);
  }

  function close() {
    const originTile = activeIndex !== null ? tileRefs.current[activeIndex] : null;
    if (pushedRef.current) {
      pushedRef.current = false;
      window.history.back();
    } else {
      setActiveIndex(null);
      window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
    originTile?.focus();
  }

  const isIllustration = kind === 'illustration';

  return (
    <>
      <div className={`gallery-grid${isIllustration ? ' gallery-grid--illustration' : ''}`}>
        {items.map((item, i) => (
          <a
            key={item.file}
            href={`#${fileSlug(item.file)}`}
            ref={(el) => {
              tileRefs.current[i] = el;
            }}
            className={`gallery-tile${isIllustration ? ' gallery-tile--illustration' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              open(i);
            }}
          >
            {isIllustration ? (
              <>
                <div className="gallery-mat">
                  <img src={`/gallery/${item.file}`} alt={item.title} loading="lazy" />
                </div>
                <span className="gallery-caption">{item.title}</span>
              </>
            ) : (
              <>
                <img src={`/gallery/${item.file}`} alt={item.title} loading="lazy" />
                <span className="gallery-caption">{item.title}</span>
              </>
            )}
          </a>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox items={items} index={activeIndex} kind={kind} onClose={close} onNavigate={navigate} />
      )}
    </>
  );
}

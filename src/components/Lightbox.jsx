import { useEffect, useRef } from 'react';

export default function Lightbox({ items, index, kind, onClose, onNavigate }) {
  const closeButtonRef = useRef(null);
  const item = items[index];

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((index + 1) % items.length);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  const image = (
    <img
      src={`/gallery/${item.file}`}
      alt={item.title || ''}
      className={kind === 'illustration' ? undefined : 'lightbox-image'}
    />
  );

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.title}>
      <button
        type="button"
        className="lightbox-arrow lightbox-arrow--prev"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + items.length) % items.length);
        }}
        aria-label="Forrige bilde"
      >
        ←
      </button>

      <figure className="lightbox-figure">
        {kind === 'illustration' ? <div className="lightbox-image lightbox-image--mat">{image}</div> : image}
        <figcaption className="lightbox-meta">
          {item.title && <span className="lightbox-title">{item.title}</span>}
          <button
            type="button"
            ref={closeButtonRef}
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            LUKK ×
          </button>
        </figcaption>
      </figure>

      <button
        type="button"
        className="lightbox-arrow lightbox-arrow--next"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % items.length);
        }}
        aria-label="Neste bilde"
      >
        →
      </button>
    </div>
  );
}

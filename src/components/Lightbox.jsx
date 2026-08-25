import { useEffect } from 'react';

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];

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

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        style={{
          position: 'absolute',
          top: 20,
          right: 30,
          fontSize: 32,
          color: 'white',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          lineHeight: 1,
        }}
      >
        &times;
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + items.length) % items.length);
        }}
        aria-label="Previous"
        style={navButtonStyle('left')}
      >
        &#8249;
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 0, maxWidth: '90vw', maxHeight: '85vh', textAlign: 'center' }}
      >
        <img
          src={`/gallery/${item.file}`}
          alt={item.title}
          style={{ maxWidth: '90vw', maxHeight: '80vh', display: 'block', margin: '0 auto' }}
        />
        {item.title && (
          <figcaption style={{ color: 'white', marginTop: 12, fontFamily: 'verdana', fontSize: 13 }}>
            {item.title}
          </figcaption>
        )}
      </figure>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % items.length);
        }}
        aria-label="Next"
        style={navButtonStyle('right')}
      >
        &#8250;
      </button>
    </div>
  );
}

function navButtonStyle(side) {
  return {
    position: 'absolute',
    [side]: 20,
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: 48,
    color: 'white',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    lineHeight: 1,
    padding: '0 10px',
  };
}

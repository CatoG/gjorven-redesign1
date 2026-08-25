import { useEffect, useMemo, useRef, useState } from 'react';
import Lightbox from './Lightbox';

const TARGET_ROW_HEIGHT = 190;
const GAP = 6;

function computeJustifiedRows(items, containerWidth) {
  if (!containerWidth) return [];
  const rows = [];
  let row = [];
  let rowAspectSum = 0;

  items.forEach((item, originalIndex) => {
    const aspect = item.width / item.height;
    row.push({ ...item, aspect, originalIndex });
    rowAspectSum += aspect;
    const naturalWidth = rowAspectSum * TARGET_ROW_HEIGHT + GAP * (row.length - 1);
    if (naturalWidth >= containerWidth) {
      const totalGap = GAP * (row.length - 1);
      const height = (containerWidth - totalGap) / rowAspectSum;
      rows.push({
        height,
        items: row.map((it) => ({ ...it, renderWidth: it.aspect * height, renderHeight: height })),
      });
      row = [];
      rowAspectSum = 0;
    }
  });
  if (row.length) {
    rows.push({
      height: TARGET_ROW_HEIGHT,
      items: row.map((it) => ({ ...it, renderWidth: it.aspect * TARGET_ROW_HEIGHT, renderHeight: TARGET_ROW_HEIGHT })),
    });
  }
  return rows;
}

export default function Gallery({ thumbs }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) setWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const rows = useMemo(() => computeJustifiedRows(thumbs, width), [thumbs, width]);

  return (
    <div className="event">
      <div
        className="eventgallery-thumbnails eventgallery-imagelist thumbnails"
        ref={containerRef}
        style={{ display: 'flex', flexDirection: 'column', gap: `${GAP}px` }}
      >
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} style={{ display: 'flex', gap: `${GAP}px` }}>
            {row.items.map((item) => {
              const globalIndex = item.originalIndex;
              return (
                <div
                  className="thumbnail-container"
                  key={item.file}
                  style={{ float: 'none', width: item.renderWidth, height: item.renderHeight }}
                >
                  <a
                    className="event-thumbnail img-thumbnail thumbnail"
                    href={`/gallery/${item.file}`}
                    title={item.title}
                    style={{ margin: 0, width: '100%', height: '100%' }}
                    onClick={(e) => {
                      e.preventDefault();
                      setLightboxIndex(globalIndex);
                    }}
                  >
                    <img
                      src={`/gallery/${item.file}`}
                      className="eg-img"
                      loading="lazy"
                      alt={item.title}
                      style={{ width: '100%', height: '100%', display: 'block' }}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={thumbs}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}

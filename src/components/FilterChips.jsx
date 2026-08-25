import { Link } from 'react-router-dom';

// Chip order differs from the footer's series-list order — see README
// "Series filter chips" vs "Footer" sections.
const CHIP_ORDER = [
  { slug: 'fjordscapes', label: 'Fjordscapes' },
  { slug: 'evig-is', label: 'Evig is' },
  { slug: 'bestefars-bok', label: 'Bestefars bok' },
  { slug: 'floralis', label: 'Floralis' },
];

export default function FilterChips({ active }) {
  return (
    <div className="filter-chips">
      {CHIP_ORDER.map((item) =>
        item.slug === active ? (
          <span key={item.slug} className="chip is-active">
            {item.label}
          </span>
        ) : (
          <Link key={item.slug} to={`/${item.slug}`} className="chip">
            {item.label}
          </Link>
        ),
      )}
    </div>
  );
}

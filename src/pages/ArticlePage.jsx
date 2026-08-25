export default function ArticlePage({ data }) {
  return (
    <div className="item-page">
      <div className="page-header">
        <h2>{data.heading}</h2>
      </div>
      <div itemProp="articleBody" dangerouslySetInnerHTML={{ __html: data.body }} />
    </div>
  );
}

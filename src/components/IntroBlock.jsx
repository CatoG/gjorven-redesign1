import { Link } from 'react-router-dom';

export default function IntroBlock({ intro, moreTo, galleryTo }) {
  if (!intro) return null;
  const { wellClass, heading, body, hasMoreLink, cover } = intro;

  return (
    <div className="custom">
      <div className={`moduletable ${wellClass}`}>
        <table cellSpacing="0" cellPadding="0" border="0">
          <tbody>
            <tr>
              <td valign="top">
                <div style={{ fontFamily: 'arial', fontSize: '16px' }}>
                  <strong>{heading}</strong>
                </div>
                <br />
                <div
                  style={{ fontFamily: 'verdana', fontSize: '11px', lineHeight: 'normal' }}
                  dangerouslySetInnerHTML={{ __html: body }}
                />
                {hasMoreLink && moreTo && (
                  <div style={{ fontFamily: 'verdana', fontSize: '12px', lineHeight: 'normal', color: 'white', marginTop: '10px' }}>
                    <Link to={moreTo} style={{ color: 'white' }}>
                      » Les mer...
                    </Link>{' '}
                    »{' '}
                    <Link to={galleryTo} style={{ color: 'white' }}>
                      Galleri...
                    </Link>
                  </div>
                )}
              </td>
              {cover?.src && (
                <td valign="top" width="250" style={{ padding: '0px 0px 0px 20px' }}>
                  <img
                    src={`/${cover.src}`}
                    alt="Grafisk designer Reidar Gjørven"
                    width={cover.width}
                    height={cover.height}
                    style={{ border: '10px solid white' }}
                  />
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

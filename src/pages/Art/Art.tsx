import "./Art.scss";
import img_art_01 from '../../images/art/img_art_01.jpeg'

const Art = () => {
  const artData = [
    {'id': 'art_01', 'img': img_art_01, 'year': '2019', 'name': 'Raijin and Dragon'},
    {'id': 'art_02', 'img': img_art_01, 'year': '2019', 'name': 'Raijin and Dragon'},
    {'id': 'art_03', 'img': img_art_01, 'year': '2019', 'name': 'Raijin and Dragon'},
    {'id': 'art_04', 'img': img_art_01, 'year': '2019', 'name': 'Raijin and Dragon'},
    {'id': 'art_05', 'img': img_art_01, 'year': '2019', 'name': 'Raijin and Dragon'},
    {'id': 'art_06', 'img': img_art_01, 'year': '2019', 'name': 'Raijin and Dragon'},
    {'id': 'art_07', 'img': img_art_01, 'year': '2019', 'name': 'Raijin and Dragon'},
    {'id': 'art_08', 'img': img_art_01, 'year': '2019', 'name': 'Raijin and Dragon'},
  ];
  return (
    <section id="art" className="art">
      <div className="c-bnr">
        <h1 className="heading">ART WORKS</h1>
      </div>
      <ul className="art__list">
        {artData.map(data =>
          <li key={data.id}>
            <div className="img">
              <div className="thumb" style={{backgroundImage: `url(${data.img})`}}></div>
            </div>
            <div className="content">
              <span>{data.year}</span>
              <strong>{data.name}</strong>
            </div>
          </li>
        )}
      </ul>
    </section>
  )
}

export default Art
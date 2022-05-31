import "./Tattoos.scss";
import img_tattoos_01 from '../../images/tattoos/img_tattoos_01.jpeg'

const Tattoos = () => {
  return (
    <div id="tattoos" className="tattoos">
      <div className="tattoos__bnr">
        <h1 className="heading">Tattoos</h1>
        <strong className="sub">Back</strong>
      </div>
      <ul className="tattoos__list container">
        <li>
          <div className="img">
            <div className="thumb" style={{backgroundImage: `url(${img_tattoos_01})`}}></div>
          </div>
          <div className="content">
            <span>2019</span>
            <strong>Raijin and Dragon</strong>
          </div>
        </li>
        <li>
          <div className="img">
            <div className="thumb" style={{backgroundImage: `url(${img_tattoos_01})`}}></div>
          </div>
          <div className="content">
            <span>2019</span>
            <strong>Raijin and Dragon</strong>
          </div>
        </li>
        <li>
          <div className="img">
            <div className="thumb" style={{backgroundImage: `url(${img_tattoos_01})`}}></div>
          </div>
          <div className="content">
            <span>2019</span>
            <strong>Raijin and Dragon</strong>
          </div>
        </li>
        <li>
          <div className="img">
            <div className="thumb" style={{backgroundImage: `url(${img_tattoos_01})`}}></div>
          </div>
          <div className="content">
            <span>2019</span>
            <strong>Raijin and Dragon</strong>
          </div>
        </li>
        <li>
          <div className="img">
            <div className="thumb" style={{backgroundImage: `url(${img_tattoos_01})`}}></div>
          </div>
          <div className="content">
            <span>2019</span>
            <strong>Raijin and Dragon</strong>
          </div>
        </li>
        <li>
          <div className="img">
            <div className="thumb" style={{backgroundImage: `url(${img_tattoos_01})`}}></div>
          </div>
          <div className="content">
            <span>2019</span>
            <strong>Raijin and Dragon</strong>
          </div>
        </li>
        <li>
          <div className="img">
            <div className="thumb" style={{backgroundImage: `url(${img_tattoos_01})`}}></div>
          </div>
          <div className="content">
            <span>2019</span>
            <strong>Raijin and Dragon</strong>
          </div>
        </li>
        <li>
          <div className="img">
            <div className="thumb" style={{backgroundImage: `url(${img_tattoos_01})`}}></div>
          </div>
          <div className="content">
            <span>2019</span>
            <strong>Raijin and Dragon</strong>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Tattoos;

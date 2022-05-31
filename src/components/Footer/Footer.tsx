import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__directories container">
        <div className="col">
          <h2 className="ttl">LOCATIONS</h2>
          <p className="txt">
            62 Grand Street <br />
            New York NY 10013
          </p>
          <p className="txt">
            328 Broome Street <br />
            New York NY 10002
          </p>
          <p className="txt">
            <a href="#website">BANG BANG SHOP</a>
          </p>
        </div>
        <div className="col">
          <h2 className="ttl">HOURS</h2>
          <p className="txt">Open 6 days - 1pm to 9pm</p>
          <p className="txt">TUESDAY - SUNDAY</p>
          <p className="txt">CLOSED MONDAYS</p>
          <p className="txt">ACCESSIBILITY STATEMENT</p>
        </div>
        <div className="col">
          <h2 className="ttl">CONTACT</h2>
          <p className="txt">212 219 2799</p>
          <p className="txt">646 918 7021</p>
          <p className="txt">MAKE AN APPOINTMENT</p>
          <p className="txt">FOR PRESS INQUIRIES</p>
          <p className="txt">Press@bangbangforever.com</p>
        </div>
        <div className="col">
          <h2 className="ttl">FOLLOW</h2>
          <ul className="social">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

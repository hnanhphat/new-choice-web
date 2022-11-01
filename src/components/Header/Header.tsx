import { LanguageContext } from "../../context/LanguageContext";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/common/logo.jpeg";
import "./Header.scss";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [subPage, setSubPage] = useState(false);
  const location = useLocation();
  const locale = useContext(LanguageContext);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
  }, [showHeader]);

  useEffect(() => {
    setShowMenu(false);
    window.scrollTo(0, 0);
    if (location.pathname !== "/") {
      setSubPage(true);
    } else {
      setSubPage(false);
    }
  }, [location]);

  return (
    <header
      id="header"
      className={`header ${showHeader || subPage ? "header--active" : ""}`}
    >
      <Link to="/" className="header__logo">
        <img src={logo} alt="New Choice Tattoo" />
      </Link>
      <h1 className="header__ttl">New Choice Tattoo</h1>
      <div
        className={`header__hamberger ${
          showMenu ? "header__hamberger--active" : ""
        }`}
      >
        <div className={`language ${showMenu ? "language--active" : ""}`}>
          <button
            className={locale.lang === "ns1" ? "active" : ""}
            onClick={() => locale.setLang && locale.setLang("ns1")}
          >
            EN
          </button>
          <button
            className={locale.lang === "ns2" ? "active" : ""}
            onClick={() => locale.setLang && locale.setLang("ns2")}
          >
            VN
          </button>
        </div>
        <button id="hamberger" onClick={() => setShowMenu(!showMenu)}></button>
      </div>
      <div className={`header__menu ${showMenu ? "header__menu--active" : ""}`}>
        <ul className="container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/tattoos">Tattoo</Link>
          </li>
          <li>
            <Link to="/art-works">Art Works</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

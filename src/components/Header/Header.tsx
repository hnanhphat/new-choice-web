import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/common/logo.jpeg";
import "./Header.scss";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [language, setLanguage] = useState(true);
  const [subPage, setSubPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 70) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
  }, [showHeader]);

  useEffect(() => {
    setShowMenu(false);
    window.scrollTo(0, 0);
    if(location.pathname !== '/') {
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
      <div
        className={`header__hamberger ${
          showMenu ? "header__hamberger--active" : ""
        }`}
      >
        <div className={`language ${showMenu ? "language--active" : ""}`}>
          <button
            className={language ? "active" : ""}
            onClick={() => setLanguage(!language)}
          >
            EN
          </button>
          <button
            className={language ? "" : "active"}
            onClick={() => setLanguage(!language)}
          >
            VN
          </button>
        </div>
        <button id="hamberger" onClick={() => setShowMenu(!showMenu)}></button>
      </div>
      <div className={`header__menu ${showMenu ? "header__menu--active" : ""}`}>
        <ul className="container">
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="/tattoos">Tattoo</Link>
          </li>
          <li>
            <Link to="#art">Art Works</Link>
          </li>
          <li>
            <Link to="#conventions">Conventions</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

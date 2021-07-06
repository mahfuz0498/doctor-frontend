import React, { useState, useHistory, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import "./Header.css";
import { assertFlowBaseAnnotation } from "@babel/types";

function Header() {
  const [navMenu, setNavMenu] = useState(false);
  const navClass = navMenu ? "header__burger" : "header__hide";
  const handleNavClick = () => {
    setNavMenu(false);
  };

  let listener = null;
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    console.log("timer");
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 1) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const header__class = scrollState ? "header__dark" : "";

  return (
    <div className={`header ${header__class}`}>
      <div className="header__logo">
        <Link onClick={handleNavClick} className="header__logoLink" to="/">
          <img src="data:image/png;base64,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" />
        </Link>
      </div>
      <div className={`header__nav ${navClass}`}>
        <ul>
          <Link className="header__link" onClick={handleNavClick} to="/">
            <li> HOME</li>
          </Link>
          <Link className="header__link" onClick={handleNavClick} to="/doctors">
            <li>DOCTORS</li>
          </Link>
          <Link
            className="header__link"
            onClick={handleNavClick}
            to="/departments"
          >
            <li>DEPARTMENTS</li>
          </Link>
          <Link className="header__link" onClick={handleNavClick} to="/contact">
            <li>CONTACT</li>
          </Link>
        </ul>
        <div onClick={() => setNavMenu(!navMenu)} className="header__menu">
          {navMenu ? (
            <CloseIcon />
          ) : (
            <MenuIcon className="header__menuBurger" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

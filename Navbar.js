import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="main_navbar">
        <div className="navbar-header">
          <h1 className="mainheading">SnapNews</h1>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <ul className={`navbarlist ${isOpen ? "open" : ""}`}>
          <li>
            <Link className="homebtn" to="/home" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="sportscat" to="/sports" onClick={closeMenu}>
              Sports
            </Link>
          </li>
          <li>
            <Link className="healthcat" to="/health" onClick={closeMenu}>
              Health
            </Link>
          </li>
          <li>
            <Link className="sciencecat" to="/science" onClick={closeMenu}>
              Science
            </Link>
          </li>
          <li>
            <Link className="businesscat" to="/business" onClick={closeMenu}>
              Business
            </Link>
          </li>
          <li>
            <Link className="entertainmentcat" to="/entertainment" onClick={closeMenu}>
              Entertainment
            </Link>
          </li>
          <li>
            <Link className="technologycat" to="/technology" onClick={closeMenu}>
              Technology
            </Link>
          </li>
          <li>
            <Link className="generalcat" to="/general" onClick={closeMenu}>
              General
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


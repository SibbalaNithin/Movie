import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = ({ search, setSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MyWebsite</h2>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
        <li>
          <input
            placeholder="Search Movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </li>
      </ul>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
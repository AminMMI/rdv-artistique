import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.png";
// import "../styles/Navbar.scss";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`nav ${isOpen ? "open" : ""}`}>
      <div className="nav__logo">
        <Link to="/">
          <img src={logo} alt="Logo RDV Artistique" />
        </Link>
      </div>

      <button
        className="nav__toggle"
        aria-label="Ouvrir le menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className="nav__list">
        <li><Link to="/ateliers-adultes">Ateliers Adultes</Link></li>
        <li><Link to="/ateliers-enfants">Ateliers Enfants</Link></li>
        <li><Link to="/les-petits-plus">Les Petits Plus</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

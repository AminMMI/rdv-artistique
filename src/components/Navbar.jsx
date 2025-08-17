// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img src={logo} alt="Logo RDV Artistique" />
        </Link>
      </div>

      <button className="nav__toggle" aria-label="Ouvrir le menu">
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

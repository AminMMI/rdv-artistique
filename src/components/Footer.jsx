import "../styles/Footer.scss";
import logo from "../assets/images/logo.jpg";



const Footer = () => (
 <footer class="footer">
  <h1>Retrouvez nous !</h1>
  <img src={logo} alt=""></img>
  <div class="footer-top">
    <div class="footer-item">📧 contact@exemple.com</div>
    <div class="footer-item">🏠 123 Rue de Paris, 75000 Paris</div>
    <div class="footer-item">📞 06 12 34 56 78</div>
  </div>

  <nav class="footer-bottom">
    <ul>
      <li><Link to="/Accueil">Accueil</Link></li>
      <li><Link to="/ateliers-adultes">Ateliers Adultes</Link></li>
      <li><Link to="/ateliers-enfants">Ateliers Enfants</Link></li>
      <li><Link to="/les-petits-plus">Les Petits Plus</Link></li>
    </ul>
  </nav>
</footer>

);

export default Footer;

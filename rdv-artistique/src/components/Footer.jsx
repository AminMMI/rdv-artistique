import "../styles/Footer.scss";


const Footer = () => (
 <footer class="footer">
  <h1>Retrouvez nous !</h1>
  <div class="footer-top">
    <div class="footer-item">📧 contact@exemple.com</div>
    <div class="footer-item">🏠 123 Rue de Paris, 75000 Paris</div>
    <div class="footer-item">📞 06 12 34 56 78</div>
  </div>

  <nav class="footer-bottom">
    <ul>
      <li><a href="/">Accueil</a></li>
      <li><a href="/adultes">Adultes</a></li>
      <li><a href="/enfants">Enfants</a></li>
      <li><a href="/petits-plus">Petits Plus</a></li>
    </ul>
  </nav>
</footer>

);

export default Footer;

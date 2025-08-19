import "../styles/Accueil.scss";
import mascotte from "../assets/images/mascotte.png";
import plaquette_2026 from "../assets/pdf/plaquette_saison_2025_26.pdf";

const Accueil = () => (
  <section className="p-6 Accueil">

    <div className="accueil_title">
      <div>
        <h1>Bienvenue chez RDV Artistique</h1>
        <h2>En bref, cette année l'association vous propose...</h2>
      </div>
    </div>

    <div className="accueil_hero">
    <ul className="ul_accueil">
        <li>32 ateliers (mercredi matin)</li>
        <li>4 soirées modèles vivants</li>
        <li>1 weekend de 3 jours pour réalisation de croquis</li>
        <li>1 visite au musée avec conférence</li>
        <li>2 jours au salon international du croquis à Clermont-Ferrand</li>
        <li>1 journée spéciale croquis</li>
        <li>Exposition au salon d'automne de Coubron</li>
        <li>Réalisation d'une fresque extérieure</li>
    </ul>

    <img className="accueil_img" src={mascotte}></img>
    </div>

    <div className="accueil_atelier">
      {/* Premier tableau */}
        <table>
        <thead>
          <tr>
            <th colSpan="3">
              LES ATELIERS
              DU MERCREDI MATIN
              <strong>2 GROUPES :</strong>
              SOIT 8H50 - 10H50
              SOIT 11H10 - 13H10
              (SAUF VACANCES SCOLAIRES)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Partie 1</strong>
              du 17 septembre au 17 décembre
              <em>Jeu de transparence :</em>
              comment l’invisible peut-il nous émouvoir ?
            </td>
            <td>
              <strong>Partie 2</strong>
              du 7 janvier au 15 avril
              <em>Le monde végétal :</em>
              cyanotype, encres végétales,
              comment interpréter et dessiner les végétaux ?
            </td>
            <td>
              <strong>Partie 3</strong>
              du 6 mai au 8 juillet
              <em>Découverte et croquis du Raincy</em>
            </td>
          </tr>
        </tbody>
      </table>



      {/* Troisième tableau */}
        <table>
        <thead>
          <tr>
            <th colSpan="3">
              LES WEEKEND DE L'ASSOCIATION
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
 Rendez-vous international
 du carnet de voyage Urban
 sketchers à Clermont-Ferrand
 14 et 15 novembre (réservation
 hôtel, transport et nourriture à la
 charge de l’adhérent)            </td>
            <td>
                Week-end croquis de 3 jours
 23, 24 et 25 mai
 destination en réflexion
 (reservation transport, hôtel et
 nourriture à la charge de chaque
 adhérent)
            </td>
            <td>
               une journée croquis de fin
 d’année 8 juillet
 destination à prévoir
            </td>
          </tr>
        </tbody>
      </table>

    </div>

    <div className="accueil_pdf">
      <h1><a href={plaquette_2026}>Télécharger la plaquette de la saison</a></h1>
    </div>

    <div className="stats-banner">
                    <h1>Quelques informations sur nous :</h1>
                  
                    <div className="stats-banner__grid">
                      <div data-aos="fade-down" data-aos-duration="500" className="stat-item">
                        <h2>+3 ans</h2>
                        <p><strong>D'expérience</strong></p>
                      </div>
                      <div data-aos="fade-down" data-aos-duration="1000" className="stat-item">
                        <h2>Une trentaine</h2>
                        <p><strong>D'adhérents</strong></p>
                      </div>
                      <div data-aos="fade-down" data-aos-duration="2000" className="stat-item">
                        <h2>Plusieurs</h2>
                        <p><strong>Sorties et évenements par années</strong></p>
                      </div>
                    </div>
                  </div>

    <div className="accueil-tarifs">
      <h2>Tarifs atelier : 160€</h2>
      <h2>Frais d'inscription : 15 euros</h2>
    </div>
    
  </section>
);

export default Accueil;

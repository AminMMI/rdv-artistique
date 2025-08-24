import "../styles/Adultes.scss";
import EnfantPortrait from '../components/EnfantPortrait';
import Rosas from '../components/Rosas';
import inscription from "../assets/pdf/inscription_enfants_2025_26.pdf";
import photo1 from '../assets/images/photo_enfant1.jpg';
import photo2 from '../assets/images/photo_enfant2.jpg';
import photo3 from '../assets/images/photo_enfant3.jpg';




const images = [photo1, photo2, photo3];
const COUNT = images.length;


const AteliersEnfants = () => (
 <section className="atelier-section">
<div className="pdf-container">
  <iframe
    src={inscription}
    title="Inscription PDF"
  />
  <p>
    <a href={inscription} target="_blank" rel="noopener noreferrer">
      Télécharger ou voir le PDF
    </a>
  </p>
</div>




  <div className="galerie">
  <h1>Nos réalisations</h1>
    <div className="container">
      {Array.from({ length: COUNT }, (_, i) => (
        <img
          key={i}
          src={images[i]} 
          alt={`Photo de dessin ${i + 1}`}
          width={250}
          height={250}
          style={{ objectFit: 'cover', margin: '10px', borderRadius: '8px' }}
        />
      ))}
    </div>
        <EnfantPortrait />
       
  </div>
          <Rosas />
  </section>

);

export default AteliersEnfants;

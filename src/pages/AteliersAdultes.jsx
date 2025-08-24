import "../styles/Adultes.scss";
import inscription from "../assets/pdf/bulletinsept2025-26_seul.pdf";
import photo1 from '../assets/images/photo_dessin1.jpg';
import photo2 from '../assets/images/photo_dessin2.jpg';
import photo3 from '../assets/images/photo_dessin3.jpg';
import photo4 from '../assets/images/photo_dessin4.jpg';
    import GalerieAdulte from '../components/GalerieAdulte';
    import Rosas from '../components/Rosas';

    import fresque from '../assets/images/fresque.jpg';



const images = [photo1, photo2, photo3, photo4];
const COUNT = images.length;


const AteliersAdultes = () => {
  return (
    <section className="atelier-section">
<h1 className="atelier-title">Ateliers de dessin pour adultes – Mercredi matin à Coubron</h1>
      
      <div>
      <embed
        src={inscription}
        width="100%"
        height="600px"
        style={{ border: "1px solid #ccc" }}
        title="Inscription PDF"
      />
     
    </div>

  <div className="galerie">
  <h1>Nos réalisations</h1>
  <div className="container">
    {Array.from({ length: COUNT }, (_, i) => (
      <img
        key={i}
        src={images[i]} // ✅ correction ici
        alt={`Photo de dessin ${i + 1}`}
        width={250}
        height={250}
        style={{ objectFit: 'cover', margin: '10px', borderRadius: '8px' }}
      />
    ))}
  </div>
        <GalerieAdulte/>
         <div class="fresque">
          <img class="fresque__image" src={fresque} alt=""></img>
          <p   class="fresque__text">Fresque réalisé pour les JO 2025</p>
        </div>
</div>
        <Rosas />
    </section>
  );
};

export default AteliersAdultes;

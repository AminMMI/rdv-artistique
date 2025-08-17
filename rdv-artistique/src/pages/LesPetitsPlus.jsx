import "../styles/PetitPlus.scss";

    import GalerieSortie from '../components/GalerieSortie';


const LesPetitsPlus = () => (
  <section>
    <h1>Les Petits Plus</h1>
    
    <div className="petit-plus">
      <h2>Chez Rendez vous Artistique, c'est pas que du dessin... Nous faisons des sorties tous ensemble ! Plongez dans les souvenirs de nos dernière sorties de l'an passé..</h2>

      <GalerieSortie />

    </div>



  </section>
);

export default LesPetitsPlus;

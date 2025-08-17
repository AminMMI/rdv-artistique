import React, { useState } from 'react';
import photo1 from '../assets/images/photo_adulte1.jpg';
import photo2 from '../assets/images/photo_adulte2.jpg';
import photo3 from '../assets/images/photo_adulte3.jpg';
import '../styles/GalerieSortie.scss';

const GalerieSortie = () => {
  const images = [
    { src: photo1, caption: "Tableau de couleur" },
    { src: photo2, caption: "Exemple de tableau que nous réalisons" },
    { src: photo3, caption: "Croquis d'une paire de chaussure" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="galerie-react">
      <div className="galerie__main">
                <p className="galerie__caption">{images[selectedIndex].caption}</p>

        <img
          src={images[selectedIndex].src}
          alt={`Dessin ${selectedIndex + 1}`}
        />
      </div>

      <div className="galerie__thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Miniature ${index + 1}`}
            className={selectedIndex === index ? 'active' : ''}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default GalerieSortie;

import React, { useState } from 'react';
import photo1 from '../assets/images/photo_sortie1.jpg';
import photo2 from '../assets/images/photo_sortie2.jpg';
import photo3 from '../assets/images/photo_sortie3.jpg';
import photo4 from '../assets/images/photo_sortie4.jpg';
import '../styles/GalerieSortie.scss';

const GalerieSortie = () => {
  const images = [
    { src: photo1, caption: "Dessiner la nature en étant proche d'elle" },
    { src: photo2, caption: "Étude de modèle vivant" },
    { src: photo3, caption: "Exploration de la transparence" },
    { src: photo4, caption: "Travail à l’encre végétale" }
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

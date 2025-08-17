import React from 'react';
import '../styles/EnfantPortrait.scss';

import img1 from '../assets/images/enfant_portrait1.jpg';
import img2 from '../assets/images/enfant_portrait2.jpg';
import img3 from '../assets/images/enfant_portrait3.jpg';
import img4 from '../assets/images/enfant_portrait4.jpg';
import img5 from '../assets/images/enfant_portrait5.jpg';

const images = [img1, img2, img3, img4, img5];

const EnfantPortrait = () => {
  return (
    <div className="enfant-portrait-container">
      <ul className="enfant-portrait-list">
        {images.map((img, index) => (
          <li className="enfant-portrait-li" key={index}>
            <a href={img} target="_blank" rel="noopener noreferrer">
              <img src={img} alt={`Portrait enfant ${index + 1}`} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnfantPortrait;

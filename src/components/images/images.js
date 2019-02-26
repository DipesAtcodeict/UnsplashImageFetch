import React from 'react';
import './images.css';

const Images = ({image1,image2,image3,image4,des1,des2,des3,des4}) => {
    return (
        <div className="images">

          <div className="image-container">
            <img src={image1} height="350rem" width="400rem" alt="test" />
            <div className="description">{des1}</div>
          </div>

          <div className="image-container">
            <img src={image2} height="350rem" width="400rem" alt="test" />
            <div className="description">{des2}</div>
          </div>

          <div className="image-container">
            <img src={image3} height="350rem" width="400rem" alt="test" />
            <div className="description">{des3}</div>
          </div>

          <div className="image-container">
            <img src={image4} height="350rem" width="400rem" alt="test" />
            <div className="description">{des4}</div>
          </div>
          
          
        </div>
    );
};

export default Images;
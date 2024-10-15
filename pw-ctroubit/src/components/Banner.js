import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.JPG";
import img8 from "../images/img8.jpg";

import "./Banner.css";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
const Banner = ({theme}) => {
  return (
    <div className={`Home ${theme}-theme`}>
      <div className="banner-wrapper">
        <div className="wrapper">
          <div className="images">
            {images.map((image, index) => (
              <div className="image">
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={`imagestuff ${theme}-theme`}
                />
              </div>
            ))}
          </div>
          <div className="images">
            {images.map((image, index) => (
              <div className="image">
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="imagestuff"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

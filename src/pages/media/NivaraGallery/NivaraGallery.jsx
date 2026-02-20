import React from "react";
import "./NivaraGallery.css";

/* Banner */
import home from "../../../assets/images/home.jpg";

/* Gallery Images */
import slide1 from "../../../assets/images/slide1.jpg";
import slide2 from "../../../assets/images/slide2.jpg";
import slide3 from "../../../assets/images/slide3.jpg";
import slide4 from "../../../assets/images/slide4.jpg";
import home5 from "../../../assets/images/home.jpg";
import slide6 from "../../../assets/images/slide6.jpg";

const galleryImages = [slide1, slide2, slide3, slide4, home5, slide6];

const NivaraGallery = () => {
  return (
    <div className="gallery-page">

      {/* Banner */}
      <div className="gallery-banner">
        <img src={home} alt="Nivara Gallery" />
        <h1 className="gallery-title">Nivara Gallery</h1>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-container">
        {galleryImages.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default NivaraGallery;

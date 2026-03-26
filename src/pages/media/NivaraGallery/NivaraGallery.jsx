import React, { useState } from "react";
import "./NivaraGallery.css";
import { FaTimes } from "react-icons/fa";

/* Banner */
import home2 from "../../../assets/images/home2.png";

/* Gallery Images */
import slide1 from "../../../assets/images/slide1.jpg";
import slide2 from "../../../assets/images/slide2.jpg";
import slide3 from "../../../assets/images/slide3.jpg";
import slide4 from "../../../assets/images/slide4.jpg";
import home5 from "../../../assets/images/home.jpg";
import slide6 from "../../../assets/images/slide6.jpg";

const galleryImages = [slide1, slide2, slide3, slide4, home5, slide6];

const NivaraGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-page">

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <span className="gallery-modal-close" onClick={() => setSelectedImage(null)}>
            <FaTimes />
          </span>
          <img 
            src={selectedImage} 
            alt="Enlarged gallery view" 
            className="gallery-modal-content" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      {/* Banner */}
      <div className="gallery-banner animate-pop-up">
        <img src={home2} alt="Nivara Gallery" />
        <h1 className="gallery-title animate-pop-up">Nivara Gallery</h1>
      </div>

      {/* Section 1 */}
      <div className="gallery-section animate-pop-up">
        <div className="gallery-section-header animate-pop-up">
          <h2>CSR Activity- General Medical Camp, Kolar, KA</h2>
          <p>January 2026</p>
        </div>
        <div className="gallery-container animate-pop-up">
          {galleryImages.map((img, index) => (
            <div className="gallery-card animate-pop-up" key={index} onClick={() => setSelectedImage(img)}>
              <img src={img} alt={`gallery-csr-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div className="gallery-section animate-pop-up">
        <div className="gallery-section-header animate-pop-up">
          <h2>10th Anniversary</h2>
          <p>October 2025</p>
        </div>
        <div className="gallery-container animate-pop-up">
          {galleryImages.map((img, index) => (
            <div className="gallery-card animate-pop-up" key={index} onClick={() => setSelectedImage(img)}>
              <img src={img} alt={`gallery-anniversary-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <div className="gallery-section animate-pop-up">
        <div className="gallery-section-header animate-pop-up">
          <h2>Nivara Navaratri Celebration</h2>
          <p>September 2025</p>
        </div>
        <div className="gallery-container animate-pop-up">
          {galleryImages.map((img, index) => (
            <div className="gallery-card animate-pop-up" key={index} onClick={() => setSelectedImage(img)}>
              <img src={img} alt={`gallery-navaratri-${index}`} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default NivaraGallery;

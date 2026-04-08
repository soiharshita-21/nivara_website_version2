import React, { useState } from "react";
import "./NivaraGallery.css";
import { FaTimes } from "react-icons/fa";

/* Banner */
import home2 from "../../../assets/images/home2.png";

/* CSR Gallery Images */
import csr1 from "../../../assets/images/gallery/csr_medical_1.png";
import csr2 from "../../../assets/images/gallery/csr_medical_2.png";
import csr3 from "../../../assets/images/gallery/csr_medical_3.png";

/* Anniversary Gallery Images */
import anniversary1 from "../../../assets/images/gallery/anniversary_1.png";
import anniversary2 from "../../../assets/images/gallery/anniversary_2.png";
import anniversary3 from "../../../assets/images/gallery/anniversary_3.png";

/* Existing Gallery Images for fallback or Navaratri */
import nav1 from "../../../assets/images/navratri1.jpeg";
import nav2 from "../../../assets/images/navratri2.jpeg";
import nav3 from "../../../assets/images/navratri3.jpeg";

const csrImages = [csr1, csr2, csr3];
const anniversaryImages = [anniversary1, anniversary2, anniversary3];
const navaratriImages = [nav1, nav2, nav3, nav2, nav1, nav3];

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
          {csrImages.map((img, index) => (
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
          {anniversaryImages.map((img, index) => (
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
          {navaratriImages.map((img, index) => (
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

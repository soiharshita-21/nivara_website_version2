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

export const csrImages = [csr1, csr2, csr3];
export const anniversaryImages = [anniversary1, anniversary2, anniversary3];
export const navaratriImages = [nav1, nav2, nav3, nav2, nav1, nav3];


const NivaraGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryData, setGalleryData] = useState([]);

  React.useEffect(() => {
    let saved = JSON.parse(localStorage.getItem("nivara_gallery"));
    if (!saved || saved.length === 0) {
      // Fallback
      const defaults = [
        ...csrImages.map(img => ({ category: "CSR", image: img, title: "Medical Camp" })),
        ...anniversaryImages.map(img => ({ category: "Anniversary", image: img, title: "10th Anniversary" })),
        ...navaratriImages.map(img => ({ category: "Navaratri", image: img, title: "Celebration" }))
      ];
      setGalleryData(defaults);
    } else {
      setGalleryData(saved);
    }
  }, []);

  const renderSection = (category, title, subtitle) => {
    const images = galleryData.filter(img => img.category === category);
    if (images.length === 0) return null;

    return (
      <div className="gallery-section animate-pop-up">
        <div className="gallery-section-header animate-pop-up">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="gallery-container animate-pop-up">
          {images.map((imgObj, index) => (
            <div className="gallery-card animate-pop-up" key={index} onClick={() => setSelectedImage(imgObj.image)}>
              <img src={imgObj.image} alt={imgObj.title || `${category}-${index}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };

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

      {renderSection("CSR", "CSR Activity- General Medical Camp, Kolar, KA", "January 2026")}
      {renderSection("Anniversary", "10th Anniversary", "October 2025")}
      {renderSection("Navaratri", "Nivara Navaratri Celebration", "September 2025")}
      {renderSection("Other", "Other Highlights", "Gallery Updates")}

    </div>
  );
};

export default NivaraGallery;


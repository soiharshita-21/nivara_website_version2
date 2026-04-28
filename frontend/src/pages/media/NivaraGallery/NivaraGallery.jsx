import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NivaraGallery.css";
import { FaTimes, FaArrowLeft } from "react-icons/fa";

/* Banner */
import home2 from "../../../assets/images/nivaragallery.png";

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
  const [selectedFolder, setSelectedFolder] = useState(null);

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

  const defaultCategoriesMap = {
    "CSR": { title: "CSR Activity- General Medical Camp, Kolar, KA", subtitle: "January 2026" },
    "Anniversary": { title: "10th Anniversary", subtitle: "October 2025" },
    "Navaratri": { title: "Nivara Navaratri Celebration", subtitle: "September 2025" },
    "Other": { title: "Other Highlights", subtitle: "Gallery Updates" }
  };

  const getCatInfo = (cat) => defaultCategoriesMap[cat] || { title: cat, subtitle: "Gallery Updates" };
  const categories = [...new Set(galleryData.map(item => item.category))];

  const renderSection = (category) => {
    const images = galleryData.filter(img => img.category === category);
    if (images.length === 0) return null;
    const info = getCatInfo(category);

    return (
      <div className="gallery-section">
        <div className="gallery-section-header">
          <h2>{info.title}</h2>
          <p>{info.subtitle}</p>
        </div>
        <div className="gallery-container">
          {images.map((imgObj, index) => (
            <div className="gallery-card" key={index} onClick={() => setSelectedImage(imgObj.image)}>
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
      <div className="gallery-banner">
        <img src={home2} alt="Nivara Gallery" />

        <div className="gallery-breadcrumb">
          <Link to="/">Nivara Home</Link>
          <span className="gallery-separator">&gt;</span>
          <span className="gallery-current">Nivara Gallery</span>
        </div>

        {/* <h1 className="gallery-title">Nivara Gallery</h1> */}
      </div>

      {selectedFolder ? (
        <div className="folder-open-view">
          <div className="back-btn-container">
            <button className="back-btn" onClick={() => setSelectedFolder(null)}>
              <FaArrowLeft /> Back to Folders
            </button>
          </div>
          {renderSection(selectedFolder)}
        </div>
      ) : (
        <div className="folder-grid">
          {categories.map((catName) => {
            const catImages = galleryData.filter(img => img.category === catName);
            if (catImages.length === 0) return null;
            const info = getCatInfo(catName);
            return (
              <div className="folder-card" key={catName} onClick={() => setSelectedFolder(catName)}>
                <div className="folder-icon">
                  <div className="folder-back"></div>
                  <img className="folder-preview-img" src={catImages[0].image} alt={catName} />
                  <div className="folder-front"></div>
                </div>
                <div className="folder-info">
                  <h3>{info.title}</h3>
                  <p>{info.subtitle} • {catImages.length} Photos</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default NivaraGallery;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NivaraGallery.css";
import { FaTimes, FaArrowLeft } from "react-icons/fa";

/* Banner */
import media2 from "../../../assets/images/media2.png";

// Dynamically import all images from the specified folders
const csrImagesGlob = import.meta.glob("../../../assets/images/CSR/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true });
const anniversaryImagesGlob = import.meta.glob("../../../assets/images/Anniversary 10/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true });
const navaratriImagesGlob = import.meta.glob("../../../assets/images/Navaratri/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true });
const fireMockDrillImagesGlob = import.meta.glob("../../../assets/images/Fire mock dril/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true });

export const csrImages = Object.values(csrImagesGlob).map(mod => mod.default);
export const anniversaryImages = Object.values(anniversaryImagesGlob).map(mod => mod.default);
export const navaratriImages = Object.values(navaratriImagesGlob).map(mod => mod.default);
export const fireMockDrillImages = Object.values(fireMockDrillImagesGlob).map(mod => mod.default);

const NivaraGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);

  React.useEffect(() => {
    let saved = JSON.parse(localStorage.getItem("nivara_gallery"));
    // If no saved data, or if we want to ensure the new images are loaded, use defaults
    // For this update, we will use the defaults to show the new folder structure
    if (!saved || saved.length === 0) {
      const defaults = [
        ...csrImages.map(img => ({ category: "CSR", image: img, title: "Medical Camp" })),
        ...anniversaryImages.map(img => ({ category: "Anniversary", image: img, title: "10th Anniversary" })),
        ...navaratriImages.map(img => ({ category: "Navaratri", image: img, title: "Celebration" })),
        ...fireMockDrillImages.map(img => ({ category: "Fire Mock Drill", image: img, title: "Fire Safety Training" }))
      ];
      setGalleryData(defaults);
    } else {
      setGalleryData(saved);
    }
  }, []);

  const defaultCategoriesMap = {
    "CSR": { title: "CSR Activity- General Medical Camp, Kolar, KA", subtitle: "January 2026" },
    "Anniversary": { title: "10th Anniversary Celebration", subtitle: "October 2025" },
    "Navaratri": { title: "Nivara Navaratri Celebration", subtitle: "September 2025" },
    "Fire Mock Drill": { title: "Fire Mock Drill & Safety Training", subtitle: "January 2026" },
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
      <section className="page-banner" style={{ backgroundImage: `url(${media2})` }}>
        <div className="page-banner-overlay"></div>
        <div className="page-banner-content">
          <h1 className="page-banner-title">
            Nivara <span className="text-red">Gallery</span>
          </h1>
          <p className="page-banner-subtitle">
            A glimpse into our impactful journey and community initiatives.
          </p>
        </div>
      </section>

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
                  <img className="folder-preview-img" src={catImages[catImages.length - 1].image} alt={catName} />
                  <div className="folder-front">
                    <div className="folder-sticker">
                      <img src={catImages[catImages.length - 1].image} alt="latest" />
                    </div>
                  </div>
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

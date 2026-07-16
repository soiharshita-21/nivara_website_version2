import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NivaraGallery.css";
import { FaTimes, FaArrowLeft } from "react-icons/fa";

/* Banner */
import media2 from "../../../assets/images/media2.png";

const NivaraGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/gallery`);
        setGalleryItems(res.data);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const folderDisplayNames = {
    "CSR": "CSR",
    "Anniversary": "Anniversary",
    "Navaratri": "Navaratri",
    "Fire Mock Drill": "Fire Mock Drill"
  };

  // Process data into folders grouped by category (Folder Name)
  const foldersMap = {};
  galleryItems.forEach((item) => {
    const catName = item.category || "General";
    if (!foldersMap[catName]) {
      foldersMap[catName] = {
        title: catName,
        subtitle: item.folder_date || "Gallery Updates",
        images: [],
        latestImage: null,
        secondLatestImage: null,
      };
    }
    foldersMap[catName].images.push(item);
  });

  // Sort images descending by ID and assign cover vs preview images
  Object.values(foldersMap).forEach((folder) => {
    folder.images.sort((a, b) => b.id - a.id);
    folder.latestImage = folder.images[0]?.image_url || "";
    folder.secondLatestImage = folder.images[1]?.image_url || folder.latestImage;
  });

  // Convert map to array and sort so folders with the newest items are shown first
  const folders = Object.values(foldersMap).sort((a, b) => {
    const maxIdA = a.images[0]?.id || 0;
    const maxIdB = b.images[0]?.id || 0;
    return maxIdB - maxIdA;
  });

  const renderSection = (folder) => {
    if (!folder || folder.images.length === 0) return null;

    return (
      <div className="gallery-section">
        <div className="gallery-section-header">
          <h2>{folderDisplayNames[folder.title] || folder.title}</h2>
          <p>{folder.subtitle}</p>
        </div>
        <div className="gallery-container">
          {folder.images.map((imgObj, index) => (
            <div className="gallery-card" key={imgObj.id || index} onClick={() => setSelectedImage(imgObj.image_url)}>
              <img src={imgObj.image_url} alt={imgObj.alt_text || `${folder.title}-${index}`} />
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

      {loading ? (
        <div className="loading-container" style={{ textAlign: "center", padding: "80px 20px" }}>
          <p style={{ fontSize: "1.3rem", color: "#211F1F" }}>Loading Nivara Gallery...</p>
        </div>
      ) : selectedFolder ? (
        <div className="folder-open-view">
          <div className="back-btn-container">
            <button className="back-btn" onClick={() => setSelectedFolder(null)}>
              <FaArrowLeft /> Back to Folders
            </button>
          </div>
          {renderSection(foldersMap[selectedFolder])}
        </div>
      ) : (
        <div className="folder-grid">
          {folders.map((folder) => {
            return (
              <div className="folder-card" key={folder.title} onClick={() => setSelectedFolder(folder.title)}>
                <div className="folder-icon">
                  <div className="folder-back"></div>
                  <img className="folder-preview-img" src={folder.secondLatestImage} alt={folder.title} />
                  <div className="folder-front">
                    <div className="folder-sticker">
                      <img src={folder.latestImage} alt="latest" />
                    </div>
                  </div>
                </div>
                <div className="folder-info">
                  <h3>{folderDisplayNames[folder.title] || folder.title}</h3>
                  <p>{folder.subtitle} • {folder.images.length} Photos</p>
                </div>
              </div>
            );
          })}
          {folders.length === 0 && (
            <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "80px 20px" }}>
              <p style={{ color: "#211F1F", fontSize: "1.2rem" }}>No folders found in the gallery.</p>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default NivaraGallery;

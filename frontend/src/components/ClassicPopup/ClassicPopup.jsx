import { useState, useEffect } from "react";
import axios from "axios";
import { X, ExternalLink } from "lucide-react";
import "./ClassicPopup.css";

const ClassicPopup = () => {
  const [popup, setPopup] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchActivePopup = async () => {
      try {
        const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/api`;
        const res = await axios.get(`${baseUrl}/popups/active`);
        if (res.data && res.data.length > 0) {
          const activePopup = res.data[0]; // Get the most recent active popup
          
          // Check if user has already closed this specific popup in the current session/storage
          const isClosed = localStorage.getItem(`nivara_popup_closed_${activePopup.id}`);
          if (!isClosed) {
            setPopup(activePopup);
            // Delay popup opening slightly for a smoother, premium entry animation
            setTimeout(() => {
              setIsOpen(true);
            }, 800);
          }
        }
      } catch (err) {
        console.error("Failed to fetch active popups:", err);
      }
    };

    fetchActivePopup();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (popup) {
      // Remember closed status for this popup ID
      localStorage.setItem(`nivara_popup_closed_${popup.id}`, "true");
    }
  };

  if (!popup || !isOpen) return null;

  return (
    <div className="classic-popup-overlay" onClick={handleClose}>
      <div className="classic-popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="classic-popup-close" onClick={handleClose} aria-label="Close Announcement">
          <X size={20} />
        </button>
        
        <div className="classic-popup-content">
          {popup.image_url && (
            <div className="classic-popup-image-wrapper">
              <img src={popup.image_url} alt={popup.title} className="classic-popup-image" />
            </div>
          )}
          
          <div className="classic-popup-details">
            <h2 className="classic-popup-title">{popup.title}</h2>
            <div className="classic-popup-divider"></div>
            <p className="classic-popup-message">{popup.message}</p>
            
            {popup.link_url && (
              <div className="classic-popup-action">
                <a 
                  href={popup.link_url} 
                  target={popup.link_url.startsWith("http") ? "_blank" : "_self"} 
                  rel="noopener noreferrer" 
                  className="classic-popup-btn"
                  onClick={handleClose}
                >
                  {popup.link_text || "Learn More"}
                  {popup.link_url.startsWith("http") && <ExternalLink size={14} style={{ marginLeft: '6px' }} />}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicPopup;

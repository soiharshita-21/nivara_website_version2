import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './IsoBanner.css';
import isoBan3 from "../../assets/images/isoban3.png"; // Fallback if image exists here

const IsoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [renderComponent, setRenderComponent] = useState(true);
  const [windowDim, setWindowDim] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    // Show banner after a slight delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const handleResize = () => setWindowDim({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setRenderComponent(false);
    }, 400); // match transition duration
  };

  if (!renderComponent) return null;

  return (
    <>
      {isVisible && (
        <Confetti
          width={windowDim.width}
          height={windowDim.height}
          style={{ zIndex: 100000, position: 'fixed', top: 0, left: 0 }}
          recycle={false}
          numberOfPieces={450}
          gravity={0.15}
        />
      )}
      <div className={`iso-banner-overlay ${isVisible ? 'open' : ''}`}>
      <div className="iso-banner-content">
        <button className="iso-close-btn" onClick={handleClose}>
          &times;
        </button>
        <div className="iso-badge-container">
          {/* Using a standard generic alt/title image until the correct path is verified */}
          <img 
            src={isoBan3}
            onError={(e) => {
              // fallback if image not in public folder
              e.target.onerror = null; 
              e.target.style.display = 'none'; 
            }} 
            alt="ISO 27001:2022 Certified" 
            className="iso-badge-img" 
          />
        </div>
        <h2 className="iso-title">We&apos;re ISO 27001:2022 Certified!</h2>
        <p className="iso-text">
          Nivara has officially been awarded the <strong>ISO/IEC 27001:2022</strong> certification for our <strong>Information Security Management System.</strong> This milestone highlights our commitment to top-tier information security and trust.
        </p>
      </div>
    </div>
    </>
  );
};

export default IsoBanner;

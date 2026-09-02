import { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowRight, Bell, ExternalLink, ShieldCheck, Sparkles, X } from 'lucide-react';
import Confetti from 'react-confetti';
import './IsoBanner.css';
import isoBan3 from "../../assets/images/isoban3.png";

const fallbackAnnouncement = {
  id: "iso-certification",
  title: "We're ISO 27001:2022 Certified!",
  message:
    "Nivara has officially been awarded the ISO/IEC 27001:2022 certification for our Information Security Management System. This milestone highlights our commitment to top-tier information security and trust.",
  image_url: isoBan3,
  link_url: "",
  link_text: ""
};

const IsoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [announcement, setAnnouncement] = useState(null);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [recycleConfetti, setRecycleConfetti] = useState(true);

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []);

  useEffect(() => {
    let timer;
    let isMounted = true;

    const loadAnnouncement = async () => {
      try {
        const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/api`;
        const res = await axios.get(`${baseUrl}/popups/active`);
        const activePopup = res.data?.[0];
        const nextAnnouncement = activePopup || fallbackAnnouncement;

        if (!isMounted) return;

        setAnnouncement(nextAnnouncement);
        timer = setTimeout(() => setIsVisible(true), 450);
      } catch (err) {
        if (!isMounted) return;

        console.error("Failed to fetch active popups:", err);
        setAnnouncement(fallbackAnnouncement);
        timer = setTimeout(() => setIsVisible(true), 450);
      }
    };

    loadAnnouncement();

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (announcement) {
      setTimeout(() => {
        setAnnouncement(null);
        setRecycleConfetti(true);
      }, 260);
    }
  };

  const popupTitle = announcement?.title?.trim() || "Nivara Announcement";
  const popupMessage = announcement?.message?.trim() || "Stay connected with the latest update from Nivara Housing Finance.";
  const popupLink = announcement?.link_url?.trim() || "";
  const hasImage = Boolean(announcement?.image_url);
  const hasLink = Boolean(popupLink);
  const isExternalLink = hasLink && popupLink.startsWith("http");

  // Detect if it is a festive announcement (e.g. Diwali)
  const isFestive =
    announcement && (
    /diwali|deepwali|deepawali|festival|celebration|festive|anniversary|congratulations/i.test(popupTitle) ||
    /diwali|deepwali|deepawali|festival|celebration|festive|anniversary|congratulations/i.test(popupMessage)
    );

  // For non-festive popups, stop raining confetti after 5 seconds
  useEffect(() => {
    if (isVisible) {
      if (!isFestive) {
        const timer = setTimeout(() => {
          setRecycleConfetti(false);
        }, 5000);
        return () => clearTimeout(timer);
      } else {
        setRecycleConfetti(true);
      }
    }
  }, [isVisible, isFestive]);

  if (!announcement) return null;

  return (
    <>
      {isVisible && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          numberOfPieces={isFestive ? 150 : 60}
          recycle={recycleConfetti}
          style={{ position: 'fixed', pointerEvents: 'none', zIndex: 100000 }}
        />
      )}
      <div
        className={`iso-banner-overlay ${isVisible ? 'open' : ''}`}
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="nivara-announcement-title"
      >
        <div className={`iso-banner-content ${isFestive ? 'festive-theme' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="iso-accent-strip" aria-hidden="true"></div>
          <button className="iso-close-btn" onClick={handleClose} aria-label="Close announcement">
            <X size={20} />
          </button>

          <div className="iso-media-panel">
            <div className="iso-media-frame">
              {hasImage ? (
                <img
                  src={announcement.image_url}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                  alt={popupTitle}
                  className="iso-badge-img"
                />
              ) : (
                <div className="iso-icon-mark">
                  {isFestive ? (
                    <svg viewBox="0 0 64 64" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg" className="diya-svg">
                      <path d="M32 6C32 6 39 20 39 27C39 33 35.5 36 32 36C28.5 36 25 33 25 27C25 20 32 6 32 6Z" fill="url(#flameGrad)" />
                      <path d="M32 12C32 12 36 22 36 27C36 30 34 32 32 32C30 32 28 30 28 27C28 22 32 12 32 12Z" fill="#FFF" opacity="0.8" />
                      <path d="M8 38C8 38 8 56 32 56C56 56 56 38 56 38C56 38 46 45 32 45C18 45 8 38 8 38Z" fill="#D4AF37" />
                      <path d="M8 38C18 45 46 45 56 38C56 38 51 52 32 52C13 52 8 38 8 38Z" fill="#A87900" />
                      <circle cx="32" cy="48" r="3.5" fill="#FFF" />
                      <circle cx="22" cy="45.5" r="2.5" fill="#FFF" />
                      <circle cx="42" cy="45.5" r="2.5" fill="#FFF" />
                      <defs>
                        <linearGradient id="flameGrad" x1="32" y1="6" x2="32" y2="36" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stop-color="#FF4E50" />
                          <stop offset="60%" stop-color="#F9D423" />
                          <stop offset="100%" stop-color="#FFD700" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ) : (
                    <Bell size={42} />
                  )}
                </div>
              )}
            </div>
            <div className="iso-media-caption">
              <Sparkles size={15} />
              <span>{isFestive ? "Festival Greetings" : "Fresh from Nivara"}</span>
            </div>
          </div>

          <div className="iso-copy-panel">
            <div className="iso-kicker">
              <ShieldCheck size={16} />
              <span>{isFestive ? "Special Announcement" : "Nivara Announcement"}</span>
            </div>
            <h2 className="iso-title" id="nivara-announcement-title">{popupTitle}</h2>
            <p className="iso-text">{popupMessage}</p>
            {hasLink && (
              <a
                href={popupLink}
                target={isExternalLink ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="iso-action-btn"
                onClick={handleClose}
              >
                {announcement.link_text || "Learn More"}
                {isExternalLink ? <ExternalLink size={15} /> : <ArrowRight size={15} />}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IsoBanner;

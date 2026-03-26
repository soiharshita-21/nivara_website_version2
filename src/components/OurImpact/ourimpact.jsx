import React, { useEffect, useState, useRef } from "react";
import "./ourimpact.css";
import { FaChartLine, FaBuilding, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

const AnimatedNumber = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out Expo effect
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easing * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  // Format with Indian numbering system
  const formattedCount = new Intl.NumberFormat("en-IN").format(count);
  return <span ref={nodeRef}>{formattedCount}{suffix}</span>;
};

const OurImpact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".animate-pop-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <section className="impact-section">
      <span className="spa animate-pop-up" style={{transitionDelay: "0.1s"}}>✦</span>
      <h6 className="impact-heading animate-pop-up" style={{transitionDelay: "0.2s"}}>Our Impact</h6>  
       <span className="spa animate-pop-up" style={{transitionDelay: "0.1s"}}>✦</span>
      <h2 className="impact-title animate-pop-up" style={{transitionDelay: "0.3s"}}>Building Dreams Across India</h2>
      <p className="impact-subtitle animate-pop-up" style={{transitionDelay: "0.4s"}}>
        Transforming lives and empowering communities with accessible and
        affordable housing finance solutions
      </p>

      <div className="impact-cards">
        <div className="impact-card pink animate-pop-up" style={{transitionDelay: "0.2s"}}>
          <div className="impact-icon">
            <FaChartLine />
          </div>
          <h3><AnimatedNumber end={50000} suffix="+" /></h3>
          <p>Loans Disbursed</p>
           
        </div>

        <div className="impact-card red animate-pop-up" style={{transitionDelay: "0.3s"}}>
          <div className="impact-icon">
            <FaBuilding />
          </div>
          <h3><AnimatedNumber end={150} suffix="+" /></h3>
          <p>Branches</p>
        </div>

        <div className="impact-card teal animate-pop-up" style={{transitionDelay: "0.4s"}}>
          <div className="impact-icon">
            <FaMapMarkerAlt />
          </div>
          <h3><AnimatedNumber end={12} /></h3>
          <p>States Covered</p>
        </div>

        <div className="impact-card yellow animate-pop-up" style={{transitionDelay: "0.5s"}}>
          <div className="impact-icon">
            <FaHeart />
          </div>
          <h3><AnimatedNumber end={98} suffix="%" /></h3>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </section> 
  );
};

export default OurImpact;

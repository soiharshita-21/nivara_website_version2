import React, { useState, useEffect, useRef } from "react";
import "./ourimpact.css";
import { FaChartLine, FaBuilding, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

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
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easing * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  const formattedCount = new Intl.NumberFormat("en-IN").format(count);
  return <span ref={nodeRef}>{formattedCount}{suffix}</span>;
};

const OurImpact = () => {
  return (
    <section className="impact-section">
      <ScrollReveal direction="down">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="spa">✦</span>
          <h6 className="impact-heading">Our Impact</h6>  
          <span className="spa">✦</span>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="impact-title">Building Dreams Across India</h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.2}>
        <p className="impact-subtitle">
          Transforming lives and empowering communities with accessible and
          affordable housing finance solutions
        </p>
      </ScrollReveal>

      <div className="impact-cards">
        {[
          { color: "pink", icon: <FaChartLine />, end: 12000, suffix: "+", label: "Loans Disbursed" },
          { color: "red", icon: <FaBuilding />, end: 100, suffix: "+", label: "Branches" },
          { color: "teal", icon: <FaMapMarkerAlt />, end: 5, suffix: "", label: "States Covered" },
          { color: "yellow", icon: <FaHeart />, end: 98, suffix: "%", label: "Customer Satisfaction" }
        ].map((item, index) => (
          <ScrollReveal 
            key={index} 
            direction="up" 
            delay={0.1 + index * 0.1} 
            distance={40}
            scale={0.9}
          >
            <div className={`impact-card ${item.color}`}>
              <div className="impact-icon">
                {item.icon}
              </div>
              <h3><AnimatedNumber end={item.end} suffix={item.suffix} /></h3>
              <p>{item.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section> 
  );
};

export default OurImpact;


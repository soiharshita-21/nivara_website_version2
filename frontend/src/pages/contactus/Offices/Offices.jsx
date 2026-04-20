import React, { useState } from "react";
import "./Offices.css";
import map from "../../../assets/images/map.jpg";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import { MapPin, Phone, Mail, Building2, ExternalLink, Clock, Navigation } from "lucide-react";

const Office = () => {
  const [hoveredOffice, setHoveredOffice] = useState(null);

  const offices = [
    {
      id: "hq",
      city: "JP Nagar, Bangalore",
      type: "Registered & Corporate Office",
      address: "BNR Complex, Sri Rama Layout, J P Nagar, 7th Phase, Bangalore - 560078",
      phone: "+91 80 2659 0000",
      email: "contact@nivarahousing.com",
      coords: { top: "45%", left: "48%" },
      details: [
        "Floor 2 & 3, BNR Complex, Opp. RBI Layout",
        "First Floor No. 51, 3rd Main Nataraja Layout"
      ]
    },
    {
      id: "puttenahalli",
      city: "Puttenahalli, Bangalore",
      type: "Branch Office",
      address: "New No. 390, Puttenahalli Main Road, JP Nagar, 7th Phase, Bangalore - 560078",
      phone: "+91 80 2659 1111",
      email: "puttenahalli@nivarahousing.com",
      coords: { top: "52%", left: "55%" },
      details: [
        "2nd & 3rd Floor, Old No. 2/45/396"
      ]
    }
  ];

  return (
    <section className="office-page">
      <div className="office-split-container">
        {/* LEFT: INFORMATION LIST */}
        <div className="office-info-pane">
          <ScrollReveal direction="down">
            <div className="office-pane-header">
              <div className="hq-badge">
                <Building2 size={16} />
                <span>Our Presence</span>
              </div>
              <h1 className="pane-title">Locate Us</h1>
              <p className="pane-subtitle">Connect with our teams at our corporate hubs and experience personalized housing finance support.</p>
            </div>
          </ScrollReveal>

          <div className="office-interactive-list">
            {offices.map((office, index) => (
              <ScrollReveal
                key={office.id}
                direction="left"
                delay={index * 0.1}
              >
                <div
                  className={`interactive-card ${hoveredOffice === office.id ? "highlight" : ""}`}
                  onMouseEnter={() => setHoveredOffice(office.id)}
                  onMouseLeave={() => setHoveredOffice(null)}
                >
                  <div className="card-top">
                    <div className="id-tag">{index + 1}</div>
                    <div className="title-group">
                      <h3>{office.city}</h3>
                      <span className="type-label">{office.type}</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="info-row">
                      <MapPin size={18} />
                      <div className="info-content">
                        <p>{office.address}</p>
                        {office.details.map((detail, idx) => (
                          <span key={idx} className="detail-subtext">{detail}</span>
                        ))}
                      </div>
                    </div>
                    <div className="info-row">
                      <Phone size={18} />
                      <p>{office.phone}</p>
                    </div>
                    <div className="info-row">
                      <Mail size={18} />
                      <p>{office.email}</p>
                    </div>
                  </div>

                  <div className="card-footer">
                    {/* <button className="nav-btn">
                      <Navigation size={16} />
                      <span>Directions</span>
                    </button> */}
                    <button className="details-btn">
                      <Clock size={16} />
                      <span>Office Hours</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="pane-footer">
            <p>Can't find an office near you?</p>
            <button className="support-link">Contact Customer Support</button>
          </div>
        </div>

        {/* RIGHT: INTERACTIVE MAP */}
        <div className="office-map-pane">
          <div className="map-wrapper shadow-xl">
            <img src={map} alt="Interactive Map" className="base-map" />
            <div className="map-overlay-layer"></div>

            {offices.map((office) => (
              <div
                key={office.id}
                className={`map-marker ${hoveredOffice === office.id ? "active" : ""}`}
                style={{ top: office.coords.top, left: office.coords.left }}
                onMouseEnter={() => setHoveredOffice(office.id)}
                onMouseLeave={() => setHoveredOffice(null)}
              >
                <div className="marker-ping"></div>
                <div className="marker-core">
                  <MapPin size={16} color="white" />
                </div>
                <div className="marker-tooltip">
                  <strong>{office.city}</strong>
                  <span>{office.type}</span>
                </div>
              </div>
            ))}

            <div className="map-controls">
              <button>+</button>
              <button>−</button>
            </div>

            <div className="map-stats">
              <div className="stat-item">
                <strong>100+</strong>
                <span>Branches</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <strong>5</strong>
                <span>States</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Office;

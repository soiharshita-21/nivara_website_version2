import React, { useMemo, useState } from "react";
import "./Offices.css";
import officeBanner from "../../../assets/images/office.png";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Clock,
  Navigation,
} from "lucide-react";

const offices = [
  {
    id: "hq",
    city: "JP Nagar, Bangalore",
    type: "Registered & Corporate Office",

    address:
      "No. 22,23,24,25/101/3, 3rd Floor, BNR Complex, Sri Rama Layout, JP Nagar, 7th Phase, Opp. RBI Layout, Bangalore, Karnataka - 560078",

    phone: "+91 80 2659 0000",

    email: "contact@nivarahousing.com",

    hours: "Mon-Sat, 9:30 AM - 6:00 PM",

    coords: { top: "26%", left: "67%" },

    details: [
      "No. 22, 23, 24, 25/101/3, 2nd Floor, BNR Complex, Sri Rama Layout, 7th Phase, Opp. RBI Layout, Bangalore - 560078",

      "First Floor No. 51, 3rd Main, Nataraja Layout, JP Nagar, 7th Phase, Bangalore - 560078",

      "Back Office: No. 22,23,24,25/101/3, 3rd Floor, BNR Complex, Sri Rama Layout, JP Nagar, 7th Phase, Opp. RBI Layout, Bengaluru, Karnataka - 560078",
    ],

    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=BNR%20Complex%20JP%20Nagar%207th%20Phase%20Bangalore",
  },

  {
    id: "puttenahalli",
    city: "Puttenahalli, Bangalore",
    type: "Branch Office",

    address:
      "New No. 390, Puttenahalli Main Road, JP Nagar, 7th Phase, Bangalore - 560078",

    phone: "+91 80 2659 1111",

    email: "puttenahalli@nivarahousing.com",

    hours: "Mon-Sat, 9:30 AM - 6:00 PM",

    coords: { top: "58%", left: "29%" },

    details: ["2nd & 3rd Floor, Old No. 2/45/396"],

    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Puttenahalli%20Main%20Road%20JP%20Nagar%207th%20Phase%20Bangalore",
  },
];

const Office = () => {
  const [activeOffice, setActiveOffice] = useState("");

  const selectedOffice = useMemo(
    () => offices.find((office) => office.id === activeOffice) || offices[0],
    [activeOffice]
  );

  return (
    <section className="office-page">
      <section
        className="page-banner office-banner"
        style={{ backgroundImage: `url(${officeBanner})` }}
      >
        <div className="page-banner-overlay" />
      </section>

      <div className="office-split-container">
        <aside className="office-info-pane">
          <ScrollReveal direction="down">
            <div className="office-pane-header">
              <div className="hq-badge">
                <Building2 size={16} />
                <span>Our Presence</span>
              </div>

              <h1 className="pane-title">
                Locate Us
              </h1>

              <p className="pane-subtitle">
                Connect with our teams at our corporate hubs and experience
                personalized housing finance support.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="down" delay={0.1}>
            <div className="map-stats-pane">
              <div className="stat-item">
                <strong>100+</strong>
                <span>Branches</span>
              </div>

              <div className="stat-divider" />

              <div className="stat-item">
                <strong>5</strong>
                <span>States</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="office-interactive-list">
            {offices.map((office, index) => (
              <ScrollReveal
                key={office.id}
                direction="left"
                delay={index * 0.1}
              >
                <article
                  className={`interactive-card ${activeOffice === office.id ? "highlight" : ""
                    }`}
                  onMouseEnter={() => setActiveOffice(office.id)}
                  onMouseLeave={() => setActiveOffice("")}
                  onFocus={() => setActiveOffice(office.id)}
                  onBlur={() => setActiveOffice("")}
                >
                  <div className="card-top">
                    <div className="id-tag">
                      {String(index + 1).padStart(2, "0")}
                    </div>

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

                        {office.details.map((detail) => (
                          <span key={detail} className="detail-subtext">
                            {detail}
                          </span>
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
                    <a
                      className="nav-btn"
                      href={office.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Navigation size={16} />
                      <span>Directions</span>
                    </a>

                    <div className="hours-pill">
                      <Clock size={16} />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="pane-footer">
            <p>Can't find an office near you?</p>

            <button type="button" className="support-link">
              Contact Customer Support
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Office;
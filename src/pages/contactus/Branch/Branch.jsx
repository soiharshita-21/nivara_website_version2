import React, { useState } from "react";
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

import "./Branch.css";
import BranchMap from "../../../components/BranchMap";

const branchesData = {
  KARNATAKA: [
    "Nagarbhavi",
    "Bagalur",
    "TC Palya",
    "Mysore",
    "Ramnagara",
    "Gottigere",
    "Anekal",
    "Nelamangala",
    "Doddabalapur",
    "Tumkur",
    "Mandya",
    "Kanakpura",
    "Hunsur",
    "Kengeri",
    "Gauribidanur",
    "Sarjapur",
    "Kunigal",
    "Chamrajnagar",
    "Kolar",
    "Hassan",
    "Sira",
    "Chikkabalapur",
    "Tiptur",
    "Thalaghattapura",
    "Srirangapatna",
    "Davanagere",
    "Malur",
    "Chitradurga",
    "Maddur",
    "Hubli",
    "Gadag",
    "Haveri",
    "Ballari",
    "Hospet",
    "Belagavi",
    "Gangavathi(Kalburgi)",
    "Gangavathi",
    "Gokak",
    "Sindhanur",
    "Chikkodi",
    "Raichur",
    "Vijayapura",
    "Ranebennur",
  ],

  "TAMIL NADU": [
    "Hosur",
    "Salem",
    "Krishnagiri",
    "Dharmapuri",
    "Tirupattur",
    "Tiruvanmalai",
    "Vellore",
    "Namakkal",
    "Erode",
    "Pollachi",
    "Tirupur",
    "Coimbatore",
    "Pochampalli",
    "Arakkonam",
  ],

  TELANGANA: [
    "Vanasthalipuram",
    "Karimnagar",
    "Warangal",
    "Khammam",
    "Siddipet",
    "Kodad",
    "Siricilla",
    "Sangareddy",
    "Nirmal",
    "Medchal",
    "Suryapet",
  ],

  "ANDHRA PRADESH": [
    "Guntur",
    "Eluru",
    "Ongole",
    "Narasaraopeta",
    "Bhimavaram",
    "Hindupur",
    "Chirala",
    "Kanuru",
    "Anantapur",
    "Adoni",
    "Tadepalligudam",
    "Tirupathi",
    "Puttur",
    "Penukonda",
    "Nuziveedu",
    "Machilipatnam",
    "Kandukur",
  ],

  MAHARASHTRA: [
    "Nasik",
    "Chinchwad",
    "Ahmednagar",
    "Aurangabad",
    "Jalgaon",
    "Dhule",
  ],
};

const Branch = () => {
  const [search, setSearch] = useState("");
  const [openState, setOpenState] = useState(null);

  const toggleState = (state) => {
    setOpenState(openState === state ? null : state);
  };

  // ✅ Filter logic INSIDE component
  const getFilteredData = () => {
    if (!search.trim()) return branchesData;

    const filtered = {};

    Object.keys(branchesData).forEach((state) => {
      const matchedCities = branchesData[state].filter((city) =>
        city.toLowerCase().includes(search.toLowerCase()),
      );

      if (matchedCities.length > 0) {
        filtered[state] = matchedCities;
      }
    });

    return filtered;
  };

  return (
    <div className="branch-page">
      {/* Header */}
      {/* Banner Section */}
      <div className="branch-banner animate-pop-up">
        <div className="banner-con animate-pop-up">
          <h1 className="animate-pop-up">NIVARA LOCATIONS</h1>

          <p>
            Our headquarters and branches span across multiple states to serve
            customers efficiently. Nivara Housing Finance continues to expand
            across India to make home loans accessible for everyone.
          </p>
        </div>
        <div className="banner-map animate-pop-up">
          <BranchMap />
        </div>
      </div>

      {/* Locator */}
      <div className="branch-locator">
        <h2 className="animate-pop-up">
          <FaMapMarkerAlt className="pin-icon" /> NIVARA BRANCH LOCATOR
        </h2>

        <input
          type="text"
          placeholder="Search branch name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      
      <div className="state-list">
        {Object.keys(getFilteredData()).map((state, index) => (
          <div className="state-wrapper" key={index}>
          
            <div className="state-card animate-pop-up" onClick={() => toggleState(state)}>
              <span>{state}</span>
              <FaChevronDown
                className={`down-icon ${openState === state ? "rotate" : ""}`}
              />
            </div>

           
            {(openState === state || search) && (
              <div className="location-grid">
                {getFilteredData()[state].map((city, i) => (
                  <div className="location-item" key={i}>
                    📍 {city}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="new-branches-section animate-pop-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2415755045326!2d77.57655268885497!3d12.892181900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1508883a7c43%3A0xd91f65ff71753711!2sNivara%20Home%20Finance%20LTD.!5e0!3m2!1sen!2sin!4v1773817509951!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="NMIT SOLUTIONS Map"
        ></iframe>
        <h2 className="new-branches-title animate-pop-up">📍 Newly Opened Branches</h2>

        <div className="new-branches-grid">
          <div className="branch-card animate-pop-up">
            <h3 className="animate-pop-up">🏢 Penukonda Branch</h3>
            <p>
              <strong>Opened:</strong> 23rd January 2026
            </p>
            <p>
              <strong>Location:</strong> 1st Floor, 10-264, Narayanamma Colony,
              Revenue ward No 10, Penukonda, Andhra Pradesh-515110
            </p>
            <p>
              <strong>Contact:</strong> +91 9742366443
            </p>
          </div>

          <div className="branch-card animate-pop-up">
            <h3 className="animate-pop-up">🏢 Nuziveedu Branch</h3>
            <p>
              <strong>Opened:</strong> 31st January 2026
            </p>
            <p>
              <strong>Location:</strong> D No-7-153/1, 1st floor, Jangalapeta,
              Revenue ward No 7, Near Bus stand main road, Nuziveedu, Eluru
              District, 521201
            </p>
            <p>
              <strong>Contact:</strong> +91 9640881007
            </p>
          </div>

          <div className="branch-card animate-pop-up">
            <h3 className="animate-pop-up">🏢 Machilipatnam Branch</h3>
            <p>
              <strong>Opened:</strong> 31st January 2026
            </p>
            <p>
              <strong>Location:</strong> 1st Floor, D No-10/400/-401, Balaramuni
              Peta Revenue Ward-10, Machilipatnam 521001
            </p>
            <p>
              <strong>Contact:</strong> +91 9640881007
            </p>
          </div>

          <div className="branch-card animate-pop-up">
            <h3 className="animate-pop-up">🏢 Kandukur Branch</h3>
            <p>
              <strong>Opened:</strong> 12th February 2026
            </p>
            <p>
              <strong>Location:</strong> 1st Floor, Simhadri Nagar, Revenue Ward
              No-2, Pamuru Road, Kandukur-523105
            </p>
            <p>
              <strong>Contact:</strong> +91 9705999405
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branch;

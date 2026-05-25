import React, { useState } from "react";
import {
  FaBuilding,
  FaCalendarAlt,
  FaChevronDown,
  FaDirections,
  FaExternalLinkAlt,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import "./Branch.css";
import BranchMap from "../../../components/BranchMap";

const branchLinks = {
  Vellore: "https://maps.app.goo.gl/gynfzXcRgF24sVWx9",
  Salem: "https://maps.app.goo.gl/qGc5sHLycSo7KJzH9",
};

const branchesData = {
  KARNATAKA: [
    "Nagarbhavi", "Bagalur", "TC Palya", "Mysore", "Ramnagara", "Gottigere",
    "Anekal", "Nelamangala", "Doddabalapur", "Tumkur", "Mandya", "Kanakpura",
    "Hunsur", "Kengeri", "Gauribidanur", "Sarjapur", "Kunigal", "Chamrajnagar",
    "Kolar", "Hassan", "Sira", "Chikkabalapur", "Tiptur", "Thalaghattapura",
    "Srirangapatna", "Davanagere", "Malur", "Chitradurga", "Maddur", "Hubli",
    "Gadag", "Haveri", "Ballari", "Hospet", "Belagavi", "Gangavathi(Kalburgi)",
    "Gangavathi", "Gokak", "Sindhanur", "Chikkodi", "Raichur", "Vijayapura", "Ranebennur",
  ],
  "TAMIL NADU": [
    "Hosur", "Salem", "Krishnagiri", "Dharmapuri", "Tirupattur", "Tiruvanmalai",
    "Vellore", "Namakkal", "Erode", "Pollachi", "Tirupur", "Coimbatore",
    "Pochampalli", "Arakkonam",
  ],
  TELANGANA: [
    "Vanasthalipuram", "Karimnagar", "Warangal", "Khammam", "Siddipet",
    "Kodad", "Siricilla", "Sangareddy", "Nirmal", "Medchal", "Suryapet",
  ],
  "ANDHRA PRADESH": [
    "Guntur", "Eluru", "Ongole", "Narasaraopeta", "Bhimavaram", "Hindupur",
    "Chirala", "Kanuru", "Anantapur", "Adoni", "Tadepalligudam", "Tirupathi",
    "Puttur", "Penukonda", "Nuziveedu", "Machilipatnam", "Kandukur",
  ],
  MAHARASHTRA: [
    "Nasik", "Chinchwad", "Ahmednagar", "Aurangabad", "Jalgaon", "Dhule",
  ],
};

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2415755045326!2d77.57655268885497!3d12.892181900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1508883a7c43%3A0xd91f65ff71753711!2sNivara%20Home%20Finance%20LTD.!5e0!3m2!1sen!2sin!4v1773817509951!5m2!1sen!2sin";

const mapDirectionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Nivara+Home+Finance+LTD+Bengaluru";

const newBranches = [
  {
    city: "Kolhapur",
    state: "Maharashtra",
    opened: "17th March 2026",
    address:
      "No. 115-B, First Floor, Parag Complex, 596/1, E Ward, Shahupuri, 1st Lane, Kolhapur - 416001.",
    contact: "+91 9373059622",
  },
  {
    city: "Kurnool",
    state: "Andhra Pradesh",
    opened: "25th March 2026",
    address:
      "Shop No. 420, 421 & 422, 4th Floor, Ucon Legend Complex, Kurnool District, Andhra Pradesh - 518004.",
    contact: "+91 9494438553",
  },
  {
    city: "Bangarpet",
    state: "Karnataka",
    opened: "30th March 2026",
    address:
      "1st Floor, #3191, opp Indian Bank, Seshachalam Mudaliar Road, Bangarpet - 563114.",
    contact: "+91 9742366443",
  },
  {
    city: "Viluppuram",
    state: "Tamil Nadu",
    opened: "7th April 2026",
    address:
      "3rd Floor, TNHB Shop Site No.11 (VPM-030A), Keelperumbakkam Phase-II, Ward-B, Block-26, Viluppuram, Tamil Nadu - 605602.",
    contact: "+91 9865310336",
  },
];

const Branch = () => {
  const [search, setSearch] = useState("");
  const [openState, setOpenState] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const toggleState = (state) => {
    setOpenState(openState === state ? null : state);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setShowResults(value.trim().length > 0);
  };

  const selectBranch = (state, city) => {
    setOpenState(state);
    setSearch(city);
    setShowResults(false);
    setSelectedBranch({ state, city });

    setTimeout(() => {
      const element = document.getElementById(
        `state-${state.replace(/\s+/g, "-")}`
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  const clearSearch = () => {
    setSearch("");
    setShowResults(false);
    setOpenState(null);
  };

  const closeBranchModal = () => {
    setSelectedBranch(null);
  };

  const getAllResults = () => {
    const results = [];
    Object.keys(branchesData).forEach((state) => {
      branchesData[state].forEach((city) => {
        if (city.toLowerCase().includes(search.toLowerCase())) {
          results.push({ state, city });
        }
      });
    });
    return results;
  };

  const getFilteredData = () => {
    if (!search.trim()) return branchesData;

    const filtered = {};
    Object.keys(branchesData).forEach((state) => {
      const matchedCities = branchesData[state].filter((city) =>
        city.toLowerCase().includes(search.toLowerCase())
      );
      if (matchedCities.length > 0) {
        filtered[state] = matchedCities;
      }
    });
    return filtered;
  };

  const openBranchMap = (city) => {
    const customMap = branchLinks[city];

    if (customMap) {
      window.open(customMap, "_blank");
    } else {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=Nivara+Home+Finance+${city}`,
        "_blank"
      );
    }
  };

  return (
    <div className="branch-page">

      {/* Banner */}
      <div className="branch-banner animate-pop-up">
        <div className="banner-con animate-pop-up">
          <h1>NIVARA LOCATIONS</h1>
          <p>
            Our headquarters and branches span across multiple states to serve
            customers efficiently. Nivara Housing Finance continues to expand
            across India to make home loans accessible for everyone.
          </p>
        </div>

        <div className="banner-map animate-pop-up">
          <BranchMap branchesData={branchesData} />
        </div>
      </div>

      {/* Locator */}
      <div className="branch-locator">
        <h2 className="animate-pop-up">
          <FaMapMarkerAlt className="pin-icon" /> NIVARA BRANCH LOCATOR
        </h2>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search branch name..."
            value={search}
            onChange={handleSearchChange}
            onFocus={() => search.trim() && setShowResults(true)}
          />

          {search && (
            <button className="search-clear-btn" onClick={clearSearch}>
              &times;
            </button>
          )}

          {showResults && (
            <div className="search-results-dropdown">
              {getAllResults().length > 0 ? (
                getAllResults().map((res, i) => (
                  <div
                    key={i}
                    className="search-result-item"
                    onClick={() => selectBranch(res.state, res.city)}
                  >
                    <span className="res-city">{res.city}</span>
                    <span className="res-state">{res.state}</span>
                  </div>
                ))
              ) : (
                <div className="no-res">No branches found</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* State List */}
      <div className="state-list">
        {Object.keys(getFilteredData()).map((state) => (
          <div
            className="state-wrapper"
            key={state}
            id={`state-${state.replace(/\s+/g, "-")}`}
          >
            <div
              className="state-card"
              onClick={() => toggleState(state)}
            >
              <span>{state}</span>

              <FaChevronDown
                className={`down-icon ${
                  openState === state ? "rotate" : ""
                }`}
              />
            </div>

            {(openState === state || search) && (
              <div className="location-grid">
                {getFilteredData()[state].map((city) => (
                  <div
                    key={city}
                    className={`location-item ${
                      search &&
                      city.toLowerCase().includes(search.toLowerCase())
                        ? "highlight-branch"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedBranch({ state, city })
                    }
                  >
                    📍 {city}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBranch && (
        <div
          className="branch-modal-overlay"
          onClick={closeBranchModal}
        >
          <div
            className="branch-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={closeBranchModal}
            >
              &times;
            </button>

            <div className="modal-header">
              <div className="modal-icon-container">
                <FaMapMarkerAlt className="modal-icon" />
              </div>

              <h3>{selectedBranch.city} Branch</h3>

              <p className="modal-state-label">
                {selectedBranch.state}
              </p>
            </div>

            <div className="modal-body">
              <div className="info-item">
                <span className="info-label">🏢 COMPANY</span>
                <p>Nivara Home Finance LTD.</p>
              </div>

              <div className="info-divider"></div>

              <div className="info-item">
                <span className="info-label">📍 ADDRESS</span>
                <p>
                  {selectedBranch.city}, {selectedBranch.state}, India
                </p>
              </div>

              <div className="info-divider"></div>

              <div className="info-item">
                <span className="info-label">📞 CONTACT SUPPORT</span>
                <p>1800-309-1516</p>
              </div>
            </div>

            <div className="modal-actions-container">
              <button
                className="btn-get-directions-final"
                onClick={() => openBranchMap(selectedBranch.city)}
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Branch;
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaBuilding,
  FaCalendarAlt,
  FaChevronDown,
  FaDirections,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
 
import "./Branch.css";
import BranchMap from "../../../components/BranchMap";
 
const defaultBranchesByState = {
  KARNATAKA: [
    "Nagarbhavi", "Bagalur", "TC Palya", "Mysore", "Ramnagara", "Gottigere",
    "Anekal", "Nelamangala", "Doddabalapur", "Tumkur", "Mandya", "Kanakpura",
    "Hunsur", "Kengeri", "Gauribidanur", "Sarjapur", "Kunigal", "Chamrajnagar",
    "Kolar", "Hassan", "Sira", "Chikkabalapur", "Tiptur", "Thalaghattapura",
    "Srirangapatna", "Davanagere", "Malur", "Chitradurga", "Maddur", "Hubli",
    "Gadag", "Haveri", "Ballari", "Hospet", "Belagavi", "Gangavathi(Kalburgi)",
    "Gangavathi", "Gokak", "Sindhanur", "Chikkodi", "Raichur", "Vijayapura", "Ranebennur", "JPNagar", "Puttenahalli"
  ],
  "TAMIL NADU": [
    "Hosur", "Salem", "Krishnagiri", "Dharmapuri", "Tirupattur", "Tiruvannamalai",
    "Vellore", "Namakkal", "Erode", "Pollachi", "Tiruppur", "Coimbatore",
    "Pochampalli", "Arakkonam",
  ],
  TELANGANA: [
    "Vanasthalipuram", "Karimnagar", "Warangal", "Khammam", "Siddipet",
    "Kodad", "Siricilla", "Sangareddy", "Nirmal", "Medchal", "Suryapet",
  ],
  "ANDHRA PRADESH": [
    "Guntur", "Eluru", "Ongole", "Narasaraopeta", "Bhimavaram", "Hindupur",
    "Chirala", "Kanuru", "Anantapur", "Adoni", "Tadepalligudam", "Tirupati",
    "Puttur", "Penukonda", "Nuziveedu", "Machilipatnam", "Kandukur",
  ],
  MAHARASHTRA: [
    "Nasik", "Chinchwad", "Ahmednagar", "Aurangabad", "Jalgaon", "Dhule",
  ],
};
 
const defaultBranchesData = Object.keys(defaultBranchesByState).reduce((acc, state) => {
  acc[state] = defaultBranchesByState[state].map((city) => ({ state, city }));
  return acc;
}, {});
 
const defaultNewBranches = [
  {
    city: "Kolhapur",
    state: "Maharashtra",
    opened: "2026-03-17",
    address:
      "No. 115-B, First Floor, Parag Complex, 596/1, E Ward, Shahupuri, 1st Lane, Kolhapur - 416001.",
    contact: "+91 9373059622",
    is_new: true,
  },
  {
    city: "Kurnool",
    state: "Andhra Pradesh",
    opened: "2026-03-25",
    address:
      "Shop No. 420, 421 & 422, 4th Floor, Ucon Legend Complex, Kurnool District, Andhra Pradesh - 518004.",
    contact: "+91 9494438553",
    is_new: true,
  },
  {
    city: "Bangarpet",
    state: "Karnataka",
    opened: "2026-03-30",
    address:
      "1st Floor, #3191, opp Indian Bank, Seshachalam Mudaliar Road, Bangarpet - 563114.",
    contact: "+91 9742366443",
    is_new: true,
  },
  {
    city: "Viluppuram",
    state: "Tamil Nadu",
    opened: "2026-04-07",
    address:
      "3rd Floor, TNHB Shop Site No.11 (VPM-030A), Keelperumbakkam Phase-II, Ward-B, Block-26, Viluppuram, Tamil Nadu - 605602.",
    contact: "+91 9865310336",
    is_new: true,
  },
];
 
const Branch = () => {
  const [search, setSearch] = useState("");
  const [openState, setOpenState] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [branchesData, setBranchesData] = useState(defaultBranchesData);
  const [newBranches, setNewBranches] = useState(defaultNewBranches);
  const [loading, setLoading] = useState(true);
 
  const buildBranchesData = (branchesArray) => {
    const grouped = {};
    branchesArray.forEach((branch) => {
      const stateKey = (branch.state || "").trim().toUpperCase();
      if (!grouped[stateKey]) grouped[stateKey] = [];
      grouped[stateKey].push(branch);
    });
    return grouped;
  };
 
  const fetchBranches = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/branches");
      const branches = Array.isArray(res.data) ? res.data : [];
      if (branches.length > 0) {
        setBranchesData(buildBranchesData(branches));
        setNewBranches(
          branches
            .filter((branch) => branch.is_new === 1 || branch.is_new === true)
            .sort((a, b) => new Date(b.opened) - new Date(a.opened))
        );
      }
    } catch (err) {
      console.error("Branch fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchBranches();
  }, []);
 
  const toggleState = (state) => {
    setOpenState(openState === state ? null : state);
  };
 
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setShowResults(value.trim().length > 0);
  };
 
  const selectBranch = (state, branch) => {
    setOpenState(state);
    setSearch(branch.city);
    setShowResults(false);
    setSelectedBranch(branch);
 
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
      branchesData[state].forEach((branch) => {
        if (branch.city.toLowerCase().includes(search.toLowerCase())) {
          results.push({ state, branch });
        }
      });
    });
    return results;
  };
 
  const getFilteredData = () => {
    if (!search.trim()) return branchesData;
 
    const filtered = {};
    Object.keys(branchesData).forEach((state) => {
      const matchedCities = branchesData[state].filter((branch) =>
        branch.city.toLowerCase().includes(search.toLowerCase())
      );
      if (matchedCities.length > 0) {
        filtered[state] = matchedCities;
      }
    });
    return filtered;
  };
 
  const openBranchMap = (city) => {
    let searchQuery = `Nivara Home Finance ${city}`;
 
    if (city === "JPNagar") {
      searchQuery = "Nivara Home Finance JP Nagar Bengaluru";
    } else if (city === "Puttenahalli") {
      searchQuery = "Nivara Home Finance Puttenahalli Bengaluru";
    } else if (city === "Kanuru") {
      searchQuery = "Nivara Home Finance Kanuru Vijayawada";
    }
 
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`,
      "_blank"
    );
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
                    onClick={() => selectBranch(res.state, res.branch)}
                  >
                    <span className="res-city">{res.branch.city}</span>
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
                {getFilteredData()[state].map((branch) => (
                  <div
                    key={branch.city}
                    className={`location-item ${
                      search &&
                      branch.city.toLowerCase().includes(search.toLowerCase())
                        ? "highlight-branch"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedBranch(branch)
                    }
                  >
                    📍 {branch.city}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
 
      {/* Newly Opened Branches */}
      <section className="new-branches-section" aria-label="Newly Opened Branches">
        <div className="new-branches-header">
          <span className="branch-section-eyebrow">JUST OPENED</span>
          <h2>Newly Opened Branches</h2>
          <p>
            We are constantly expanding our footprint to bring home finance closer to you.
            Discover our latest locations across different states.
          </p>
        </div>
 
        <div className="branch-openings-grid">
          {newBranches.map((branch, index) => (
            <div className="branch-card" key={index}>
              <div className="branch-card-head">
                <div className="branch-card-icon">
                  <FaBuilding />
                </div>
                <div>
                  <h3>{branch.city}</h3>
                  <p>{branch.state}</p>
                </div>
              </div>
 
              <div className="branch-card-detail">
                <FaCalendarAlt />
                <div>
                  <strong>Opened</strong>
                  <p>{branch.opened}</p>
                </div>
              </div>
 
              <div className="branch-card-detail">
                <FaMapMarkerAlt />
                <div>
                  <strong>Address</strong>
                  <p>{branch.address}</p>
                </div>
              </div>
 
              <div className="branch-card-detail">
                <FaPhoneAlt />
                <div>
                  <strong>Contact</strong>
                  <p>{branch.contact}</p>
                </div>
              </div>
 
              <button
                className="branch-card-directions"
                onClick={() => openBranchMap(branch.city)}
              >
                <FaDirections /> Get Directions
              </button>
            </div>
          ))}
        </div>
      </section>
 
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

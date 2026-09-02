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
import {
  defaultBranchesData,
  defaultNewBranches,
  getBranchSlug,
  slugify,
  getBranchesApiUrl,
} from "../../../data/branchesData";

 
const Branch = () => {
  const [search, setSearch] = useState("");
  const [openState, setOpenState] = useState("KARNATAKA");
  const [showResults, setShowResults] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [branchesData, setBranchesData] = useState(defaultBranchesData);
  const [newBranches, setNewBranches] = useState(defaultNewBranches);
  const [openBranchDropdown, setOpenBranchDropdown] = useState(null);
  const stateOrder = ["KARNATAKA", "TAMIL NADU", "TELANGANA", "ANDHRA PRADESH", "MAHARASHTRA"];

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get(getBranchesApiUrl());
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          const grouped = {};
          const newB = [];
          
          response.data.forEach(branch => {
            const stateKey = (branch.state || "").toUpperCase();
            if (!grouped[stateKey]) {
              grouped[stateKey] = [];
            }
            
            const formattedBranch = {
              id: branch.id,
              city: branch.city,
              state: branch.state,
              opened: branch.opened ? branch.opened.split('T')[0] : "",
              address: branch.address,
              contact: branch.contact,
              map_link: branch.map_link,
              is_new: !!branch.is_new
            };
            
            grouped[stateKey].push(formattedBranch);
            
            if (branch.is_new) {
              newB.push(formattedBranch);
            }
          });
          
          // Sort by opened date descending, then slice first 4
          newB.sort((a, b) => {
            const dateA = a.opened ? new Date(a.opened) : new Date(0);
            const dateB = b.opened ? new Date(b.opened) : new Date(0);
            return dateB - dateA;
          });
          const limitedNewB = newB.slice(0, 4);
          
          setBranchesData(grouped);
          setNewBranches(limitedNewB);
        }
      } catch (err) {
        console.error("Failed to load branches from backend, using fallback data:", err);
      }
    };
    
    fetchBranches();

    const handleUpdate = () => fetchBranches();
    const handleStorage = (e) => {
      if (e.key === "nivara_branch_update_timestamp") fetchBranches();
    };

    window.addEventListener("branchesUpdated", handleUpdate);
    window.addEventListener("storage", handleStorage);
    window.addEventListener("focus", handleUpdate);

    return () => {
      window.removeEventListener("branchesUpdated", handleUpdate);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("focus", handleUpdate);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".custom-branch-dropdown")) {
        setOpenBranchDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
 
  const toggleState = (state) => {
    setOpenState(openState === state ? null : state);
    setOpenBranchDropdown(null);
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
    setOpenState("KARNATAKA");
    setOpenBranchDropdown(null);
  };
 
  const closeBranchModal = () => {
    setSelectedBranch(null);
  };

  const openBranchMicrosite = (branch) => {
    if (!branch) return;

    const slug = getBranchSlug(branch);
    const query = new URLSearchParams({
      city: branch.city || "",
      state: branch.state || "",
      opened: branch.opened || "",
      address: branch.address || "",
      contact: branch.contact || "",
      map_link: branch.map_link || ""
    }).toString();

    window.open(`/branch/${slug}?${query}`, "_blank", "noopener,noreferrer");
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

  const getSortedStateKeys = () =>
    Object.keys(getFilteredData()).sort((a, b) => {
      const indexA = stateOrder.indexOf(a);
      const indexB = stateOrder.indexOf(b);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.localeCompare(b);
    });
 
  const openBranchMap = (city, mapLink) => {
    if (mapLink) {
      window.open(mapLink, "_blank");
      return;
    }
    let searchQuery = `Nivara Home Finance ${city}`;

    if (city === "JP Nagar" || city === "JPNagar") {
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
          <h1>NIVARA BRANCHES</h1>
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
 
      {/* Branch Listings */}
      <div className="state-list">
          {getSortedStateKeys().map((state) => (
            <div
              className="state-wrapper"
              key={state}
              id={`state-${state.replace(/\s+/g, "-")}`}
            >
              <button
                type="button"
                className="state-card"
                onClick={() => toggleState(state)}
                aria-expanded={openState === state || Boolean(search)}
                aria-controls={`branch-dropdown-${state.replace(/\s+/g, "-")}`}
              >
                <span>{state}</span>
                {/* <small>{getFilteredData()[state].length} branches</small> */}

                <FaChevronDown
                  className={`down-icon ${
                    openState === state ? "rotate" : ""
                  }`}
                />
              </button>

              {(openState === state || search) && (
                <div
                  className="state-dropdown-container"
                  id={`branch-dropdown-${state.replace(/\s+/g, "-")}`}
                >
                  <div
                    className={`custom-branch-dropdown ${openBranchDropdown === state ? "active" : ""}`}
                  >
                    <button
                      type="button"
                      className="dropdown-trigger"
                      onClick={() => setOpenBranchDropdown(openBranchDropdown === state ? null : state)}
                      aria-expanded={openBranchDropdown === state}
                    >
                      <span>
                        {selectedBranch && selectedBranch.state?.toUpperCase() === state
                          ? selectedBranch.city
                          : "Select a Branch"}
                      </span>
                      <FaChevronDown className="chevron-icon" />
                    </button>
                    {openBranchDropdown === state && (
                      <div className="dropdown-options">
                        {getFilteredData()[state].map((branch) => (
                          <button
                            type="button"
                            key={branch.city}
                            className="dropdown-option"
                            onClick={() => {
                              setSelectedBranch(branch);
                              setOpenBranchDropdown(null);
                            }}
                          >
                            <span className="option-pin">
                              <FaMapMarkerAlt />
                            </span>
                            <span className="option-copy">
                              <span className="option-city">{branch.city}</span>
                              <span className="option-meta">
                                {branch.contact || "1800-309-1516"}
                              </span>
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          {Object.keys(getFilteredData()).length === 0 && (
            <div className="no-branches-found animate-pop-up">
              <h3>No branches found</h3>
              <p>We couldn't find any branches matching "{search}". Try searching for another city.</p>
            </div>
          )}
      </div>
 
      {/* Newly Opened Branches */}
      <section className="new-branches-section" aria-label="Newly Opened Branches">
        <div className="new-branches-header">
          <span className="branch-section-eyebrow">Just Opened</span>
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
 
              <div className="branch-card-actions">
                <button
                  className="branch-card-directions"
                  onClick={() => openBranchMap(branch.city, branch.map_link)}
                >
                  <FaDirections /> Get Directions
                </button>
                <button
                  className="branch-card-microsite"
                  onClick={() => openBranchMicrosite(branch)}
                >
                  View Microsite
                </button>
              </div>
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
              <div className="modal-highlight-row">
                <div className="modal-highlight-box">
                  <span className="info-label">🏢 Company</span>
                  <p>Nivara Home Finance Ltd.</p>
                </div>
                <div className="modal-highlight-box">
                  <span className="info-label">📞 Support</span>
                  <p>{selectedBranch.contact || "1800-309-1516"}</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-label">📍 Address</span>
                <p>
                  {selectedBranch.address || `${selectedBranch.city}, ${selectedBranch.state}, India`}
                </p>
              </div>

              <div className="info-divider"></div>

              <div className="info-item">
                <span className="info-label">💼 Services</span>
                <p>Home Loans, Loan Against Property, Balance Transfer, and Construction Finance support.</p>
              </div>
            </div>
 
            <div className="modal-actions-container">
              <div className="modal-actions-row">
                <button
                  className="btn-get-directions-final"
                  onClick={() => openBranchMap(selectedBranch.city, selectedBranch.map_link)}
                >
                  Get Directions
                </button>
                <button
                  className="btn-view-microsite-final"
                  onClick={() => openBranchMicrosite(selectedBranch)}
                >
                  View Microsite
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default Branch;

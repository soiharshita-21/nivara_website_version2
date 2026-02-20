import React, { useState } from "react";
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import map from "../../../assets/images/map.jpg";
import "./Branch.css";



const branchesData = {
  "KARNATAKA": [
    "Nagarbhavi","Bagalur","TC Palya","Mysore","Ramnagara","Gottigere",
    "Anekal","Nelamangala","Doddabalapur","Tumkur","Mandya","Kanakpura",
    "Hunsur","Kengeri","Gauribidanur","Sarjapur","Kunigal","Chamrajnagar",
    "Kolar","Hassan","Sira","Chikkabalapur","Tiptur","Thalaghattapura",
    "Srirangapatna","Davanagere","Malur","Chitradurga","Maddur","Hubli",
    "Gadag","Haveri","Ballari","Hospet","Belagavi","Gangavathi(Kalburgi)",
    "Gangavathi","Gokak","Sindhanur","Chikkodi","Raichur","Vijayapura","Ranebennur"
  ],

  "TAMIL NADU": [
    "Hosur","Salem","Krishnagiri","Dharmapuri","Tirupattur","Tiruvanmalai",
    "Vellore","Namakkal","Erode","Pollachi","Tirupur","Coimbatore",
    "Pochampalli","Arakkonam"
  ],

  "TELANGANA": [
    "Vanasthalipuram","Karimnagar","Warangal","Khammam","Siddipet","Kodad",
    "Siricilla","Sangareddy","Nirmal","Medchal","Suryapet"
  ],

  "ANDHRA PRADESH": [
    "Guntur","Eluru","Ongole","Narasaraopeta","Bhimavaram","Hindupur",
    "Chirala","Kanuru","Anantapur","Adoni","Tadepalligudam","Tirupathi",
    "Puttur","Penukonda","Nuziveedu","Machilipatnam","Kandukur"
  ],

  "MAHARASHTRA": [
    "Nasik","Chinchwad","Ahmednagar","Aurangabad","Jalgaon","Dhule"
  ]
};



const Branch = () => {
  const [search, setSearch] = useState("");
  const [openState, setOpenState] = useState(null);

  const toggleState = (state) => {
    setOpenState(openState === state ? null : state);
  };

  return (
    <div className="branch-page">

      {/* Header */}
      <div className="branch-header">
        <div className="branch-left">
          <h1>Nivara Home Branches</h1>
        </div>
        <div className="branch-right">
          <img src={map} alt="branch banner" />
        </div>
      </div>

      {/* Locator */}
      <div className="branch-locator">
        <h2>
          <FaMapMarkerAlt className="pin-icon" /> NIVARA BRANCH LOCATOR
        </h2>

        <input
          type="text"
          placeholder="Search branch name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* States Accordion */}
      <div className="state-list">
        {Object.keys(branchesData).map((state, index) => (
          <div className="state-wrapper" key={index}>

            {/* State Header */}
            <div className="state-card" onClick={() => toggleState(state)}>
              <span>{state}</span>
              <FaChevronDown
                className={`down-icon ${openState === state ? "rotate" : ""}`}
              />
            </div>

            {/* Locations */}
            {openState === state && (
              <div className="location-grid">
                {branchesData[state]
                  .filter((city) =>
                    city.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((city, i) => (
                    <div className="location-item" key={i}>
                      📍 {city}
                    </div>
                  ))}
              </div>
            )}

          </div>
        ))}
      </div>

      {/* Newly Opened Branches */}
      <div className="new-branches-section">
        <h2 className="new-branches-title">📍 Newly Opened Branches</h2>

        <div className="new-branches-grid">

          <div className="branch-card">
            <h3>🏢 Penukonda Branch</h3>
            <p><strong>Opened:</strong> 23rd January 2026</p>
            <p><strong>Location:</strong> 1st Floor, 10-264, Narayanamma Colony, Revenue ward No 10, Penukonda, Andhra Pradesh-515110</p>
            <p><strong>Contact:</strong> +91 9742366443</p>
          </div>

          <div className="branch-card">
            <h3>🏢 Nuziveedu Branch</h3>
            <p><strong>Opened:</strong> 31st January 2026</p>
            <p><strong>Location:</strong> D No-7-153/1, 1st floor, Jangalapeta, Revenue ward No 7, Near Bus stand main road, Nuziveedu, Eluru District, 521201</p>
            <p><strong>Contact:</strong> +91 9640881007</p>
          </div>

          <div className="branch-card">
            <h3>🏢 Machilipatnam Branch</h3>
            <p><strong>Opened:</strong> 31st January 2026</p>
            <p><strong>Location:</strong> 1st Floor, D No-10/400/-401, Balaramuni Peta Revenue Ward-10, Machilipatnam 521001</p>
            <p><strong>Contact:</strong> +91 9640881007</p>
          </div>

          <div className="branch-card">
            <h3>🏢 Kandukur Branch</h3>
            <p><strong>Opened:</strong> 12th February 2026</p>
            <p><strong>Location:</strong> 1st Floor, Simhadri Nagar, Revenue Ward No-2, Pamuru Road, Kandukur-523105</p>
            <p><strong>Contact:</strong> +91 9705999405</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Branch;

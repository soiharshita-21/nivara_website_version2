import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import indiaStates from "../maps/india_states.json";
import "./BranchMap.css";

const highlightStates = [
  "karnataka",
  "tamil nadu",
  "telangana",
  "andhra pradesh",
  "maharashtra",
];

const markers = [
  {
    name: "Maharashtra",
    abbreviation: "MH",
    coordinates: [75.7139, 19.7515],
    labelOffset: { x: -52, y: -34 },
  },
  {
    name: "Karnataka",
    abbreviation: "KA",
    coordinates: [75.7139, 15.3173],
    labelOffset: { x: -56, y: 34 },
  },
  {
    name: "Telangana",
    abbreviation: "TS",
    coordinates: [79.0193, 18.1124],
    labelOffset: { x: 54, y: -28 },
  },
  {
    name: "Andhra Pradesh",
    abbreviation: "AP",
    coordinates: [79.2, 15.5],
    labelOffset: { x: 58, y: 16 },
  },
  {
    name: "Tamil Nadu",
    abbreviation: "TN",
    coordinates: [78.6569, 11.1271],
    labelOffset: { x: 48, y: 34 },
  },
];

const BranchMap = ({ branchesData = {} }) => {
  const stateStats = markers
    .map((marker) => {
      const stateKey = marker.name.toUpperCase();
      return {
        ...marker,
        count: branchesData[stateKey] ? branchesData[stateKey].length : 0,
      };
    })
    .filter((state) => state.count > 0);

  const totalBranches = stateStats.reduce((sum, state) => sum + state.count, 0);

  return (
    <section className="branch-map-card" aria-label="State wise branch presence">
      <div className="branch-map-header">
        <div>
          <span className="branch-map-eyebrow">Branch network</span>
          <h4>State-wise presence</h4>
        </div>
        <div className="branch-total-pill">
          <strong>{totalBranches}</strong>
          <span>Total branches</span>
        </div>
      </div>

      <div className="branch-map-content">
        <div className="branch-map-visual">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 900,
              center: [82, 22],
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={indiaStates}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const stateName = geo.properties.ST_NM;
                  const highlight = highlightStates.includes(stateName.toLowerCase());

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: highlight ? "#C9181F" : "#DDE2E8",
                          stroke: "#FFFFFF",
                          strokeWidth: highlight ? 0.75 : 0.5,
                          outline: "none",
                        },
                        hover: {
                          fill: highlight ? "#E32125" : "#DDE2E8",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#A9151B",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {stateStats.map(({ coordinates, abbreviation, count, labelOffset }) => (
              <Marker key={abbreviation} coordinates={coordinates}>
                <g className="branch-map-marker">
                  <line
                    x1={0}
                    y1={0}
                    x2={labelOffset.x}
                    y2={labelOffset.y}
                    stroke="#7F1D1D"
                    strokeWidth={1.4}
                    strokeDasharray="3 3"
                    opacity={0.5}
                  />
                  <circle r={5.5} fill="#FFFFFF" stroke="#E32125" strokeWidth={2.5} />
                  <g transform={`translate(${labelOffset.x}, ${labelOffset.y})`}>
                    <rect
                      x={-33}
                      y={-22}
                      width={66}
                      height={44}
                      rx={11}
                      fill="#FFFFFF"
                      stroke="#F1D5D5"
                      strokeWidth={1}
                    />
                    <text
                      x={0}
                      y={-5}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#7F1D1D"
                      fontSize="10"
                      fontWeight={800}
                      fontFamily="Poppins, sans-serif"
                      pointerEvents="none"
                    >
                      {abbreviation}
                    </text>
                    <text
                      x={0}
                      y={11}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#111827"
                      fontSize="15"
                      fontWeight={800}
                      fontFamily="Poppins, sans-serif"
                      pointerEvents="none"
                    >
                      {count}
                    </text>
                  </g>
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        <div className="branch-state-counts">
          {stateStats.map(({ name, abbreviation, count }) => (
            <div className="branch-state-count" key={name}>
              <span className="branch-state-code">{abbreviation}</span>
              <span className="branch-state-name">{name}</span>
              <strong>{count}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchMap;

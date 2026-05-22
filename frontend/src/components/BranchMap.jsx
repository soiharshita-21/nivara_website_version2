import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import indiaStates from "../maps/india_states.json";

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
    labelOffset: { x: 40, y: -12 },
  },
  {
    name: "Karnataka",
    abbreviation: "KA",
    coordinates: [75.7139, 15.3173],
    labelOffset: { x: 40, y: 8 },
  },
  {
    name: "Telangana",
    abbreviation: "TS",
    coordinates: [79.0193, 18.1124],
    labelOffset: { x: -40, y: -12 },
  },
  {
    name: "Andhra Pradesh",
    abbreviation: "AP",
    coordinates: [79.2, 15.5],
    labelOffset: { x: -40, y: 8 },
  },
  {
    name: "Tamil Nadu",
    abbreviation: "TN",
    coordinates: [78.6569, 11.1271],
    labelOffset: { x: 40, y: 0 },
  },
];

const BranchMap = ({ branchesData = {} }) => {
  return (
    <div style={{ width: "100%", height: "700px", position: "relative" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1050,
          center: [84, 22],
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
                      fill: highlight ? "#B91C1C" : "#D1D5DB",
                      stroke: "#FFFFFF",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: highlight ? "#FF4D4D" : "#D1D5DB",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#B91C1C",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {markers.map(({ coordinates, name, abbreviation }) => {
          const stateKey = name.toUpperCase();
          const branchCount = branchesData[stateKey] ? branchesData[stateKey].length : 0;
          if (branchCount === 0) return null;

          return (
            <Marker key={abbreviation} coordinates={coordinates}>
              <g>
                <text
                  x={0}
                  y={-14}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#111827"
                  fontSize="12"
                  fontWeight={700}
                  fontFamily="sans-serif"
                  pointerEvents="none"
                  letterSpacing="0.1px"
                >
                  {abbreviation}
                </text>
                <circle r={6} fill="#FFFFFF" stroke="#000000" strokeWidth={2} />
                <text
                  x={0}
                  y={16}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#111827"
                  fontSize="12"
                  fontWeight={700}
                  fontFamily="sans-serif"
                  pointerEvents="none"
                >
                  {branchCount}
                </text>
              </g>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
};

export default BranchMap;

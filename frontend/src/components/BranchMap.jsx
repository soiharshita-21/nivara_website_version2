import React, { useState, useRef } from "react";
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
  { name: "Karnataka", coordinates: [75.7139, 15.3173] },
  { name: "Tamil Nadu", coordinates: [78.6569, 11.1271] },
  { name: "Telangana", coordinates: [79.0193, 18.1124] },
  { name: "Andhra Pradesh", coordinates: [79.2, 15.5] },
  { name: "Maharashtra", coordinates: [75.7139, 19.7515] },
];

const BranchMap = ({ branchesData = {} }) => {
  const [tooltip, setTooltip] = useState({ content: "", x: 0, y: 0, show: false });
  const mapRef = useRef(null);

  return (
    <div ref={mapRef} style={{ width: "100%", height: "500px", position: "relative" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 950,
          center: [82, 22],
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={indiaStates}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName = geo.properties.ST_NM;
              const stateKey = stateName.toUpperCase();
              const branchCount = branchesData[stateKey] ? branchesData[stateKey].length : 0;
              const hasBranches = branchCount > 0;
              
              const highlight = highlightStates
                .map((s) => s.toLowerCase())
                .includes(stateName.toLowerCase());

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(e) => {
                    if (hasBranches && mapRef.current) {
                      const rect = mapRef.current.getBoundingClientRect();
                      setTooltip({
                        content: `${stateName}: ${branchCount} Branches`,
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                        show: true,
                      });
                    }
                  }}
                  onMouseMove={(e) => {
                    if (hasBranches && mapRef.current) {
                      const rect = mapRef.current.getBoundingClientRect();
                      setTooltip((prev) => ({
                        ...prev,
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                      }));
                    }
                  }}
                  onMouseLeave={() => {
                    setTooltip({ content: "", x: 0, y: 0, show: false });
                  }}
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
        {markers.map(({ coordinates, name }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle
              r={6}
              fill="#FF4D4D"
              stroke="#FFFFFF"
              strokeWidth={2}
            />
          </Marker>
        ))}
      </ComposableMap>

      {tooltip.show && (
        <div
          style={{
            position: "absolute",
            top: tooltip.y + 10,
            left: tooltip.x + 10,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "8px 12px",
            borderRadius: "4px",
            fontSize: "14px",
            pointerEvents: "none",
            zIndex: 1000,
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
            whiteSpace: "nowrap"
          }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
};

export default BranchMap;

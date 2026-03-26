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
  { name: "Karnataka", coordinates: [75.7139, 15.3173] },
  { name: "Tamil Nadu", coordinates: [78.6569, 11.1271] },
  { name: "Telangana", coordinates: [79.0193, 18.1124] },
  { name: "Andhra Pradesh", coordinates: [79.2, 15.5] },
  { name: "Maharashtra", coordinates: [75.7139, 19.7515] },
];

const BranchMap = () => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
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

      const highlight = highlightStates
        .map((s) => s.toLowerCase())
        .includes(stateName.toLowerCase());

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
    </div>
  );
};

export default BranchMap;

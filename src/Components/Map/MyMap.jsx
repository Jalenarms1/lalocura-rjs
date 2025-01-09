import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

// Map container style
const containerStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "5px"
};

// Initial center of the map
const center = {
  lat: 33.4450601, // Latitude
  lng: -111.9480227, // Longitude
};

function MyMap() {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{mapId: "hybrid"}}
      >
        {/* Add a marker */}
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;

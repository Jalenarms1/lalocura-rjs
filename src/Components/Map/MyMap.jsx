import React from "react";
import { GoogleMap, LoadScript, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { CURR_LOCATION } from "../../data";

const containerStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "5px"
};

const center = {
  lat: 33.4450601,
  lng: -111.9480227,
};

function MyMap() {
    const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY
    });

    if (!isLoaded) {
    return <div>Loading...</div>; 
    }
  return (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={CURR_LOCATION.coordinates}
        zoom={13}
        options={{mapId: "hybrid"}}
        onClick={() => window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CURR_LOCATION.address)}`}
    >
    <MarkerF position={CURR_LOCATION.coordinates} />
    </GoogleMap>
  );
}

export default MyMap;

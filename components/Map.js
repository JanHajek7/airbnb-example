import React, { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));

  const center = getCenter(coordinates);

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <ReactMapGl
      mapboxApiAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/hanzovic/ckujj4xda3cpk18odoofl5101"
      onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}
      {...viewPort}
    >
      {searchResults.map((item, index) => (
        <div key={index}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(item)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              🏨
            </p>
          </Marker>

          {selectedLocation.long === item.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              longitude={item.long}
              latitude={item.lat}
            >
              {item?.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGl>
  );
}

export default Map;

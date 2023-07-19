import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polyline,
  Marker,
} from "@react-google-maps/api";

const GenericMap = ({ markers }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBSsG1wNVBdEK0DIThaMk9GhrKm3wk4e58",
  });

  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);

  const center = markers.length > 0 ? markers[0].position : null;

  const options = {
    // disableDefaultUI: true,
    // clickableIcons: false,
  };

  const handleActiveMarker = (marker) => {
    setActiveMarker(marker);
  };

  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      markers.forEach(({ position }) => bounds.extend(position));
      map.fitBounds(bounds);
      setMap(map);
    },
    [markers, center]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="mapContainer"
      center={center}
      zoom={16}
      options={options}
      onClick={() => setActiveMarker(null)}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Polyline
        path={markers.map((marker) => marker.position)}
        options={{ strokeColor: "blue", strokeOpacity: 1.0, strokeWeight: 4 }}
      />
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          onClick={() => handleActiveMarker(marker)}
          icon={
            marker.type === "gem"
              ? {
                  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                  scaledSize: new window.google.maps.Size(55, 55), // in pixels
                }
              : {
                  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  scaledSize: new window.google.maps.Size(55, 55),
                }
          }
        />
      ))}
    </GoogleMap>
  ) : (
    <div>Loading Map...</div>
  );
};

export default GenericMap;
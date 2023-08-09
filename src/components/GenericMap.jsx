import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  StreetViewPanorama,
  Polyline,
  Marker,
} from "@react-google-maps/api";
import CommentSection from "./CommentSection";
import Main from "./ImageGallery";
import ImageGallery from "./ImageGallery";

function updateMarkers(markers, id, newContext) {
  console.log("everything", markers, id, newContext);
  markers.forEach((value) => {
    console.log("value", value);
    if (value.id === id) {
      value.contexts.push(newContext);
      console.log("Updated value");
    }
  });
}

const GenericMap = ({ markers, isAllMarkers=false }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBSsG1wNVBdEK0DIThaMk9GhrKm3wk4e58",
  });

  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [commentActive, setCommentActive] = useState(false);
  const [showStreetView, setShowStreetView] = useState(false);
  const [contexts, setContexts] = useState([]);
  const [userId, setUserId] = useState(-1);

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

      let panorama = map.getStreetView();

      function onCommentButtonClick(marker) {
        setUserId(marker.id);
        setContexts(marker.contexts);
        setCommentActive(!commentActive);
      }

      markers.forEach((marker) => {
        let position = marker.position;
        let mapInfowindow = new window.google.maps.InfoWindow({
          pixelOffset: new window.google.maps.Size(0, -48),
        });
        let streetViewInfowindow = new window.google.maps.InfoWindow({
          pixelOffset: new window.google.maps.Size(0, -48),
        });
        let markerOptions = {
          position: position,
          map: map,
          icon:
              marker.type === "gem"
                  ? {
                      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                      scaledSize: new window.google.maps.Size(55, 55),
                  }
                  : {
                      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                      scaledSize: new window.google.maps.Size(55, 55),
                  },
      };

      if (!isAllMarkers) {
          markerOptions.title = marker.name;
          markerOptions.label = marker.name;
      }

      let mapMarker = new window.google.maps.Marker(markerOptions);

        mapMarker.addListener("click", function onMarkerClick() {
          mapInfowindow.setContent(
            `<div class="infoWindow">
            <h2>Walk Photo ${marker.name}</h2>
            ${
              marker.image
                ? `<img class="imageWindow" src="${
                    process.env.PUBLIC_URL + marker.image
                  }" alt="${marker.name}"/>`
                : ""
            }
            <h3>Comment: ${marker.contexts[0].context}</h3>
          </div>`
          );

          mapInfowindow.setPosition(position);
          mapInfowindow.open(map);
          onCommentButtonClick(marker);

          streetViewInfowindow.setContent(
            `<div class="infoWindow">
          <h2>Walk Photo ${marker.name}</h2>
          ${
            marker.image
              ? `<img class="imageWindow" src="${
                  process.env.PUBLIC_URL + marker.image
                }" alt="${marker.name}"/>`
              : ""
          }
          <h3>Comment: ${marker.contexts[0].context}</h3>
          

        </div>`
          );
          streetViewInfowindow.setPosition(position);
          streetViewInfowindow.open(panorama);
          onCommentButtonClick(marker);
        });
      });
    },
    [markers, center]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="container" style={{display: 'flex', flexDirection: 'column'}}>
      <GoogleMap
        mapContainerClassName="mapContainer"
        center={center}
        zoom={16}
        options={options}
        onClick={() => setActiveMarker(null)}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {!isAllMarkers && (
          <Polyline
            path={markers.map((marker) => marker.position)}
            options={{ strokeColor: "blue", strokeOpacity: 1.0, strokeWeight: 5 }}
          />
        )}
      </GoogleMap>
      {commentActive ? (
        <CommentSection
          contexts={contexts}
          setContexts={setContexts}
          updateMarkers={updateMarkers}
          markers={markers}
          userId={userId}
        />
      ) : null}
      <ImageGallery markers={markers} />
    </div>
  ) : (
    <div>Loading Map...</div>
  );
};

export default GenericMap;
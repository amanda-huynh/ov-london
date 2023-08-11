import React, { useState, useCallback, memo } from "react";
import ReactDOM from "react-dom/client";
import ReactDOMServer from "react-dom/server";
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  StreetViewPanorama,
  Polyline,
  Marker,
} from "@react-google-maps/api";
import Main from "./ImageGallery.jsx"; 
import CommentSection from "./CommentSection";
import "./MapOverviewInformational.css";

const center = {
  lat: 51.515682,
  lng: -0.070532,
};

const options = {
  // disableDefaultUI: true,
  // clickableIcons: false,
};

const markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/ZS07_Photo1.jpeg",
    contexts: [
        {
          context:
            "This was training. [Test Image]",
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.517070, lng: -0.071350 },
  },
  {
    id: 2,
    name: "2",
    image: "gems-issues/ZS07_Photo2.jpeg",
    contexts: [
      {
        context:
          "Yeah, in this place, because people- they are using drugs, smoking, like drinking cans..like cans and stuff. It’s, like, not good.",
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.517237, lng: -0.071472 },
  },
  {
    id: 3,
    name: "3",
    image: "/gems-issues/ZS07_Photo3.jpeg",
    contexts: [
      {
        context:
          "Because in this place, the drug dealers [are] coming, they [are] selling drugs. We need to do something about that.",
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.517687, lng: -0.071511 },
  },
  {
    id: 4,
    name: "4",
    image: "/gems-issues/ZS07_Photo4.jpeg",
    contexts: [
      {
        context:
          `[This is] the day center, and after like three o'clock I'm leaving, this area, basically.
          It's good here, when you're coming. You can, like, do your skills and stuff, training.
          That's why I'm coming here all the time. I want to be a person, not to do nothing,
          basically. Yeah. Dellow is a good place as well.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.517612, lng: -0.071642 },
  },
  {
    id: 5,
    name: "5",
    image: "/gems-issues/ZS07_Photo5.jpeg",
    contexts: [
      {
        context:
          `This is, like, Founder’s House. I was living, like, in this place in cold weather like
          for homeless people and basically displaced from Salvation Army. Yeah. So they
          provide housing and benefits as well to get, some, they [are] doing like training as
          well.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.517588, lng: -0.068986 },
  },
];


function updateMarkers(id, newContext) {
  markers.forEach((value) => {
    if (value.id === id) {
      value.contexts.push(newContext);
      console.log("Updated value");
    }
  });
}

function MapOverviewInformational() {
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
        let mapMarker = new window.google.maps.Marker({
          position: position,
          map: map,
          title: marker.name,
          label: marker.name,
          icon:
            marker.type === "gem"
              ? {
                  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                  scaledSize: new window.google.maps.Size(55, 55), // in pixels
                }
              : {
                  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  scaledSize: new window.google.maps.Size(55, 55),
                },
        });
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
    [markers]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="container">
      <GoogleMap
        mapContainerClassName="mapContainer"
        center={center}
        zoom={16}
        options={options}
        onClick={() => setActiveMarker(null)}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >      <Polyline path={markers.map((marker) => marker.position)} options={{ strokeColor: "blue", strokeOpacity: 1.0, strokeWeight: 4 }} />
      </GoogleMap>
      {commentActive ? (
        <CommentSection
          contexts={contexts}
          setContexts={setContexts}
          updateMarkers={updateMarkers}
          userId={userId}
        />
      ) : null}
    </div>
  ) : (
    <div>Loading Map...</div>
  );
}
export default memo(MapOverviewInformational);

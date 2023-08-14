import React, { useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  StreetViewPanorama,
  Polyline,
  Marker,
} from "@react-google-maps/api";
import CommentSection from "./CommentSection";
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

const GenericMap = ({ markers, mapName, isAllMarkers=false }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBSsG1wNVBdEK0DIThaMk9GhrKm3wk4e58",
  });

  const [map, setMap] = useState(null);
  const [mapMarkers, setMapMarkers] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);
  const [commentActive, setCommentActive] = useState(false);
  const [showStreetView, setShowStreetView] = useState(false);
  const [contexts, setContexts] = useState([]);
  const [userId, setUserId] = useState(-1);
  const center = markers.length > 0 ? markers[0].position : null;
  const [selectedPosition, setSelectedPosition] = useState(center);

  const initialFilters = {
    AB11: false,
    CK09: false,
    DM12: false,
    "DRESET January 31": false,
    "DRESET February 9": false,
    "DRESET February 17": false,
    "DRESET March 2": false,
    "DRESET March 27 (1)": false,
    "DRESET March 27 (2)": false,
    SJ13: false,
    TM08: false,
    ZS07: false,
    all: true
  };
  
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);


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
      const createdMarkers = [];

      function onCommentButtonClick(marker) {
        setUserId(marker.id);
        setContexts(marker.contexts);
        setCommentActive(!commentActive);
      }

      markers.forEach((marker) => {
        const isMarkerVisible = selectedFilters[marker.source] || selectedFilters.all;
        let position = marker.position;
        let mapInfowindow = new window.google.maps.InfoWindow({
          pixelOffset: new window.google.maps.Size(0, -48),
        });
        let streetViewInfowindow = new window.google.maps.InfoWindow({
          pixelOffset: new window.google.maps.Size(0, -48),
        });
        let markerIconUrl;

        if (marker.type === "gem") {
          markerIconUrl = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
        } else if (marker.type === "concern") {
          markerIconUrl = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
        } else if (marker.type === "none") {
          markerIconUrl = "http://maps.google.com/mapfiles/ms/icons/purple-dot.png";
        } else if (marker.type === "both") {
          markerIconUrl = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
        }
        
        let markerOptions = {
          position: position,
          map: map,
          title: marker.name,
          label: marker.name,
          visible: isMarkerVisible,
          icon: {
            url: markerIconUrl,
            scaledSize: new window.google.maps.Size(55, 55),
          },
        };
        

        if (!isAllMarkers) {
          markerOptions.title = marker.name;
          markerOptions.label = marker.name;
        }

        markerOptions.opacity = (!isAllMarkers && selectedFilters[marker.source]) || selectedFilters.all ? 1 : 0.5;

        let mapMarker = new window.google.maps.Marker(markerOptions);
        mapMarker.source = marker.source || mapName;
            
        createdMarkers.push(mapMarker);
    
        const markerSource = marker.source || mapName;

        mapMarker.addListener("click", function onMarkerClick() {
          mapInfowindow.setContent(
            `<div class="infoWindow">
            <h2>${markerSource} Photo ${marker.name}</h2>
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
      setMapMarkers(createdMarkers);
    },
    [markers, center, selectedFilters, isAllMarkers]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleCheckboxChange = (key) => {
    setSelectedFilters(prev => ({ 
      ...prev, 
      [key]: !prev[key], 
      all: Object.values(prev).every(v => v) && !prev[key] // if all were previously true and we're unchecking one
    }));
  };
  
  const handleSelectAll = () => {
    const newValue = !selectedFilters.all;
    setSelectedFilters({
      ...initialFilters,
      all: newValue
    });
  };


  const handleClear = () => {
    setSelectedFilters({
        ...initialFilters,
        all: true
    });
  };

  
  useEffect(() => {
    if (selectedFilters.all) {
        mapMarkers.forEach(mapMarker => {
            mapMarker.setOpacity(1);
        });
    } else {
        mapMarkers.forEach(mapMarker => {
            if (selectedFilters[mapMarker.source]) {
                // console.log('Setting opacity 1 for', mapMarker.source);
                mapMarker.setOpacity(1);
            } else {
                // console.log('Setting opacity 0 for', mapMarker.source);
                mapMarker.setOpacity(0);
            }
        });
    }
}, [selectedFilters, mapMarkers]);

  return isLoaded ? (
    <div className="container" style={{display: 'flex', flexDirection: 'column'}}>
      <h1>{mapName}</h1>
      {/* {isAllMarkers && (
        <div className="filter-container">
          <h2 className="filter-label">Walk Filter:</h2>
          <div className="filterCheckboxes" style={{display: 'flex', flexDirection: 'row', gap: '15px'}}>
            {Object.entries(selectedFilters).map(([key, value]) => 
                key !== "all" ? (
                    <div key={key}>
                        <input
                            type="checkbox"
                            checked={value}
                            onChange={() => handleCheckboxChange(key)}
                        />
                        {`${key} Walk`}
                    </div>
                ) : (
                    <div key="all">
                        <input
                            type="checkbox"
                            checked={value}
                            onChange={handleSelectAll}
                        />
                        {"Select All"}
                    </div>
                )
            )}
            <button className="clearButton" onClick={handleClear}>Clear</button>
          </div>  
        </div>  
      )} */}

      <GoogleMap
        mapContainerClassName="mapContainer"
        // center={center}
        center={selectedPosition}
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
      {isAllMarkers && (
        <div className="filter-container">
          <h2 className="filter-label">Walk Filter:</h2>
          <div className="filterCheckboxes" style={{display: 'flex', flexDirection: 'row', gap: '15px'}}>
            {Object.entries(selectedFilters).map(([key, value]) => 
                key !== "all" ? (
                    <div key={key}>
                        <input
                            type="checkbox"
                            checked={value}
                            onChange={() => handleCheckboxChange(key)}
                        />
                        {`${key} Walk`}
                    </div>
                ) : (
                    <div key="all">
                        <input
                            type="checkbox"
                            checked={value}
                            onChange={handleSelectAll}
                        />
                        {"Select All"}
                    </div>
                )
            )}
            <button className="clearButton" onClick={handleClear}>Clear</button>
          </div>  
        </div>  
      )}
      {commentActive ? (
        <CommentSection
          contexts={contexts}
          setContexts={setContexts}
          updateMarkers={updateMarkers}
          markers={markers}
          userId={userId}
        />
      ) : <CommentSection
      contexts={contexts}
      setContexts={setContexts}
      updateMarkers={updateMarkers}
      markers={markers}
      userId={userId}
      isAllMarkers={isAllMarkers}
    />}
      {/* <ImageGallery markers={markers} markerSource={mapName} /> */}
      <ImageGallery markers={markers} markerSource={mapName} onImageClick={setSelectedPosition} />
    </div>
  ) : (
    <div>Loading Map...</div>
  );
};

export default GenericMap;
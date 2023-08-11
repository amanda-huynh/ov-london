import React from 'react';
import "./ImageGallery.css";

function ImageGallery({ markers, markerSource, onImageClick }) {
  const groupBySource = (markers) => {
    return markers.reduce((acc, marker) => {
      const source = marker.source || markerSource;
      acc[source] = acc[source] || [];
      acc[source].push(marker);
      return acc;
    }, {});
  };

  const groupedMarkers = groupBySource(markers);

  return (
    <div className="image-gallery">
      {Object.entries(groupedMarkers).map(([source, markersGroup]) => (
        <div key={source}>
          <h2>{source}</h2>
          {markersGroup.map((marker) => (
            <div className="photo-container" key={marker.id}>
              <span className="marker-name">{marker.name}</span>
              <img src={marker.image} alt={marker.name} width="300px" height="300px" className="photo" onClick={() => onImageClick(marker.position)}/>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;

import React from 'react';

function ImageGallery({ markers }) {
  return (
    <div className="image-gallery">
      {markers.map((marker) => (
        <img key={marker.id} src={marker.image} alt={marker.name} width="300px" height="300px" className="photo"/>
      ))}
    </div>
  );
}

export default ImageGallery;

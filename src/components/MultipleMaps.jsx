import React from "react";
import GenericMap from "./GenericMap.jsx";

function MultipleMaps({ markers }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <GenericMap 
        key="DRESET_February9" 
        mapName="DRESET February 9 Walk" 
        isAllMarkers={false} 
        markers={markers} 
      />
      <GenericMap 
        key="DRESET_February17" 
        mapName="DRESET February 17 Walk" 
        isAllMarkers={false} 
        markers={markers} 
      />
      <GenericMap 
        key="DRESET_March27_1" 
        mapName="DRESET March 27 (1) Walk" 
        isAllMarkers={false} 
        markers={markers} 
      />
      <GenericMap 
        key="DRESET_March27_2" 
        mapName="DRESET March 27 (2) Walk" 
        isAllMarkers={false} 
        markers={markers} 
      />
    </div>
  );
}

export default MultipleMaps;
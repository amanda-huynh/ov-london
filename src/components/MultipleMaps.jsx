import React from 'react';
import GenericMap from "./GenericMap.jsx";

function MultipleMaps({ 
    markersDRESETJanuary31,
    markersDRESETFebruary9, 
    markersDRESETFebruary17, 
    markersDRESETMarch2,
    markersDRESETMarch27_1, 
    markersDRESETMarch27_2,
}) {

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <GenericMap 
            key="DRESET_January31" 
            mapName="DRESET January 31 Walk" 
            isAllMarkers={false} 
            markers={markersDRESETJanuary31} 
        />
        <GenericMap 
            key="DRESET_February9" 
            mapName="DRESET February 9 Walk" 
            isAllMarkers={false} 
            markers={markersDRESETFebruary9} 
        />
        <GenericMap 
            key="DRESET_February17" 
            mapName="DRESET February 17 Walk" 
            isAllMarkers={false} 
            markers={markersDRESETFebruary17} 
        />
        <GenericMap 
            key="DRESET_March2" 
            mapName="DRESET March 2 Walk" 
            isAllMarkers={false} 
            markers={markersDRESETMarch2} 
        />
        <GenericMap 
            key="DRESET_March27_1" 
            mapName="DRESET March 27 (1) Walk" 
            isAllMarkers={false} 
            markers={markersDRESETMarch27_1} 
        />
        <GenericMap 
            key="DRESET_March27_2" 
            mapName="DRESET March 27 (2) Walk" 
            isAllMarkers={false} 
            markers={markersDRESETMarch27_2} 
        />
    </div>
  );
}

export default MultipleMaps;
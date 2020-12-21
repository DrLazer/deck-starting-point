import React, { useState, useEffect } from 'react';
import MapTypes from '../../components/Map/MapTypes';
import Map from '../../components/Map/Map';
import {GeoJsonLayer} from '@deck.gl/layers';

import './accidents.scss';

import SideMenu from '../../components/SideMenu/SideMenu';

// Source data GeoJSON
const DATA_URL = {
  ACCIDENTS:
    'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/highway/accidents.csv',
  ROADS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/highway/roads.json'
};

const viewState = {
  latitude: 38,
  longitude: -100,
  zoom: 4,
  minZoom: 2,
  maxZoom: 8
}

export default function Accidents(props) {
  
  const [accidentData, setAccidentData] = useState({});
  const [geoJsonLayer, setGeoJsonLayer] = useState({});

  useEffect(() => {
      
      const formatRow = d => ({
        ...d,
        incidents: Number(d.incidents),
        fatalities: Number(d.fatalities)
      });
      
      require('d3-request').csv(DATA_URL.ACCIDENTS, formatRow, (error, response) => {
        
        if (!error) {
          setAccidentData(response);
        }

        var geoJson = new GeoJsonLayer({
          id: 'geojson',
          data: DATA_URL.ROADS,
          stroked: false,
          filled: false,
          lineWidthMinPixels: 0.5,
          parameters: {
            depthTest: false
          },
    
          getLineColor: [255,0,0,255],
          getFillColor: [255,0,0,255],
    
          pickable: true,
          onHover: null,
    
          transitions: {
            getLineColor: 1000,
            getLineWidth: 1000
          }
        });

        setGeoJsonLayer(geoJson);

      });
  }, []);

  return (
    <>
      {Object.keys(accidentData).length > 0 && (
        <>
          <div className='accidents-sidebar'>
            <SideMenu/>
          </div>
          <div className='accidents-main-panel'>
            <div className='accidents-main-panel__map-container'>
              <Map
                layers={[geoJsonLayer]}
                type={MapTypes.MAPBOX.DARK} 
                viewState={viewState}
                />
            </div>
          </div>
        </>
      )}
      
    </>
  );

}
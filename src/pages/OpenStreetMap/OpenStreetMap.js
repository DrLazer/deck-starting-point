import React from 'react';
import './openstreetmap.scss';

import SideMenu from '../../components/SideMenu/SideMenu';
import Map from '../../components/Map/Map';
import MapTypes from '../../components/Map/MapTypes';
import OpenStreetMapTileLayer from '../../components/Map/Layers/TileLayers/OpenStreetMapTileLayer';

export default function OpenStreetMap(props) {

  const viewState = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    maxZoom: 20,
    maxPitch: 89,
    pitch: 0,
    bearing: 0
  }

  return (
    <div>
      <div className='mapbox-sidebar'>
        <SideMenu/>
      </div>
      <div className='mapbox-main-panel'>
        <div className='mapbox-main-panel__map-container'>
          <Map 
            layers={[OpenStreetMapTileLayer]}
            type={MapTypes.OPENSTREETMAP}  
            viewState={viewState} />
        </div>
      </div>
    </div>
  )
}
import React from 'react';
import DeckGL from '@deck.gl/react';

/* imports required for mapbox */
import {StaticMap} from 'react-map-gl';
import Settings from '../../Settings'

/* imports required for open street map */
import OpenStreetMapTileLayer from '../Map/Layers/TileLayers/OpenStreetMapTileLayer';
import {MapView} from '@deck.gl/core';

import MapType from '../Map/MapTypes';
import './map.scss';

export default function Map(props) {

  // Viewport settings
  const INITIAL_VIEW_STATE = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    maxZoom: 20,
    maxPitch: 89,
    pitch: 0,
    bearing: 0
  };

  return (
    <div className='content'>

      {props.type === MapType.OPENSTREETMAP && (
        <DeckGL
          layers={[OpenStreetMapTileLayer]}
          views={new MapView({repeat: true})}
          initialViewState={INITIAL_VIEW_STATE}
          controller={true} >
        </DeckGL>
      )}
      
      {/* Mapbox */}
      {props.type !== MapType.OPENSTREETMAP && (
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE} 
          controller={true} >
          <StaticMap 
            mapboxApiAccessToken={Settings.MAPBOX_KEY}
            mapStyle={ props.type } />  
        </DeckGL>
      )}

      
    </div>
  )

}
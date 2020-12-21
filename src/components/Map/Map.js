import React from 'react';
import DeckGL from '@deck.gl/react';
import {StaticMap} from 'react-map-gl'
import {MapView} from '@deck.gl/core';

import Settings from '../../Settings'
import MapType from '../Map/MapTypes';
import './map.scss';

export default function Map(props) {

  var viewState = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    maxZoom: 20,
    maxPitch: 89,
    pitch: 0,
    bearing: 0
  };

  if(props.viewState) {
    viewState = props.viewState;
  }

  return (
    <div className='content'>

        <DeckGL
          layers={props.layers}
          views={new MapView({repeat: true})}
          initialViewState={viewState}
          controller={true} >
          {props.type !== MapType.OPENSTREETMAP && (
            <StaticMap 
              mapboxApiAccessToken={Settings.MAPBOX_KEY}
              mapStyle={ props.type } />  
          )}
        </DeckGL>

    </div>
  )

}
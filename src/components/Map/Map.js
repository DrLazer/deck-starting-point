import React, { useState } from 'react';
import DeckGL from '@deck.gl/react';
import {StaticMap} from 'react-map-gl'
import {MapView} from '@deck.gl/core';

import Settings from '../../Settings'
import MapType from '../Map/MapTypes';
import ControlPanel from '../ControlPanel/ControlPanel';
import './map.scss';

export default function Map(props) {

  const [hoverInfo, setHoverInfo] = useState({});


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
          onHover= {info => { setHoverInfo(info); console.log(info); }}
          layers={props.layers}
          views={new MapView({repeat: true})}
          initialViewState={viewState}
          controller={true} >
          {props.type !== MapType.OPENSTREETMAP && (
            <StaticMap 
              mapboxApiAccessToken={Settings.MAPBOX_KEY}
              mapStyle={ props.type } />  
          )}
          {hoverInfo && hoverInfo.coordinate && (
            <div style={{position: 'absolute', zIndex: 1, pointerEvents: 'none', left: hoverInfo.x, top: hoverInfo.y}}>
              { JSON.stringify(hoverInfo.coordinate) }
            </div>
          )}
        </DeckGL>

        {props.controlPanel && (
          <ControlPanel />
        )}
        
    </div>
  )

}
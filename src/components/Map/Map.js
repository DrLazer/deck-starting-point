import React from 'react';
import DeckGL from '@deck.gl/react';
import {StaticMap} from 'react-map-gl';

import Settings from '../../Settings'
import './map.scss';

export default function Map(props) {

  // Viewport settings
  const INITIAL_VIEW_STATE = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    pitch: 0,
    bearing: 0
  };

  return (
    <div className='content'>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true} >
        <StaticMap mapboxApiAccessToken={Settings.MAPBOX_KEY} />
      </DeckGL>
    </div>
  )

}
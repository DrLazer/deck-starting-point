import React from 'react';
import DeckGL from '@deck.gl/react';

/* imports required for mapbox */
import {StaticMap} from 'react-map-gl';
import Settings from '../../Settings'

/* imports required for open street map */
import {TileLayer} from '@deck.gl/geo-layers';
import {BitmapLayer, PathLayer} from '@deck.gl/layers';
import {MapView} from '@deck.gl/core';

import MapType from '../Map/MapTypes';
import './map.scss';

const devicePixelRatio = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;

export default function Map(props) {

  const showBorder = false;
  const onTilesLoad = null;

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

  const tileLayer = new TileLayer({
    data: [
      'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
      'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
      'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
    ],

    maxRequests: 20,
    pickable: true,
    onViewportLoad: onTilesLoad,
    autoHighlight: showBorder,
    highlightColor: [60, 60, 60, 40],
    // https://wiki.openstreetmap.org/wiki/Zoom_levels
    minZoom: 0,
    maxZoom: 19,
    tileSize: 512 / devicePixelRatio,

    renderSubLayers: props => {
      const {
        bbox: {west, south, east, north}
      } = props.tile;

      return [
        new BitmapLayer(props, {
          data: null,
          image: props.data,
          bounds: [west, south, east, north]
        }),
        showBorder &&
          new PathLayer({
            id: `${props.id}-border`,
            visible: props.visible,
            data: [[[west, north], [west, south], [east, south], [east, north], [west, north]]],
            getPath: d => d,
            getColor: [255, 0, 0],
            widthMinPixels: 4
          })
      ];
    }
  });

  return (
    <div className='content'>

      {props.type == MapType.MAPBOX.LIGHT && (
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller={true} >
          <StaticMap mapboxApiAccessToken={Settings.MAPBOX_KEY} />  
        </DeckGL>
      )}

      {props.type == MapType.OPENSTREETMAP && (
        <DeckGL
          layers={[tileLayer]}
          views={new MapView({repeat: true})}
          initialViewState={INITIAL_VIEW_STATE}
          controller={true} >
        </DeckGL>
      )}

      
    </div>
  )

}
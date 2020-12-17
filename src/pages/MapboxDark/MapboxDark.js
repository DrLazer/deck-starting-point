import React from 'react';
import './mapbox-dark.scss';

import SideMenu from '../../components/SideMenu/SideMenu';
import Map from '../../components/Map/Map';
import MapTypes from '../../components/Map/MapTypes';

export default function MapboxDark(props) {
  return (
    <div>
      <div className='mapbox-sidebar'>
        <SideMenu/>
      </div>
      <div className='mapbox-main-panel'>
        <div className='mapbox-main-panel__map-container'>
          <Map type={MapTypes.MAPBOX.DARK}/>
        </div>
      </div>
    </div>
  )
}
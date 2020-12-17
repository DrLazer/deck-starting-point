import React from 'react';
import './openstreetmap.scss';

import SideMenu from '../../components/SideMenu/SideMenu';
import Map from '../../components/Map/Map';
import MapTypes from '../../components/Map/MapTypes';

export default function OpenStreetMap(props) {
  return (
    <div>
      <div className='mapbox-sidebar'>
        <SideMenu/>
      </div>
      <div className='mapbox-main-panel'>
        <div className='mapbox-main-panel__map-container'>
          <Map type={MapTypes.OPENSTREETMAP}/>
        </div>
      </div>
    </div>
  )
}
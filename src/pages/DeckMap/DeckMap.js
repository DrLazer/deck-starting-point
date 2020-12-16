import React from 'react';
import './deck-map.scss';

import SideMenu from '../../components/SideMenu/SideMenu';
import Map from '../../components/Map/Map';

export default function DeckMap(props) {
  return (
    <div>
      <div className='deck-map-sidebar'>
        <SideMenu/>
      </div>
      <div className='deck-map-main-panel'>
        <Map/>
      </div>
    </div>
  )
}
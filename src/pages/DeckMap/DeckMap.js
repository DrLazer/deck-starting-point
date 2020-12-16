import React from 'react';
import './deck-map.scss';

import SideMenu from '../../components/SideMenu/SideMenu';

export default function DeckMap(props) {
  return (
    <div>
      <div className='deck-map-sidebar'>
        <SideMenu/>
      </div>
      <div className='deck-map-main-panel'>
        {props.children}
      </div>
    </div>
  )
}
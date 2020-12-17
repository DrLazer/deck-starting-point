import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import SideMenuItem from '../SideMenuItem/SideMenuItem';

import './side-menu.scss';

export default function SideMenu(props) {

  const links = [{
    text: 'Deck, Mapbox Light', url: '/', icon: 'MapIcon', 
  }, {
    text: 'Deck, Mapbox Dark', url: '/dark', icon: 'MapIcon', 
  }, { 
    text: 'Deck, OpenStreetMap', url: '/openstreetmap', icon: 'MapIcon'
  }]

  return (
    <div className='side-menu'>
      <div className='side-menu__list'>
        <MenuList>
          { links.map((link) => (
            <SideMenuItem 
              key={link.text}
              text={link.text}
              icon={link.icon}
              url={link.url} />
          )) }
        </MenuList>
      </div>
    </div>
  )
}
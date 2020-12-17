import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import SideMenuItem from '../SideMenuItem/SideMenuItem';

import './side-menu.scss';

export default function SideMenu(props) {

  const links = [
    { text: 'Mapbox Light', url: '/', icon: 'MapIcon' },
    { text: 'Mapbox Dark', url: '/dark', icon: 'MapIcon' },
    { text: 'Mapbox Street', url: '/street', icon: 'MapIcon' },
    { text: 'Mapbox Outdoors', url: '/outdoors', icon: 'MapIcon' },
    { text: 'Mapbox Satellite', url: '/satellite', icon: 'MapIcon' },
    { text: 'OpenStreetMap', url: '/openstreetmap', icon: 'MapIcon'},
    { text: 'Accidents', url: '/accidents', icon: 'CarIcon'}
  ]

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
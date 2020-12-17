import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import SideMenuItem from '../SideMenuItem/SideMenuItem';

import './side-menu.scss';

export default function SideMenu(props) {

  const links = [{
    text: 'Deck - Mapbox', url: '/', icon: 'DescriptionIcon'
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
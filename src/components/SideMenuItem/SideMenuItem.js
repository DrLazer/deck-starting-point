import React from 'react';
import { NavLink } from "react-router-dom";
import { MenuItem, ListItemIcon, Typography } from '@material-ui/core';

import DescriptionIcon from '@material-ui/icons/Description';

import './side-menu-item.scss';

export default function SideMenuItem(props) {
  
  const iconsMap = { DescriptionIcon }

  const IconTag = iconsMap[ props.icon ]
  
  return (
    <NavLink 
      exact
      to={props.url}>
      <MenuItem>
        <ListItemIcon className='side-menu__list__icon-container'>
          <IconTag className='side-menu__list__icon' fontSize='small'/>
        </ListItemIcon>
        <Typography className='side-menu__list__link' variant='inherit' noWrap>
          {props.text}
        </Typography>
      </MenuItem>
    </NavLink>
  )
}
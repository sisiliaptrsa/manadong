import React, { useState } from 'react';
import Manadong from '../Assets/manadong.svg'
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const menuOptions = [
    {
      text: "Home",
      icon:<HomeIcon />,
    },
    {
      text: "Eatery",
      icon:<InfoIcon />,
    },
    {
      text: "News",
      icon:<CommentRoundedIcon />,
    },
    {
      text: "About Us",
      icon:<PhoneRoundedIcon />,
    },
  ]

  return (
    <nav>
      <div className='nav-logo-container'>
        <img src={Manadong} alt=""/>
      </div>
      <div className='navbar-links-container'>
        <Link to="/#home">Home</Link>
        <Link to="">Eatery</Link>
        <Link to="">News</Link>
        <Link to="/about">About Us</Link>
      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
        <Box sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)} >
          
          <List>
            {menuOptions.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar
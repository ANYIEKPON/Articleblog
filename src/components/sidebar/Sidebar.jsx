import React from 'react';
import { Facebook, Twitter, Pinterest, Instagram } from '@mui/icons-material';

import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img 
              src="http://webmeup.com/upload/blog/lead-image-105.png" 
              alt="" 
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore minima consectetur 
              iusto ad quod eaque eveniet sit reprehenderit.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sport</li>
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span> 
            <div className="sidebarSocial">
                <div className='sidebarIcon'><Facebook /></div>
                <div className='sidebarIcon'><Twitter /></div>
                <div className='sidebarIcon'><Instagram /></div>
                <div className='sidebarIcon'><Pinterest /></div>
            </div> 
        </div>
    </div>
  )
}

export default Sidebar;
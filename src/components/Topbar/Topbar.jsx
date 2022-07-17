import React from 'react';
import { Facebook, Twitter, Pinterest, Instagram, Search } from '@mui/icons-material';
import { NavLink } from 'react-router-dom'
import '../styles/Topbar.css';

function Topbar() {
  const user = false;
  return (
    <div className='top'>
            <div className='topLeft'>
                <div className='topIcon'><Facebook /></div>
                <div className='topIcon'><Twitter /></div>
                <div className='topIcon'><Instagram /></div>
                <div className='topIcon'><Pinterest /></div>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className='topListItem'><NavLink to='/'>HOME</NavLink></li>
                   <li className='topListItem'> <NavLink to='/about'>ABOUT</NavLink></li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'><NavLink to='/write'>WRITE</NavLink></li>
                    <li className='topListItem'>{user && 'LOGOUT'}</li>
                </ul>
            </div>
            <div className='topRight'>{
              user ? (
                <img 
                src="https://www.bgsbuniversity.org/wp-content/uploads/2021/08/Top-Handsome-Man-in-World-Brad-Pitt.jpg" 
                alt="" 
                className='topImg' />
              ) : ( 
                <>
                <div className='topListItem'><NavLink to='/login' >LOGIN</NavLink></div>
                <div className='topListItem'><NavLink to='/register' >REGISTER</NavLink></div>
                </>
              )
            }  
                <div className='searchIcon'><Search /></div>
            </div>
    </div>
  )
}

export default Topbar;
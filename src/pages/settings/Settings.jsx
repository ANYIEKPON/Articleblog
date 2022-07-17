import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { PersonOutline } from '@mui/icons-material';
import './Settings.css'

function Settings() {
  return (
    <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className='settingsUpdateTitle'>Update Your Acount</span>
                    <span className='settingsDeleteTitle'>Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img 
                            src="https://pixta.jp/img/og-image.jpg" 
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <PersonOutline className='settingsPPIcon' />
                        </label>
                        <input type="file" id='fileInput' style={{display: 'none'}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='King' />
                    <label>Email</label>
                    <input type="email" placeholder='king@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
            <Sidebar />
    </div>
  )
}

export default Settings;
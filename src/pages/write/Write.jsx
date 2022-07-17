import React from 'react';
import { Add } from '@mui/icons-material';
import './Write.css'


function Write() {
  return (
    <div className='write'>
        <img 
            className='writeImg'
            src="https://pixta.jp/img/og-image.jpg" 
            alt="" 
            />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput" className='add'><Add className='writeIcon' /></label>
                <input type="file" id='fileInput' style={{display: 'none'}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your Story...' type='text' className='writeInput writeText'></textarea>
            </div>
            <div className="writeSubmit">Publish</div>
        </form>
    </div>
  )
}

export default Write;
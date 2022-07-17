import React from 'react';
import '../styles/Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitlesSm'>React & Node</span>
            <span className='headerTitlesLg'>Blog</span>
        </div>
        <div>
            <img 
                className='headerImg' 
                src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300" 
                alt="" 
            />

        </div>

    </div>
  )
}

export default Header;
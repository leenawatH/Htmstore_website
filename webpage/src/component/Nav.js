import React from 'react';
import '../css/App.css';

function Navbar(){
    return <header className='Navbar'>
                <div className='left-Nav'>
                    <img src = {require('../img/logo/logo.png')} width = '3%'/>
                </div>
                <div className='mid-Nav'>
                    <a className='inNav'>Home</a>
                    <a className='inNav'>Catagories</a>
                    <a className='inNav'>About us</a>
                </div>
                <div className='right-Nav'>
                    <img src = {require('../img/nav/face_logo.png')} width = '2%' className='imginright'/>
                    <img src = {require('../img/nav/line_logo.png')} width = '2%' className='imginright'/>
                    
                    
                </div>
           </header>
}

export default Navbar;
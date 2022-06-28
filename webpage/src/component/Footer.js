import React from 'react';
import '../css/App.css';

function Footer(){
    return <footer className='footer'>
                <div className='top'>
                    <div className='left'>
                        <img src = {require('../img/logo/logo.png')} width = '20%'className='logo'/>
                        <a>ฮ้อตงหมง</a>
                    </div>
                </div>
           </footer>
}

export default Footer;
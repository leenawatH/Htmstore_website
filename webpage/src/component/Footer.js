import React from 'react';
import '../css/App.css';

function Footer(){
    return <footer className='footer'>
                <div className='footer-top'>
                    <div className='footer-top-data a1'>
                        <img src = {require('../img/logo/logo.png')} width = '8%'className='logo'/>
                        <a>ฮ้อตงหมง</a>
                        <p className='description'>ร้านขายสี เเละอุปกรณ์ก่อสร้าง ____________<br></br>__________________</p>
                    </div>
                    <div className='footer-top-data a2'>
                        <p className='footer-header'>สินค้า</p>
                        <p className='list_product'>สีทาบ้าน</p>
                        <p className='list_product'>อุปกรณ์ก่อสร้าง</p>
                        <p className='list_product'>สีพ่นรถยนต์</p>
                    </div>
                    <div className='footer-top-data a3'>
                        <p className='footer-header'>ติดตามข่าวสาร</p>
                        <img src = {require('../img/footer/face_logo_black.png')} width = '10%' className='footer-logo'/>
                        <img src = {require('../img/footer/line_logo_black.png')} width = '10%' className='footer-logo'/>
                        
                        <p className='footer-email'>E-mail</p>
                        <p className='list_product'>test@gmail.com</p>
                    </div>
                </div>
           </footer>
}

export default Footer;
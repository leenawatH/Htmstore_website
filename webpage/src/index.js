import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './component/Nav';
import Top_left_container from './component/home-page/top-container';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='homepage'>
    <Navbar/>
    <Top_left_container/>
  </div>
);


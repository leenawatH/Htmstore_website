import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './component/Nav';
import Top_left_container from './component/home-page/top-container';
import List_of_type_product from './component/home-page/box-of-product-list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='homepage'>
    <Navbar/>
    <Top_left_container/>
    <List_of_type_product/>
  </div>
);


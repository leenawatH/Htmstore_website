import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './component/Nav';
import Top_left_container from './component/home-page/top-container';
import List_of_type_product from './component/home-page/box-of-product-list';
import List_of_brand_partnership from './component/home-page/list-of-brand-partnership';
import Footer from './component/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='homepage'>
    <Navbar/>
    <Top_left_container/>
    <List_of_type_product/>
    <List_of_brand_partnership/>
    <Footer/>
  </div>
);


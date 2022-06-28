import React from "react";
import '../../css/App.css';


function Container(){
    return      <div className="container">
                    <div className="top-container left">
                            <a className="title-eng">Hor Tong Mong</a><br></br>
                            <a className="title">ฮ้อตงหมง</a>
                            <p className="description">ร้านขายอุปกรณ์ก่อสร้าง สีทาบ้าน </p>
                            <button type="button" class="btn btn-warning btn-lg">See Catagories</button>
                    </div>
                    <div className="top-container right">
                            <img src = {require('../../img/top-right-container/top-right-container.png')} width = '90%'/>
                    </div>
                </div>
                
           


}

export default Container;
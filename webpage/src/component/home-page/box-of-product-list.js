import React from "react";
import '../../css/App.css';


function Boxproductlist(){
    return  <div className="box_of_product">
                <a>ประเภทสินค้า</a>
                <hr className="hr"></hr>
                <div className ="row">
                    <div className="column">
                        <img className="img" src= {require('../../img/typeofproduct/Solid_blue.png')} width = '100%'></img>
                    </div>
                    <div className="column">
                        <img className="img" src= {require('../../img/typeofproduct/Solid_red.png')} width = '100%'></img>
                    </div>
                    <div className="column">
                        <img className="img" src= {require('../../img/typeofproduct/Solid_green.png')} width = '100%'></img>
                    </div>
                    <div className="column">
                        <img className="img" src= {require('../../img/typeofproduct/Solid_gray.png')} width = '100%'></img>
                    </div>
                    <div className="column">
                        <img className="img" src= {require('../../img/typeofproduct/Solid_white.png')} width = '100%'></img>
                    </div>
                    <div className="column">
                        <img className="img" src= {require('../../img/typeofproduct/Solid_blue.png')} width = '100%'></img>
                    </div>
            </div>
        </div>
           


}

export default Boxproductlist;
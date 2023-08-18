import {Link} from "react-router-dom";
import React from 'react';
import { ImLocation } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import { IoIosMan } from "react-icons/io";
import { BiDownArrowAlt } from "react-icons/bi";
import {GoDotFill} from "react-icons/go"

import "./index.css"; 

const DisplayProduct = (props) => {
  const { product } = props;
  const  {id,image,model,ecolor,batteryType,location,paragraph,price,pulishDate,year,miles,carNumber,pilot,software,type,condition,icolor}=product;


  return (
    
    <div className="product-container">
    <Link className="link-id-container" to={`/alllisting/${id}`}><div><img src={image} alt={model} className="img-container"/></div></Link>
        <div className="deatails-container">
            <h5>{model} | {year} | {ecolor} | {batteryType}</h5>
            <div className="basic-line">
                <p className="horizontal-line"><ImLocation/><span>{location}</span></p>
                <p className="horizontal-line"><SlCalender/><span>{pulishDate}</span></p>
                <p className="horizontal-line"><IoIosMan/><span>{pilot}</span></p>
                <p className="horizontal-line"># {carNumber}</p>
            </div>
            <div className="basic-line">
                <p className="horizontal-line"><GoDotFill/><span>{icolor}</span></p>
                <p className="horizontal-line"><GoDotFill/><span>{software}</span></p>
                <p className="horizontal-line"><GoDotFill/><span>{type}</span></p>
            </div>
            <p style={{fontSize: "12px"}}>{paragraph}</p>
            <div className="basic-extra-line">
                <p className="horizontal-line"><BiDownArrowAlt/>{price}</p>
                <div className="basic-line">
                    <p style={{paddingRight: "15px", fontSize: "12px"}}>{miles} Miles</p>
                    <p style={{fontSize: "12px"}}><span>condition :</span> {condition}</p>
                </div>
            </div>
        </div>

      
    </div>
  );
}

export default DisplayProduct;
import {useState} from "react";
import Header from "../Header";
import React from 'react';
import Slider from 'react-slick';
import Footer from "../Footer";
import ThumbnailItem from "../ThumbnailItem";
import {BsFillArrowUpRightSquareFill} from "react-icons/bs";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./index.css";

const shippingParagraph = "Get this Tesla delivered to your doorstep. Book with ease a fully insured carrier for shipping with a locked in price."
const financeParagraph = "Find the best finance deals for your new Tesla via AUTOPAY Autopay.";
const insuranceParagraph = "Get insurance quotes for your new vehicle via Dealer Policy";
const shippingButton="CHECK COSTS";
const financeButton = "APPLY FOR FINANCE";
const insuranceButton = "APPLY FOR INSURANCE";
const sellerComments="Used 2021 Tesla Model Y in excellent condition, garage kept. Full Self Driving feature tranfers to new owner ($15k value). Recently purchased tires (Dec 2022). 21 Ubertturbine RIMS. Recently applied 5 year clear coating (June 2023)."

const vehicleDetails = [{
    
        model: "Model: Model S",
        registration: "Registration: Nov 2020",
        year: "Model Year: 2021",
        battery: "Lpng Range",
        est: "Est. Baattery Loss From Original Range 0%",
        color: "Extrrior Color: Black and White",
        tyres: "Wheels: Excellent",
        seating: "5 Seater",
        owner: "Owner: First on you",
        software: "Software: Full Self Driving",
        wheel: "Wheel/rim: Excellent",
        number: "Demage Vehicle: No",
        use: "Vehicle Use: Personal",

} 
    
]
const features=[
{
    alarm: "Alarm",
    camera: "Backup Camera",
    sensor: "Bind Spot Sensor",
    bluetooth: "Bluetooth Phone Connectivity",
    system: "Collision Warning System",
    entry: "Keyless Entry",
    lite: "LED Lighting system",
    nav :"Navigation System",
    seat: "Power Seats",
    roof: "Sun/Moon Roof",
    leather: "Leather Upholstery",
    roo: "Power Mirrors",
    mirror: "Power Mirrors"
}


]
const table = [
    {id: 1,name: "Window Tints", content: "Tinted Front and back side Windows"},
    {id: 2,name: "Wheels", content: "21* Uberturbine RIMS with new tires purchased in December 2022"},
    {id: 3,name: "Chrome Delete", content: "Black Tesla symbols on front and back along with black Dual Motor lettring"}
]

const products = [
    {
        id: 1,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "silver",
        location: "Myrtle Beach, South Carolina",
        price: "$49k",
        icolor: "All Black",
        condition: "Excellent",
        batteryType: "Longe Range",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2014",
        model:"model s",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"for sale"
    },
    {
        id: 2,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "silver",
        location: "Myrtle Beach, South Carolina",
        price: "$12k",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        icolor: "All Black",
        condition: "Excellent",
        batteryType: "Longe Range",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2010",
        model:"model m",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"for sale"
    },
    {
        id: 3,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "grey",
        location: "Myrtle Beach, South Carolina",
        price: "$21k",
        icolor: "All Black",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        condition: "Excellent",
        batteryType: "Longe Range",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2013",
        model:"model k",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"for sale"
    },
    {
        id: 4,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "grey",
        location: "Myrtle Beach, South Carolina",
        price: "$9k",
        icolor: "All Black",
        condition: "Excellent",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        batteryType: "Longe Range",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2012",
        model:"model j",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"Lease"
    },
    {
        id: 5,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "black",
        location: "Myrtle Beach, South Carolina",
        price: "$25k",
        icolor: "All Black",
        condition: "Excellent",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        batteryType: "Longe Range",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2011",
        model:"model s",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"for sale"
    },
    {
        id: 6,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "silver",
        location: "Myrtle Beach, South Carolina",
        price: "$55k",
        icolor: "All Black",
        condition: "Excellent",
        batteryType: "Longe Range",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2016",
        model:"model s",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"Lease"
    },
    {
        id: 7,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "silver",
        location: "Myrtle Beach, South Carolina",
        price: "$49k",
        icolor: "All Black",
        condition: "Excellent",
        batteryType: "Longe Range",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2014",
        model:"model s",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"for sale"
    },
    {
        id: 8,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "silver",
        location: "Myrtle Beach, South Carolina",
        price: "$49k",
        icolor: "All Black",
        condition: "Excellent",
        batteryType: "Longe Range",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2014",
        model:"model s",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"for sale"
    },
    {
        id: 9,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "silver",
        location: "Myrtle Beach, South Carolina",
        price: "$49k",
        icolor: "All Black",
        condition: "Excellent",
        batteryType: "Longe Range",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2014",
        model:"model s",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"for sale"
    },
    {
        id: 10,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "silver",
        location: "Myrtle Beach, South Carolina",
        price: "$49k",
        icolor: "All Black",
        condition: "Excellent",
        batteryType: "Longe Range",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2014",
        model:"model s",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"for sale"
    },
    {
        id: 11,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "silver",
        location: "Myrtle Beach, South Carolina",
        price: "$49k",
        icolor: "All Black",
        condition: "Excellent",
        batteryType: "Longe Range",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2014",
        model:"model s",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"for sale"
    },
    {
        id: 12,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "silver",
        location: "Myrtle Beach, South Carolina",
        price: "$49k",
        icolor: "All Black",
        condition: "Excellent",
        batteryType: "Longe Range",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2014",
        model:"model s",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"for sale"
    },
    {
        id: 13,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "silver",
        location: "Myrtle Beach, South Carolina",
        price: "$49k",
        icolor: "All Black",
        condition: "Excellent",
        batteryType: "Longe Range",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2014",
        model:"model s",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"for sale"
    },
    {
        id: 14,
        image: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        ecolor: "silver",
        location: "Myrtle Beach, South Carolina",
        price: "$49k",
        icolor: "All Black",
        condition: "Excellent",
        batteryType: "Longe Range",
        software: "Full Self Driving",
        pilot:"Enhanced Autopilot",
        miles: "68579",
        year: "Nov 2014",
        model:"model s",
        paragraph: "As the only owner of this vehicle, I have taken care of this car as good as brand new. I spent around 4K for PPF front protection, ceramic tints and",
        pulishDate: "31/01/2023",
        carNumber: "DTL818",
        type:"for sale"
    },
]

const ListingDetail= () =>{
    const [activeId, setActiveId] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        autoplay: true, 
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        
      };
      const setting = {
        dots: true,
        infinite: true,
        speed: 1200,
        autoplay: true,  
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        
      }; 

      const setActiveThumbnailId = id=>{
        setActiveId(id);
      }

    return(
        <div>
            <Header/>
            <div className="container">
                <div className="app-container">
                    <div className="gallery-container">
                        <h3>Model s | Nov 20 | Long Range | Grey</h3>
                        {products[activeId] ? (
                            <img src={products[activeId].image} className="selected-image" alt="img" />
                          ) : (
                            <p>No image available</p>
                          )}
                        <h1 className="heading">Car Image {activeId}</h1>
                        <p className="description">Model Image of Car</p>
                        <ul className="thumbnails-list">
                            {products.map(eachImage => (
                                <ThumbnailItem
                                    key={eachImage.id}
                                    imageDetails={eachImage}
                                    isActive={activeId === eachImage.id}
                                    setActiveThumbnailId={setActiveThumbnailId}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="gallery-containers">
                        <div>
                            <h3>Seller Comments</h3>
                            <p>{sellerComments}</p>
                        </div>
                        <div >
                            <h3>Vehicle Details</h3>
                            <div className="vehicle-details-container">
                                <p><BsFillArrowUpRightSquareFill/>{vehicleDetails[0].model}</p>
                                <p><BsFillArrowUpRightSquareFill/>{vehicleDetails[0].registration}</p>
                                <p><BsFillArrowUpRightSquareFill/>{vehicleDetails[0].year}</p>
                                <p><BsFillArrowUpRightSquareFill/>{vehicleDetails[0].owner}</p> 
                                <p><BsFillArrowUpRightSquareFill/>{vehicleDetails[0].tyres}</p>
                                <p><BsFillArrowUpRightSquareFill/>{vehicleDetails[0].wheel}</p>
                                <p><BsFillArrowUpRightSquareFill/>{vehicleDetails[0].number}</p>
                                <p><BsFillArrowUpRightSquareFill/>{vehicleDetails[0].use}</p>
                                <p><BsFillArrowUpRightSquareFill/>{vehicleDetails[0].seating}</p>
                                <p><BsFillArrowUpRightSquareFill/>{vehicleDetails[0].battery}</p>
                                <p><BsFillArrowUpRightSquareFill/>{vehicleDetails[0].color}</p>
                                <p><BsFillArrowUpRightSquareFill/>{vehicleDetails[0].software}</p>
                                <p><BsFillArrowUpRightSquareFill/>{vehicleDetails[0].est}</p>
                            </div>
                        </div>
                        <div >
                        <h3>Features</h3>
                        <div className="vehicle-details-container">
                            <p><BsFillArrowUpRightSquareFill/>{features[0].alarm}</p>
                            <p><BsFillArrowUpRightSquareFill/>{features[0].camera}</p>
                            <p><BsFillArrowUpRightSquareFill/>{features[0].sensor}</p>
                            <p><BsFillArrowUpRightSquareFill/>{features[0].system}</p>
                            <p><BsFillArrowUpRightSquareFill/>{features[0].entry}</p>
                            <p><BsFillArrowUpRightSquareFill/>{features[0].lite}</p>
                            <p><BsFillArrowUpRightSquareFill/>{features[0].nav}</p>
                            <p><BsFillArrowUpRightSquareFill/>{features[0].roof}</p>
                            <p><BsFillArrowUpRightSquareFill/>{features[0].leather}</p>
                            <p><BsFillArrowUpRightSquareFill/>{features[0].roo}</p>
                            <p><BsFillArrowUpRightSquareFill/>{features[0].mirror}</p>
                            <p><BsFillArrowUpRightSquareFill/>{features[0].bluetooth}</p>
                        </div>
                        <div>
                        <h3>After Market</h3>
                        <table className='my-table'>
                            <thead>
                                <tr>
                                    <th >TYPE</th>
                                    <th >DETAILS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table.map(item => (
                                    <tr key={item.id}>
                                        <td >{item.name}</td>
                                        <td >{item.content}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>              
                    </div>
                    </div>
                </div>
                <div className="car-container"> 
                    <ul className="car-details">
                        <li className="li-condition">CONDITION: EXCELLENT</li>
                        <li className="li-condition">INTERIOR COLOR: BLACK AND WHITE</li>
                        <li className="li-condition">SOFTWARE: FULL SELF DRIVING</li>
                        <li className="li-condition">MILES DRIVEN: 44610 MILES</li>
                        <li className="li-condition">LOCATION: LEESBURG, VIRGINIA</li>
                        <li className="li-condition">VEHICLE CONDITION: EXCELLENT</li>
                        <li className="li-condition">VIN#: 5YJYGDEE7MF073898</li>
                        <li className="li-condition">AUTOPILOT:  HW-3.0, AUTOPILOT 1, AUTOPILOT 2 ENHANCED</li>
                        <li className="li-condition">EXTERIOR COLOR: GREY</li>
                    </ul>
                    <div className="details-about-something">
                        <h3 style={{borderBottom: "1px solid grey", paddingBottom: "10px"}}>Check Shipping Costs</h3>
                        <p>{shippingParagraph}</p>
                        <button type="button">{shippingButton}</button>
                    </div>
                    <div  className="details-about-something">
                        <h3 style={{borderBottom: "1px solid grey", paddingBottom: "10px"}}>Finance</h3>
                        <p>{financeParagraph}</p>
                        <button type="button">{financeButton}</button>
                    </div>
                    <div  className="details-about-something">
                        <h3 style={{borderBottom: "1px solid grey", paddingBottom: "10px"}}>Insurance</h3>
                        <p>{insuranceParagraph}</p>
                        <button type="button">{insuranceButton}</button>
                    </div>
                </div>
               
                </div>
                <h3 style={{paddingLeft: "40px"}}>Similar Listing</h3>
                <div className="product-slider">
                <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id} className="product-card">
                    <div className="product-image">
                        <img src={product.image} alt={`Product ${product.id}`} />
                    </div>
                    <div className="product-info">
                        <h3>{product.model}</h3>
                        <p>Price: {product.price}</p>
                        <p>Year: {product.year}</p>
                    </div>
                    </div>
                ))}
                </Slider>
            </div>
            <div className="products-sliders">
                <Slider {...setting}>
                    {products.map(product => (
                    <div key={product.id} className="products-cards">
                        <div className="product-image">
                        <img src={product.image} alt={`Product ${product.id}`} />
                        </div>
                        <div className="product-info">
                        <h3>{product.model}</h3>
                        <p>Price: {product.price}</p>
                        <p>Year: {product.year}</p>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
            <Footer/>
            
        </div>
    )

}
export default ListingDetail;
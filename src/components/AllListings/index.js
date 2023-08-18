import { useNavigate } from "react-router-dom";
import React, { useState} from "react";
import Header from "../Header";
import DisplayProduct from "../DisplayProduct";
import Footer from "../Footer";

import "./index.css";



const productsData = [
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
    }
]

const AllListings = () => {
    const navigate = useNavigate();
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedModels, setSelectedModels] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);


    const updateQueryParams = () => {
        const queryParams = new URLSearchParams();
        selectedTypes.forEach((type) => {
          queryParams.append("type", type);
        });
    
        selectedModels.forEach((model) => {
          queryParams.append("model", model);
        });
      
        selectedColors.forEach((color) => {
          queryParams.append("color", color);
        });
      
        navigate(`?${queryParams.toString()}`, { replace: true });
      };

  const filteredProducts = productsData.filter((product) => {
    const typeMatch =
      selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const modelMatch =
      selectedModels.length === 0 || selectedModels.includes(product.model);
    const colorMatch =
      selectedColors.length === 0 || selectedColors.includes(product.ecolor);

    return typeMatch && modelMatch && colorMatch;
  });

  const handleTypeCheckboxChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
    updateQueryParams();
  };

  const handleModelCheckboxChange = (model) => {
    if (selectedModels.includes(model)) {
      setSelectedModels(selectedModels.filter((m) => m !== model));
    } else {
      setSelectedModels([...selectedModels, model]);
    }
    updateQueryParams();
  };

  const handleColorCheckboxChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
    updateQueryParams();
  };
  return (
    <div>
      <Header />
      <div className="products-filters">
        <div className="filter-arrange">

          <div>
                <h3 style={{border: "1px solid grey", width: "25vw", height: "25px", fontSize: "18px" }}>Model</h3>
                <input type="checkbox" id="model s" style={{marginLeft: "15px"}} 
                onChange={() => handleModelCheckboxChange("model s")}/>
                <label htmlFor="model s">Model S</label>
                <br/>
                <input type="checkbox" id="model m" style={{marginLeft: "15px"}} 
                onChange={() => handleModelCheckboxChange("model m")}/>
                <label htmlFor="model m">Model M</label>
                <br/>
                <input type="checkbox" id="model k" style={{marginLeft: "15px"}} 
                onChange={() => handleModelCheckboxChange("model k")}/>
                <label htmlFor="model k">Model K</label>
                <br/>
                <input type="checkbox" id="model j" style={{marginLeft: "15px"}}
                onChange={() => handleModelCheckboxChange("model j")}/>
                <label htmlFor="model j">Model J</label>
          </div>
          <div>
            <h3 style={{border: "1px solid grey", width: "25vw", height: "25px", fontSize: "18px"}}>Type</h3>
            <input type="checkbox" id="Lease" style={{marginLeft: "15px"}} 
            onChange={() => handleTypeCheckboxChange("Lease")}/>
            <label htmlFor="Lease">Lease</label>
            <br/>
            <input type="checkbox" id="for sale" style={{marginLeft: "15px"}} 
            onChange={() => handleTypeCheckboxChange("for sale")}/>
            <label htmlFor="for sale">For Sale</label>
            <br/>
            <input type="checkbox" id="action" style={{marginLeft: "15px"}}
            onChange={()=> handleTypeCheckboxChange("action")}/>
            <label htmlFor="action">Action</label>
            
          </div>
          <div>
            <h3 style={{border: "1px solid grey", width: "25vw", height: "25px", fontSize: "18px"}}>Exterior Color</h3>
            <input type="checkbox" id="silver" style={{marginLeft: "15px"}} onChange={()=> handleColorCheckboxChange("silver")}/>
            <label htmlFor="silver">Silver</label>
            <br/>
            <input type="checkbox" id="black" style={{marginLeft: "15px"}} onChange={()=> handleColorCheckboxChange("black")}/>
            <label htmlFor="black">Black</label>
            <br/>
            <input type="checkbox" id="grey" style={{marginLeft: "15px"}} onChange={()=> handleColorCheckboxChange("grey")}/>
            <label htmlFor="grey">Grey</label>
            
          </div>
        </div>

        <div className="ul-list">
          {filteredProducts.length === 0 ? (
            <p className="empty-set">No items found</p>
          ) : (
            filteredProducts.map((productItem) => (
              <DisplayProduct key={productItem.id} product={productItem} />
            ))
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AllListings;
import {useState} from "react"
import Header from "../Header";
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

import "./index.css"

const models = [
    {
    id:1,
    name:"model S"
    },
    {
        id:2,
        name:"model m"
        },
        {
            id:3,
            name:"model k"
            },
            {
                id:4,
                name:"model j"
                },
]

const prices =[
  {id:1,
  amount: "$10k"},
  {id:2,
    amount: "$10k - $20k"},
    {id:3,
      amount: "$20k - $30k"},
      {id:4,
        amount: "$30k - $40k"},
]

const mainHeading="List And Sell Your Bookngogo For Just $89.00";
const mainParagraph="Selling a used Bookngogo has never been so quick, easy & convenient. Click here to have a look at our features.";

const years =[
  {id:1,
  year: "2010"},
  {id:2,
    year: "2011"},
    {id:3,
      year: "2012"},
      {id:4,
        year: "2013"},
]

const images = [
  {id: 1,
  imgs: "https://res.cloudinary.com/dtor1u6gh/image/upload/v1691754724/photo-1502877338535-766e1452684a_wendka.avif",name: "model a beautiful condition"},
  {id: 2,
    imgs: "https://res.cloudinary.com/dtor1u6gh/image/upload/v1691754724/photo-1502877338535-766e1452684a_wendka.avif",name: "model b beautiful condition"},
    {id: 3,
      imgs: "https://res.cloudinary.com/dtor1u6gh/image/upload/v1691754724/photo-1502877338535-766e1452684a_wendka.avif",name: "model c beautiful condition"},
      {id: 4,
        imgs: "https://res.cloudinary.com/dtor1u6gh/image/upload/v1691754724/photo-1502877338535-766e1452684a_wendka.avif",name: "model d beautiful condition"},
        {id: 5,
          imgs: "https://res.cloudinary.com/dtor1u6gh/image/upload/v1691754724/photo-1502877338535-766e1452684a_wendka.avif",name: "model e beautiful condition"},
          {id: 6,
            imgs: "https://res.cloudinary.com/dtor1u6gh/image/upload/v1691754724/photo-1502877338535-766e1452684a_wendka.avif",name: "model f beautiful condition"},
            {id: 7,
              imgs: "https://res.cloudinary.com/dtor1u6gh/image/upload/v1691754724/photo-1502877338535-766e1452684a_wendka.avif",name: "model g beautiful condition"},
              {id: 8,
                imgs: "https://res.cloudinary.com/dtor1u6gh/image/upload/v1691754724/photo-1502877338535-766e1452684a_wendka.avif",name: "model h beautiful condition"},
                {id: 9,
                  imgs: "https://res.cloudinary.com/dtor1u6gh/image/upload/v1691754724/photo-1502877338535-766e1452684a_wendka.avif",name: "model i beautiful condition"},
                  {id: 10,
                    imgs: "https://res.cloudinary.com/dtor1u6gh/image/upload/v1691754724/photo-1502877338535-766e1452684a_wendka.avif",name: "model j beautiful condition"},
                    {id: 11,
                      imgs: "https://res.cloudinary.com/dtor1u6gh/image/upload/v1691754724/photo-1502877338535-766e1452684a_wendka.avif",name: "model k beautiful condition"},
        
]




const Home =()=>{
  const [number, setNumber]=useState(0);
  const [numbers, setNumbers]=useState(3);
  const [num, setNum]=useState(0);
  const [nums, setNums]=useState(1);
  const navigate = useNavigate();
  const imh = images.slice(number,numbers)
  const imhh=images.slice(num,nums)

  const handleSearch = () => {
    navigate("/alllisting");
  };

  const downButton = () => {
    if (number > 0) {
      setNumber((prevNumber) => Math.max(prevNumber - 3, 0));
      setNumbers((prevNumbers) => Math.max(prevNumbers - 3, 3));
    }
  };

  const downButtons = () => {
    if (number > 0) {
      setNum((prevNumber) => Math.max(prevNumber - 1, 0));
      setNums((prevNumbers) => Math.max(prevNumbers - 1, 1));
    }
  };
  
  const upButton = () => {
    if (numbers < images.length) {
      setNumber((prevNumber) => Math.min(prevNumber + 3, images.length - 3));
      setNumbers((prevNumbers) => Math.min(prevNumbers + 3, images.length));
    }
  };

  const upButtons = () => {
    if (numbers < images.length) {
      setNum((prevNumber) => Math.min(prevNumber + 1, images.length - 1));
      setNums((prevNumbers) => Math.min(prevNumbers + 1, images.length));
    }
  };
    
  return(
    <div>
      <Header/>
      <div className="form-container">
        <h1 className="heading-element">{mainHeading}</h1>
        <p className="para-element">{mainParagraph}</p>
        <div className="home-container">
              <div className="kk">
                      <select id="modelSelect" >
                        {models.map(item => (
                        <option key={item.id} value={item.name} className="option"> {item.name} </option> ))}
                      </select>
              </div>
              <div className="kk">
                      <select id="modelSelect">
                        {prices.map(item => (
                        <option key={item.id} value={item.amount} className="option"> {item.amount} </option> ))}
                      </select>
              </div>
              <div className="kk">
                      <select id="modelSelect">
                        {years.map(item => (
                        <option key={item.id} value={item.year} className="option"> {item.year} </option> ))}
                      </select>
              </div>
              <div onClick={handleSearch}>
                <button type="button" className="search-button">SEARCH</button>
              </div>
        </div>
        <div className="slick-container">
          <div style={{marginBottom: "100px"}}><button type="button" className="right-button" onClick={downButton} ><AiFillCaretLeft/></button></div>
            <div className="images-container">
              {imh.map(item => (
                <div key={item.id} className="image-container">
                  <img src={item.imgs} alt={item.name} className="image-width"/>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
      
          <div style={{marginBottom: "100px"}}><button type="button" className="right-button" onClick={upButton}><AiFillCaretRight/></button></div>
        </div>
        <div className="mobail-slick-container">
        <div style={{marginBottom: "100px"}}><button type="button" className="right-button" onClick={downButtons} ><AiFillCaretLeft/></button></div>
          <div className="images-container">
            {imhh.map(item => (
              <div key={item.id} className="image-container">
                <img src={item.imgs} alt={item.name} className="image-width"/>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
    
        <div style={{marginBottom: "100px"}}><button type="button" className="right-button" onClick={upButtons}><AiFillCaretRight/></button></div>
      </div>
      </div>
      <Footer/>
    </div>
  )


}
export default Home;
import {Link} from "react-router-dom";
import {AiOutlineMail} from "react-icons/ai";
import {AiOutlinePhone,AiOutlineInstagram} from "react-icons/ai";
import {FiTwitter} from "react-icons/fi";
import {CiFacebook} from "react-icons/ci";

import "./index.css";

const Footer =()=>{
    return(
        <div className="footer-container">   
            <div>
                <h3 style={{color: "#fff"}}>Abou Us</h3>
                <p style={{color: "grey", width: "350px"}}>UsedTeslas is a platform exclusively dedicated to connecting Private Sellers and Buyers of Teslas in the USA with a secure and seamless sales process.</p>
            </div>  
            <div>
                <h3 style={{color: "#fff"}}>resources</h3>
                <p style={{color: "grey"}}><Link  className="link-item" to="/">Home</Link></p>
                <p style={{color: "grey"}}><Link className="link-item" to="/alllisting">ALL Listings</Link></p>
                <p style={{color: "grey"}}><Link className="link-item" to="/about">About</Link></p>
            </div> 
            <div>
                <h3 style={{color: "#fff"}}>Contact</h3>
                <p style={{color: "grey"}}><AiOutlineMail/>  info@sellmyusedtesla.com</p>
                <p style={{color: "grey"}}><AiOutlinePhone/>  Toll Free: +1 888-668-3124</p>
            </div>   
            <div>
                <h3 style={{color: "#fff"}}>Find Us On</h3>
                <div><CiFacebook style={{backgroundColor: "red", marginRight: "15px"}}/> <FiTwitter style={{backgroundColor: "red", marginRight: "15px"}}/><AiOutlineInstagram style={{backgroundColor: "red", marginRight: "15px"}}/></div>
            </div>  
        </div>
    )

}
export default Footer;
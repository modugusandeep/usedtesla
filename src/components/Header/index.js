import {Component} from "react";
import {Link} from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";

import 'reactjs-popup/dist/index.css';

import "./index.css";

class Header extends Component{
    state = {icClick: false}

    onClickMenuIcon =()=>{
        const {isClick}=this.state;
        this.setState({isClick: !isClick});
    }


    render(){
        const {isClick}=this.state;
    return(
        <nav className="nav-header">
            <div className="blog-container">
                <h1 className="blog-title"><Link className="logo-img" to="/">Goibibo</Link></h1>
                <ul className="nav-menu">
                    <li ><Link className="nav-link" to="/">Home</Link></li>
                    <li><Link className="nav-link" to="/alllisting">AllListings</Link></li>
                    <li><Link className="nav-link" to="/about">About Us </Link></li>
                </ul>
                <div className="mobail-menu" onClick={this.onClickMenuIcon}>
                    <AiOutlineMenu/>
                </div>
            </div> 
            {isClick && (<ul className="mobail-para">
                <li className="mobail-route"><Link className="nav-link" to="/">Home </Link></li>
                <li className= "mobail-route"><Link className="nav-link" to="/alllisting">AllListings</Link></li>
                <li className= "mobail-route"><Link className="nav-link" to="/about">About Us </Link></li>
            </ul>)}
        </nav>
    )
    }

}
export default Header;



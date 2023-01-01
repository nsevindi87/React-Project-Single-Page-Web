import React from "react";
import homeImg from "../Images/homeImage.png";
import { NavLink } from "react-router-dom";

const Services = ()=>{
    return(
        <>
        <h1>Our Services</h1>
        <div className="services">
            <div className="card">
                <h2>Web development</h2>
                <img src={homeImg} alt="services"/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                <div className="btnBox">
                    <div className="btn">
                    <NavLink to="/about" className="readMore" >Start Learning</NavLink>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services
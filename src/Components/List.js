import React from "react";
import logo from "../Images/Nizami2.jpg"
import {NavLink} from "react-router-dom"

const List = ()=>{
    return(
        <>
        <header>
            <div className="container container-flex">
                <div className="logoContainer">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <nav>
                    <NavLink to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
                    <NavLink to="/about" className="listItem" activeClassName="activeItem">About</NavLink>
                    <NavLink to="/services" className="listItem" activeClassName="activeItem">Sevices</NavLink>
                    <NavLink to="/contact" className="listItem" activeClassName="activeItem">Contact</NavLink>
                    <NavLink to="/policy" className="listItem" activeClassName="activeItem">Policy</NavLink>
                </nav>
            </div>
        </header>
        </>
    )
}

export default List
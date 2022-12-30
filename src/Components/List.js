import React from "react";
import logo from "../Images/NizamiLogo.png"
import {NavLink} from "react-router-dom"
import "../Css/listStyle.css"

const List = ()=>{
    return(
        <>
        <header>
            <div className="container container-flex">
                <div className="logoContainer">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <nav className="list">
                    <NavLink exact to="/" className="listItem" >Home</NavLink>
                    <NavLink to="/about" className="listItem" >About</NavLink>
                    <NavLink to="/services" className="listItem" >Sevices</NavLink>
                    <NavLink to="/contact" className="listItem" >Contact</NavLink>
                    <NavLink to="/policy" className="listItem" >Policy</NavLink>
                </nav>
            </div>
        </header>
        </>
    )
}

export default List

//Navlink icinde activeClassName calismiyor. exact yazdim ve class olarak .active css de sekillendirildi.
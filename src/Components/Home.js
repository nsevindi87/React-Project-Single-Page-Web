import React from "react";
import { NavLink } from "react-router-dom";
import homeImg from "../Images/homeImage.png";
import "../Css/HomeAbout.css";

const Home = ()=>{
    return(
        <>
        <div className="mainSection">
            <div className="contentBox">
                <h1>Learning made easy</h1>
                <p>Lorem ipsum dolor desr teas das sada dasdassdfg ferd dasd fasad aasfaaf afsagrrg rlrflrf frgjsdf sdsfjsdf dfggeegaega</p>
                <div className="btnBox">
                    <div className="btn">
                    <NavLink to="/about" className="readMore" >Read Me</NavLink>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src={homeImg} alt="home"/>
            </div>
        </div>
        </>
    )
}

export default Home
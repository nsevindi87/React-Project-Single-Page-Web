import React from "react";
import "../Css/HomeAbout.css";
import Same from "./Same.js";
import homeImg from "../Images/homeImage.png";

const Home = ()=>{
    return(
        <>
        <Same
        title= "Learning made easy"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        imgsrc={homeImg}
        btn="Read Me"
        />
        </>
    )
}

export default Home
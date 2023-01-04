import React from "react";
import Same from "./Same.js";
import homeImg from "../Images/homeImage.png";

const About = ()=>{
    return(
        <>
        <Same
        title= "Know More About Us"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        imgsrc={homeImg}
        btn="Know More"
        />
        </>
    )
}
export default About
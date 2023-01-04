import React from "react";
import "../Css/FooterStyle.css"

const Footer = ()=>{
    return(
        <>
        <footer>
            <div className="container container-flex">
                <div className="icons">
                    <span className="icon">Twitter</span>
                    <span className="icon">Facebook</span>
                    <span className="icon">Instagram</span>
                    <span className="icon">LinkedIn</span>
                </div>
                <div className="line">
                    <hr/>
                    <hr/>
                </div>
                <div className="copyright">
                    <p>All rights reserved &copy;</p>
                    <p>Made by N.Sevindi</p>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer
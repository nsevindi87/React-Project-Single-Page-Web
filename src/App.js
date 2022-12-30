import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home"
import About from "./Components/About";
import Services from "./Components/Sevices"
import Contact from "./Components/Contact"
import Policy from "./Components/Policy"
import List from "./Components/List";
import Footer from "./Components/Footer";

const App = () =>{
  return(
    <>
    <List/>
    <Routes>   
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App


{/* Error router CALISMIYOR  <Route path="/" errorElement={<Error />} /> */}
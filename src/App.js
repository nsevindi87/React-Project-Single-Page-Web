import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home"
import About from "./Components/About";
import Services from "./Components/Sevices"
import Contact from "./Components/Contact"
import Policy from "./Components/Policy"
import Error from "./Components/Error"

const App = () =>{
  return(
    <>
    <Routes>   
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
     {/* CALISMIYOR  <Route path="/" errorElement={<Error />} /> */}
    </Routes>
    
    </>
  )
}

export default App
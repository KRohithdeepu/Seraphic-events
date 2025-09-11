import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Index";
import AboutUs from "./Components/AboutUs/Index";
import ContactUs from "./Components/ContactUs/Index";
import Services from "./Components/Services/Index";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          


          {/* Add other pages like Services, Contact, etc. */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

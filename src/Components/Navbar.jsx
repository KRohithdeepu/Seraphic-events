import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/uiSlice"; // adjust path as per your redux setup
import Sidebar from "./SidebarMenu";
import "./Navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const dispatch = useDispatch();
const isOpen = useSelector((state) => state.ui.isOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar" data-aos="fade-down">
        <div className="navbar-logo">
          <img src={logo} alt="St. Martin Logo" />

          <span></span>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => dispatch(toggleMenu())}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleMenu={() => dispatch(toggleMenu())} />
    </>
  );
};

export default Navbar;

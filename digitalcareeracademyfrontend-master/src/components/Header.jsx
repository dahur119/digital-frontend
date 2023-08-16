import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import h_logo from "../assets/images/header_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header>
      <aside
        className={`sidebar-toggle ${sidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <div id="nav-icon4">
          {sidebarOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <GiHamburgerMenu size={30} />
          )}
        </div>
      </aside>

      <NavLink to="/">
        <img src={h_logo} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/about"> About Us </NavLink>
        <NavLink className="courses">
          <div>
            <p>
              <span>Courses</span> <ArrowDropDownIcon />{" "}
            </p>
          </div>
        </NavLink>
        <NavLink to="/work-experience">Work Experience Program</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/faqs">FAQs</NavLink>
        <NavLink className="taster"> Free Taster Session</NavLink>
        <NavLink>Log In</NavLink>
        <span className="search">
          <SearchIcon />
        </span>
      </nav>

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={h_logo} alt="" className="sidebar-logo" />
          <div className="cancel-button" onClick={toggleSidebar}>
            <AiOutlineClose size={30} color="white" />
          </div>
        </div>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/work-experience">Work Experience Program</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/faqs">FAQs</NavLink>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Header;

import React from "react";
import Logo from "../../assets/logo.jpg";
import "./CustomNavbar.css";

const CustomNavbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" className="brand-logo" />
        </a>
        <ul className="navbar-nav"> 
          <li className="nav-item">
            <a className="nav-link" href="#">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              AI TOOLS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              BLOG
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              LOGIN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;

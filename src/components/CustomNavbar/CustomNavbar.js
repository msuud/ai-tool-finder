import React from "react";
import Logo from "../../assets/logo.jpg";
import "./CustomNavbar.css";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" className="brand-logo" />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tool">
              AI TOOLS
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/blog">
              BLOG
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;

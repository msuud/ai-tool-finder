import React from "react";
import Logo from "../../assets/logo.jpg";
import "./CustomNavbar.css";

const CustomNavbar = () => {
  return (
    <nav class="navbar navbar-expand-sm bkg">
      <div class="container-fluid ">
        <a class="navbar-brand" href="#">
          <img src={Logo} style={{ width: "50px" }} class="rounded-pill"></img>
        </a>
        <ul class="navbar-nav ">
          <li class="nav-item">
            <a class="nav-link text-white pe-5" href="#">
              HOME
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-white pe-5" href="#">
              AI TOOLS
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-white pe-5" href="#">
              BLOG
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-white pe-5" href="#">
              LOGIN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/logo.jpg";

const CustomNavbar = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-black opacity-10">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={Logo} style={{ width: "50px" }} class="rounded-pill"></img>
        </a>
        <ul class="navbar-nav" style={{ marginLeft: "auto" }}>
          <li class="nav-item">
            <a class="nav-link text-white pe-5" href="#">
              Home
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-white pe-5" href="#">
              AI Tools
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-white pe-5" href="#">
              Blog
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-white pe-5" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;

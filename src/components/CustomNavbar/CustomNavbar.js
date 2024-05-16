import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/logo.jpg";

const CustomNavbar = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={Logo} style={{ width: "40px" }} class="rounded-pill"></img>
        </a>
        <ul class="navbar-nav" style={{ marginLeft: "auto" }}>
          <li class="nav-item text-black">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item text-black">
            <a class="nav-link" href="#">
              AI Tools
            </a>
          </li>
          <li class="nav-item text-black">
            <a class="nav-link" href="#">
              Blog
            </a>
          </li>
          <li class="nav-item text-black">
            <a class="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;

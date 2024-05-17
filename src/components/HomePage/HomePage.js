import React from "react";
import "./HomePage.css";
import SearchBar from "../Searchbar/SearchBar";

const HomePage = () => {
  return (
    <div className="container-fluid bg-image">
      <div className="container text-black ml-0"></div>
      <SearchBar></SearchBar>
    </div>
  );
};

export default HomePage;

import React from "react";

const HomePage = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url('../../assets/ai home page.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="container text-black ml-0">
        <p className="h1">hello world </p>
        <p>this is a line</p>
      </div>
    </div>
  );
};

export default HomePage;

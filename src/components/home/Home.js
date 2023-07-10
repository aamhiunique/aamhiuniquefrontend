import React from "react";
import aulogo from "../../assets/aamhiunique-logo.png";
import "./home.css";
import Login from "../login/Login";
const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 content">
        <div className="inline-block align-baseline">
          <img src={aulogo} alt="Aamhiunique Logo" />
        </div>
        <div>
          <Login />
        </div>
      </div>
    </>
  );
};

export default Home;

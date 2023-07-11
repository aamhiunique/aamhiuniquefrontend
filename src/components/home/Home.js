import React from "react";
import aulogo from "../../assets/aamhiunique-logo.png";
import "./home.css";
import Login from "../login/Login";
import Register from "../register/Register";
import Resetpasswd from "../login/Resetpasswd";
const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 content">
        <div className="inline-block align-baseline">
          <img src={aulogo} alt="Aamhiunique Logo" />
        </div>
        <div>
          {/* <Login /> */}
          {/* <Register /> */}
          <Resetpasswd />
        </div>
      </div>
    </>
  );
};

export default Home;

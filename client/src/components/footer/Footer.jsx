import React from "react";
import "./footer.scss";
import FOOTER_LOGO from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="container">
          <div className="logo">
            <h2>acreage</h2>
            <img src={FOOTER_LOGO} alt="" />
          </div>
          <div className="line"></div>
          <p>
            Land Analysis PacketLand Analysis Packet <br /> Land Analysis Packet <br /> Land
            Analysis PacketLand Analysi
          </p>
          <div className="line"></div>
          <p className="space">
            Welcome to Acreage How’s Acreage Work Key Features & Benefits Join
            Our Email List.
          </p>
          <div className="line"></div>
          <p>Acreage Work Key Features & Benefits Join Our Email List.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

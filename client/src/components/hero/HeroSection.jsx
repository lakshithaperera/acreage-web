import React from "react";
import "./herosection.scss";
import HERO_BG from "../../assets/hero-bg.mp4";
import HERO_LOGO from "../../assets/logo.svg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="wrapper">
        <div className="bg-overlay"></div>
        <video className="bg-video" autoPlay="autoplay" muted loop>
          <source src={HERO_BG} type="video/mp4" />
        </video>

        <div className="container">
          <div className="logo">
            <h2>acreage</h2>
            <img src={HERO_LOGO} alt="" />
          </div>
          <h1>Unlock Your <br />Property's Full <br /> Potential.</h1>
          <p>
            Acreage is a property technology (PropTech) start-up that offers a
            powerful land use tool. We provide homeowners and landowners <br /> with
            the tools needed to maximize the use or value of their property.
            With our land use tool, you can unlock the full potential of your <br />
            property and make informed decisions based on data insights.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

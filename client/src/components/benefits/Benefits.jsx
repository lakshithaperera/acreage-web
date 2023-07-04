import React from "react";
import "./benefits.scss";
import BG_VIDEO from "../../assets/benfit-bg.mp4";
import FOCUS from "../../assets/focus.png"


const Benefits = () => {
  return (
    <section id="benefit" className="benefits">
      <div className="wrapper">
        <div className="container">
        <div className="line top-line"></div>
          <div className="text">
            <h2>Benefits</h2>
            <p>
              By using our service, you can leverage the experience, expertise,
              and resources of our team to make informed decisions, get
              personalized guidance, and access a network of professionals who
              can help you achieve your real estate development goals. 
            </p>
          </div>
          <div className="line bottom-line"></div>
        </div>
        <div className="bg-overlay">
            <img src={FOCUS} alt="" />
            <h1>a</h1>
        </div>
        
        <video className="bg-video" autoPlay="autoplay" muted loop>
          <source src={BG_VIDEO} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Benefits;

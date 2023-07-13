import React from "react";
import "./footer.scss";
import FOOTER_LOGO from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/", {
      
    });
  };

  const navigateToSurvey = () => {
    navigate("/survey", {
      
    });
  };

  const navigateToSignIn = () => {
    navigate("/join-to-mailing-list", {
      
    });
  };

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
          Acreage LLC. A Georgia Company <br />
1100 Peachtree St. Northeast | Suite 200 <br />
Atlanta, Georgia 30309
          </p>
          <div className="line"></div>
          <div className="space">
           <p onClick={() => navigateToHome()}>Welcome to Acreage</p>
           <p onClick={() => navigateToSurvey()}>Take Our Survey</p>
           <p onClick={() => navigateToSignIn()}>Join Our Mailing List</p>
          </div>
          <div className="line mobile-line-none"></div>
          <p className="privacy-pol">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

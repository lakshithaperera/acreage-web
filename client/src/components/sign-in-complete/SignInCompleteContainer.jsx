import React from 'react'
import "./signincompletecontainer.scss"
import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/logo.svg";

const SignInCompleteContainer = () => {
    const navigate = useNavigate();

  const navigateToSurvey = () => {
    navigate("/survey", {
      
    });
  };

  const navigateToHome = () => {
    navigate("/", {
      
    });
  };

  return (
    <section  className="sign-in-complete-container">
    <div className="wrapper">
      <div className="container">
        <div className="left">
          <div className="logo">
            <h2>join our mailing list.</h2>
            <img src={LOGO} alt="" />
          </div>
          <p>
            Acreage is a property technology (PropTech) start-up that offers a
            powerful land use tool. We{" "}
          </p>
          <div>
          <h5>Thank you for your <br /> submission!</h5>
        <h5> We will contact you <br /> with Acreage news and <br /> product updates.</h5> 
          </div>   
        <button onClick={() => navigateToHome()}>RETURN TO ACREAGE</button>  
        </div>
        <div className="right">
          <h2>
            Complete our survey for early access to the <span>acreage</span>  platform.
          </h2>
          <p>Acreage is a property technology (PropTech) start-up that offers a powerful land use tool. We</p>
          <button onClick={() => navigateToSurvey()}>COMPLETE SURVEY</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SignInCompleteContainer
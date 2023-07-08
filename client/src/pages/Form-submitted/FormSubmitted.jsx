import React from 'react'
import "./formsubmited.scss"
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import LOGO from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FormSubmitted = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/", {
      
    });
  };
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, type: "tween", duration: 1 }}
    >
    <NavBar/>
    <section className="form-submitted">
      <div className="wrapper">
        <div className="container">
        <div className="logo">
            <h2>acreage</h2>
            <img src={LOGO} alt="" />
          </div>
          <h1>feedback survey</h1>
          <h4>Thank you for <br />
participating in our <br />survey! 

</h4>
<button onClick={() => navigateToHome()}>RETURN TO ACREAGE</button>
        </div>
      </div>
    </section>
    <Footer/>
    </motion.div>
  )
}

export default FormSubmitted
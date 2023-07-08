import React, {useState} from 'react'
import "./navbar.scss"
import LOGO from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import {RiMenuFoldFill} from "react-icons/ri"
import {IoMdCloseCircle} from "react-icons/io"


const NavBar = () => {

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

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    document.querySelector(".nav-bar-right").style.display = "flex";
  };

  const handleClose = () => {
    document.querySelector(".nav-bar-right").style.display = "none";
    setIsOpen(!isOpen);
  }

  return (
    <nav>
       <div className="wrapper">
        <div onClick={() => navigateToHome()} className="left">
            <h2>acreage</h2>
            <div className="logo">
                <img src={LOGO} alt="" />
            </div>
        </div>
        <div className="mobile-menu" onClick={handleToggle}>
            <RiMenuFoldFill className='menu-icn'/>
        </div>
        <div className="right nav-bar-right">
        <div className="menu-close-btn" onClick={handleClose}>
              <IoMdCloseCircle className='menu-close-icon' />
        </div>
            <a onClick={() => navigateToHome()} href="#hero-sec">Welcome To Acreage</a>
            <a  onClick={() => navigateToSurvey()} href="#survey-container-s">Take Our Survey </a>
            <a onClick={() => navigateToSignIn()} href='#mailing-list'  className='highlight-bg'>JOIN MAILING LIST</a>
        </div>
       </div>
    </nav>
  )
}

export default NavBar

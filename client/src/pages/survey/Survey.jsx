import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import SurveyContainer from '../../components/survey/SurveyContainer'
import { motion } from "framer-motion";


const Survey = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, type: "tween", duration: 1 }}
    >
     <NavBar />
     <SurveyContainer />
     <Footer/>
    </motion.div>
  )
}

export default Survey
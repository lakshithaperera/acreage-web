import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import { motion } from "framer-motion";
import SignInCompleteContainer from '../../components/sign-in-complete/SignInCompleteContainer';

const SignInComplete = () => {
  return (
    <motion.div id="mailing-list"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, type: "tween", duration: 1 }}
    >
    <NavBar />
    <SignInCompleteContainer />
    <Footer />
    </motion.div>
  )
}

export default SignInComplete
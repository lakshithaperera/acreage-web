import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import SignInContainer from '../../components/signin/SignInContainer'
import { motion } from "framer-motion";

const SignIn = () => {
  return (
    <motion.div id="mailing-list"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, type: "tween", duration: 1 }}
    >
    <NavBar />
    <SignInContainer />
    <Footer />
    </motion.div>
  )
}

export default SignIn
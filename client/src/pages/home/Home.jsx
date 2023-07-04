import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import HeroSection from '../../components/hero/HeroSection'
import HroBottomSection from '../../components/horo-bottom/HroBottomSection'
import Benefits from '../../components/benefits/Benefits'
import Features from '../../components/features/Features'
import RealEstate from '../../components/real-estate/RealEstate'
import Footer from '../../components/footer/Footer'
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, type: "tween", duration: 1 }}
    >
    <NavBar />
    <HeroSection />
    <HroBottomSection />
    <Benefits />
    <Features />
    <RealEstate />
    <Footer />
    </motion.div>
  )
}

export default Home

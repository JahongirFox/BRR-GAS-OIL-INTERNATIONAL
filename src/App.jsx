import React from "react";
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Main/Main'
import About from './Pages/AboutUs/About/About'
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <>
     <AnimatePresence mode="waits">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer/>
    </Router>
    </AnimatePresence>
    </>
  )
}

export default App;

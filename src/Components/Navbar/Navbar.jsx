import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link ishlatilmoqda
import "./Navbar.css";
import BRR from "./brrpng.png";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="Navbar">
        <div className="Flex-div">
          <Link to="/">
            <div className="Nav-flex">
              <img width={"76px"} src={BRR} alt="BRR Logo" />
              <p>BRR GAS OIL <br /> INTERNATIONAL</p>
            </div>
          </Link>

          {/* Hamburger Menu */}
          <div
            className={`menu-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          {/* Nav Links */}
          <ul className={`nav-links ${isOpen ? "visible" : ""}`} id="nav-links">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/aboutus">О нас</Link></li>
            <li><Link to="/">Продукция</Link></li>
            <li><Link to="/">Бензин</Link></li>
            <li><Link to="/">Категории промышленности</Link></li>
            <li><Link to="/">Контакты</Link></li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
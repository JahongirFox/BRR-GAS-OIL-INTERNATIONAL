import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link ishlatilmoqda
import "./Navbar.css";
import BRR from "./brrpng.png";
import {  useLocation } from "react-router-dom";
import {  useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // URL-ni kuzatish uchun

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // URL o'zgarganda menyuni yopish
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return(
      <div className="Navbar">
        <div className="Flex-div">
          <Link to="/">
            <div className="Nav-flex">
              <img width={"76px"} src={BRR} alt="BRR Logo" />
              <p>BRR GAS OIL <br /> INTERNATIONAL</p>
            </div>
          </Link>
          <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}> ☰ </div>
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
  );
}

export default Navbar;
import React from "react";
import './Footer.css'
import BRR from './brrpng.png'
import telefon from './telefon.png'
import telegram from './telegram.png'
import insta from './insta.png'
import { motion } from "framer-motion";

function Footer() {
    return(
         <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 3, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 2 }}
          >
        <div className="Footer">
            <div className="Flex-all-divs">
                    <div className="Footer-BRR-GAS-OIL">
                        <div className="Center-img-footer">
                            <img width={70} src={BRR} alt="" /> 
                        </div>
                        <p>BRR GAS OIL <br />INTERNATIONAL</p>
                    </div>
                        <div className="Footer-Work-Time">
                            <p>График работы:</p>
                            <h4>Понедельник - Пятница с 9:00 до 18:00 <br />Суббота - Воскресенье: Выходной</h4>
                        </div>
                    <div className="images-a-center">
                        <div className="Footer-Call-number">
                        <a href="tel:+998998450138">+998 99 845 01 38</a> <br />
                        <a href="tel:+998991835599">+998 99 183 55 99</a> <br />
                        <div className="Footer-Call-images">
                            <a href="https://t.me/BRRgasoil"><img width={40} src={telegram} alt="" /> </a>
                            <a href="https://www.instagram.com/brroilgas_uz/"><img width={40} src={insta} alt="" /></a>
                            <a href="tel:+998991835599"><img width={40} src={telefon} alt="" /></a>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="Footer-space">
            </div>

        </div>  
        </motion.div>
    )
}

export default Footer;
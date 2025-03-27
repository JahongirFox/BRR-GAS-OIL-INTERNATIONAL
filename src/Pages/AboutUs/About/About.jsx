import React from "react";
import './About.css'
import { motion } from "framer-motion";


function About() {
    return(
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 3, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 2 }}
          >
        <>
            <div className="About-Page">
                <p>О нас</p>
                    <div className="About-Text-Center">
                        <div className="About-p">
                            <p>BRR Gas Oil International - лидер узбекского <br /> рынка по моторным маслам в 2022 г.</p> <br />
                            <p>Наши консультанты по ГСМ маслам – это <br /> профессионалы, которые имеют обширные <br /> знания о смазочных материалах и маслах для <br />автомобилей и другой техники.</p> <br />
                            <p>Наша компания:</p>
                            <li>предлагает свои услуги клиентам, которые <br /> нуждаются в качественном смазочном <br /> материале для техники;</li>
                            <li>дает рекомендации по технике использования <br /> масла, его замене и уходу за техникой;</li>
                            <li>помогает клиентам понять важность <br /> регулярной замены масла и в каких условиях <br /> необходимо делать это чаще</li>
                        </div>
                    </div>
            </div>
        </>   
        </motion.div>
    )
}

export default About;
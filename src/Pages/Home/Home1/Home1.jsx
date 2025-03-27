import React from "react";
import './Home1.css'
function Home1() {
    return (
            <div className="Home">
            
                {/* <p className="Home-p">Закажите качественные моторные <br /> масла для своего производства</p> */}
                <p className="Home-p">ЗАКАЖИТЕ КАЧЕСТВЕННЫЕ <br /> СМАЗОЧНЫЕ МАТЕРИАЛЫ И МОТОРНЫЕ <br /> МАСЛА ОТ БРЕНДОВ: SHELL, MOBIL, <br /> TATNEFT/TANECO ДЛЯ СВОЕГО <br /> ПРОИЗВОДСТВА</p>
                <div className="Home-Center">
                    <div className="flex-btn">
                        <button className="home-btn">Перейти к выбору</button>   
                        <button className="home-btn2">Связаться с нами</button>
                    </div>
                </div>

            </div>

    )
}

export default Home1;
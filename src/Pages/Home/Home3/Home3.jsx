import React from "react";
import './Home3.css'
import Firstimg from './first0img.png'
import Secondimg from './second-img.jpg'
import Threimg from './three-img.jpeg'
import Fourimg from './four-img.png'
import Fiveimg from './five-img.png'
function Home3() {
    return(
        
        <div className="Home3">
                <p>Наши партнеры:</p>
                <div className="Images-is-center">
                    <div className="Flex-the-5-images">
                        <img src={Firstimg} alt="" />
                        <img src={Secondimg} alt="" />
                        <img src={Threimg} alt="" />
                        <img src={Fourimg} alt="" />
                        <img src={Fiveimg} alt="" />
                    </div>
                    <div className="Flex-the-5-images2">
                        <img src={Firstimg} alt="" /> <br />
                        <img src={Secondimg} alt="" /> <br />
                        <img src={Threimg} alt="" /> <br />
                        <img src={Fourimg} alt="" /> <br />
                        <img src={Fiveimg} alt="" /> <br />
                    </div>
                </div>
        </div>
    )
}
export default Home3;
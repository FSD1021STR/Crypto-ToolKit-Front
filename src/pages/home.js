import React from "react";
import './home.css'
import video from './../videos/videoslide.mp4'

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1 className="cryptoTitle">CryptoToolkit. Your space to invest.</h1>
                <video autoPlay loop muted playsInline>
                    <source src={video}/>
                </video>
            </div>
            
        </div>
        )
}

export default Home;

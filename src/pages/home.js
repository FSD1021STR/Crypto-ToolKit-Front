import React, { useEffect, useState } from "react";
import './home.css'
import video from './../videos/videoslide.mp4'
import TopCard from "../components/topCard";

const Home = () => {

    const [topCoins, setTopCoins]= useState([])

    useEffect(() => {
        
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        };

        fetch(
            `http://localhost:8000/coins/toplist24h`, 
            requestOptions
        )
        .then((response) => (response.json()))
        .then((json) => {
            setTopCoins(json.Data)})
        
    },[])

    return (
        <div className="home">
            <div className="title">
                <h1 className="cryptoTitle">CryptoToolkit. Your space to invest.</h1>
                <video autoPlay loop muted playsInline>
                    <source src={video}/>
                </video>
            </div>
            <div className="topList">
                <h2>Top List</h2>
                <div className="topCoins">
                    {topCoins?.map(coin => {
                        console.log(coin)
                        return(
                        <TopCard
                        ImageUrl= {coin.CoinInfo.ImageUrl}
                        FullName= {coin.CoinInfo.FullName}
                        Name={coin.CoinInfo.Name}
                        Id={coin.CoinInfo.Id}/>
                    )})}
                </div>
            </div>
            
        </div>
        )
}

export default Home;

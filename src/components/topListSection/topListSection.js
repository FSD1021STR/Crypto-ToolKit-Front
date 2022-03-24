import './topListSection.css';
import React, {useEffect, useState} from "react";
import TopCard from "../topCard/topCard";

const TopListSection = () => {
    const [topCoins, setTopCoins] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        };

        fetch(
            `https://crypto-toolkit.herokuapp.com/coins/toplist24h`,
            requestOptions
        )
            .then((response) => response.json())
            .then((json) => {
                setTopCoins(json.Data);
            });
    }, []);

    return (
        <section className="topList">
            <h2>Top List</h2>
            <div className="topCoins">
                {topCoins?.map((coin) => {
                    console.log(coin);
                    return (
                        <TopCard
                            ImageUrl={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                            FullName={coin.CoinInfo.FullName}
                            Name={coin.CoinInfo.Name}
                            Id={coin.CoinInfo.Id}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default TopListSection;
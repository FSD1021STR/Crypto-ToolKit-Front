import "./topListSection.css";
import React, { useEffect, useState } from "react";
import TopCard from "../topCard/topCard";
import "./topListSection.css";

const TopListSection = () => {
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      `https://crypto-toolkit.herokuapp.com/coins/toplist24h`,
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        setTopCoins(json.Data);
        console.log(json.Data);
      });
  }, []);

  return (
    <section className="topList">
      <h2>Top List</h2>

      {/* extra  */}
      <div className="heading">
        <p className="coin-name">Img</p>
        <p className="coin-name">FullName</p>
        <p className="coin-name">Name</p>
        <p className="coin-name">Id</p>
        <p className="coin-price">Price</p>
      </div>

      <div className="topCoins">
        {topCoins?.map((coin) => {
          return (
            <TopCard
              key={coin.CoinInfo.Id}
              ImageUrl={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
              FullName={coin.CoinInfo.FullName}
              Name={coin.CoinInfo.Name}
              Id={coin.CoinInfo.Id}
              Price={coin.RAW.USD.PRICE}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TopListSection;

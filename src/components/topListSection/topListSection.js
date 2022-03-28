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
      <div className="coinsItem">
        <table>
          <thead>
            <tr>
              <th>Img</th>
              <th>FullName</th>
              <th>Name</th>
              <th>Id</th>
              <th>24h Change</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="topCoins">
            {topCoins?.map((coin) => {
              return (
                <TopCard
                  key={coin.CoinInfo.Id}
                  ImageUrl={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                  FullName={coin.CoinInfo.FullName}
                  Name={coin.CoinInfo.Name}
                  Id={coin.CoinInfo.Id}
                  Change24h={coin.DISPLAY.USD.CHANGEPCT24HOUR}
                  Price={coin.RAW.USD.PRICE}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TopListSection;

import React, { useEffect, useState } from "react";
import CoinCard from "../allCoinsCard/coinCard";
import styles from "./allCoinsSection.module.css";

const AllCoins = () => {
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`https://crypto-toolkit.herokuapp.com/coins`, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setAllCoins(json);
        console.log(json);
      });
  }, []);

  return (
    <section className={styles.allCoins}>
      {allCoins.map((c) => (
        <CoinCard
          image={`https://www.cryptocompare.com${c.ImageUrl}`}
          name={c.Name}
          fullName={c.FullName}
          id={c.Id}
        />
      ))}
      {/* <div className="coinsItem">
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
      </div> */}
    </section>
  );
};

export default AllCoins;

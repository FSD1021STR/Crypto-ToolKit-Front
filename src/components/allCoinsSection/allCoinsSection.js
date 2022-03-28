import React, { useEffect, useState } from "react";
import CoinCard from "../allCoinsCard/coinCard";
import styles from "./allCoins.module.css";

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
    </section>
  );
};

export default AllCoins;

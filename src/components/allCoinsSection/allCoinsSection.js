import React, { useEffect, useState } from "react";
import CoinsTable from "../coinsTable/coinsTable";
import styles from "./allCoinsSection.module.css";

const AllCoins = () => {
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`http://localhost:8000/coins`, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setAllCoins(json);
        console.log(json);
      });
  }, []);

  return (
    <section className={styles.allCoins}>
      <CoinsTable coins={allCoins} />
    </section>
  );
};

export default AllCoins;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./introMarkets.module.css";

const IntroMarket = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.title}>
        <h1>Markets</h1>
      </div>
      <input className={styles.input} type="text" placeholder="Search coin" />
      <div className={styles.buttons}>
        <button className={styles.favs}>
          <FontAwesomeIcon icon={faStar} /> Favorites
        </button>
        <button className={styles.cryptos}>All cryptocurrencies</button>
      </div>
    </section>
  );
};

export default IntroMarket;

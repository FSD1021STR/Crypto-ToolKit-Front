import React from "react";
import styles from "./introMarkets.module.css";

const IntroMarket = () => {
  return (
    <section className={styles.intro}>
      <h1 className={styles.title}>Markets</h1>
      <input className={styles.input} type="text" placeholder="Search coin" />
    </section>
  );
};

export default IntroMarket;

import React from "react";
import styles from "./markets.module.css";
import IntroMarket from "../../components/introMarkets/introMarkets";
import AllCoins from "../../components/allCoinsSection/allCoinsSection";

const Markets = () => {
  return (
    <section className={styles.markets}>
      <IntroMarket />
      <AllCoins />
    </section>
  );
};

export default Markets;

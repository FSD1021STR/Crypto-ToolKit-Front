import React from "react";
import styles from "./markets.module.css";
import IntroMarket from "../../components/introMarkets/introMarkets";

const Markets = () => {
  return (
    <section className={styles.markets}>
      <IntroMarket />
    </section>
  );
};

export default Markets;

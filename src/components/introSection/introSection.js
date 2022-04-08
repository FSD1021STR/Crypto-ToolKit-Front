import React from "react";
import styles from "./introSection.module.css";
import video from "../../videos/videoslide.mp4";

const IntroSection = () => {
  return (
    <div className={styles.introsectioncontainer}>
      <section className={styles.section1}>
        <h1 className={styles.title}>
          Buy, trade, and hold 600+ cryptocurrencies on Crypto Toolkit
        </h1>
        <video className={styles.video} autoPlay loop muted playsInline>
          <source src={video} />
        </video>
      </section>

      <section className={styles.section2}>
        <div className={styles.infotitlecontainer}>
          <h2 className={styles.title}>$76 billion</h2>
          <p>24h trading volume on Binance exchange</p>
        </div>
        <div className={styles.infotitlecontainer}>
          <h2 className={styles.title}>600+</h2>
          <p>Cryptocurrencies listed</p>
        </div>
        <div className={styles.infotitlecontainer}>
          <h2 className={styles.title}>90 million</h2>
          <p>Registered users who trust Binance</p>
        </div>
        <div className={styles.infotitlecontainer}>
          <h2 className={styles.title}>0.10%</h2>
          <p>Lowest transaction fees</p>
        </div>
      </section>
    </div>
  );
};

export default IntroSection;

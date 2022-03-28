import React from "react";
import styles from "./coinCard.module.css";

const CoinCard = (props) => {
  return (
    <article>
      <img src={props.image} alt="crypto" />
      <div className={styles.names}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.fullName}>{props.fullName}</p>
      </div>
      <p className={styles.id}>{props.id}</p>
    </article>
  );
};

export default CoinCard;

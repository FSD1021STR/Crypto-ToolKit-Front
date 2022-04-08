import React from "react";
import styles from "./CoinView.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CoinView = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [coin, setCoin] = useState({});

  useEffect(() => {
    fetch(`https://crypto-toolkit.herokuapp.com/coins/${params.symbol}`)
      .then((res) => res.json())
      .then((json) => setCoin(json));
  }, []);

  return (
    <section className={styles.coinView}>
      <div className={styles.coinInfo}>
        <img className={styles.coinImage} src={coin.imageUrl} alt={coin.name} />
        <h1>{coin.name}</h1>
        <p className={styles.description}> </p>
      </div>
    </section>
  );
};

export default CoinView;

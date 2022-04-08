import React from "react";
import styles from "./coinview.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faCoins, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CoinView = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [coin, setCoin] = useState({});

  const priceSale = () => {
    return {
      color: coin.Change24h > 0 ? "green" : "red",
    };
  };

  useEffect(() => {
    fetch(`http://localhost:8000/coins/${params.symbol}`)
      .then((res) => res.json())
      .then((json) => {
        setCoin(json);
      });
  }, []);

  return (
    <section className={styles.coinView}>
      <div className={styles.nav}>
        <h1>Coin:</h1>
        <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
      </div>

      <div className={styles.coinInfo}>
        <div className={styles.allInfo}>
          <div className={styles.symbolInfo}>
            <div>
              <img
                className={styles.coinImage}
                src={coin.imageUrl}
                alt={coin.name}
              />
            </div>
            <div>
              <h1>{coin.name}</h1>
            </div>
            <div>
              <h1 className={styles.symbol}>{coin.symbol}</h1>
            </div>
          </div>
          <div className={styles.prices}>
            <div className={styles.price}>{coin.price} $</div>
            <div className={styles.price24}>
              <label>Last 24h change: </label>
              <label style={priceSale()}> {coin.change24h} %</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinView;

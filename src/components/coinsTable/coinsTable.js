import React from "react";
import CoinRow from "../coinRow/coinRow";
import styles from "./coinsTable.module.css";

const CoinsTable = ({ coins }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>Img</th>
          <th className={styles.th}>FullName</th>
          <th className={styles.th}>Name</th>
          <th className={styles.th}>Id</th>
          <th className={styles.th}>24h Change</th>
          <th className={styles.th}>Price</th>
          <th className={styles.th}>Fav</th>
        </tr>
      </thead>
      <tbody className={styles.container}>
        {coins?.map((coin) => {
          return (
            <CoinRow
              key={coin.id}
              ImageUrl={coin.imageUrl}
              FullName={coin.name}
              Name={coin.symbol}
              Id={coin.id}
              Change24h={coin.change24h}
              Price={coin.price}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default CoinsTable;

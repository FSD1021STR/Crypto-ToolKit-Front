import styles from "./coinRow.module.css";

const CoinRow = (props) => {
  const priceSyle = () => {
    return {
      color: props.Change24h > 0 ? "green" : "red",
    };
  };
  return (
    <tr className={styles.topCard}>
      <td className={styles.td}>
        <img alt="cryto" className={styles.coinPhoto} src={props.ImageUrl} />
      </td>
      <td className={styles.td}>{props.FullName}</td>
      <td className={styles.td}>{props.Name}</td>
      <td className={styles.td}>{props.Id}</td>
      <td className={styles.td} style={priceSyle()}>
        {props.Change24h}
      </td>
      <td className={styles.td}> $ {props.Price}</td>
    </tr>
  );
};

export default CoinRow;

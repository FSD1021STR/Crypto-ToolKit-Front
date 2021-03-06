import styles from "./coinRow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const CoinRow = (props) => {
  const navigate = useNavigate();
  const priceSale = () => {
    return {
      color: props.Change24h > 0 ? "green" : "red",
    };
  };
  return (
    <tr
      className={styles.topCard}
      onClick={() => navigate(`/coin/${props.symbol}`)}
    >
      <td className={styles.td}>
        <img alt="cryto" className={styles.coinPhoto} src={props.imageUrl} />
      </td>
      <td className={styles.td}>{props.fullName}</td>
      <td className={styles.td}>{props.symbol}</td>
      <td className={styles.td}>{props.id}</td>
      <td className={styles.td} style={priceSale()}>
        {props.change24h} %
      </td>
      <td className={styles.td}> $ {props.price}</td>
      <td className={styles.td}>
        <FontAwesomeIcon icon={faHeart} />
      </td>
    </tr>
  );
};

export default CoinRow;

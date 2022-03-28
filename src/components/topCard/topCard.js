import "./topCard.css";

const TopCard = (props) => {
  const priceSyle = () => {
    return {
      color: props.Change24h > 0 ? "green" : "red",
    };
  };
  return (
    <tr className="topCard">
      <td>
        <img alt="cryto" className="coinPhoto" src={props.ImageUrl} />
      </td>
      <td>{props.FullName}</td>
      <td>{props.Name}</td>
      <td>{props.Id}</td>
      <td style={priceSyle()}>{props.Change24h}</td>
      <td> $ {props.Price}</td>
    </tr>
  );
};

export default TopCard;

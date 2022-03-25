import React from "react";
import "./topCard.css";

const TopCard = (props) => {
  return (
    <div className="topCard">
      <img alt="cryto" className="coinPhoto" src={props.ImageUrl} />
      <p>{props.FullName}</p>
      <p>{props.Name}</p>
      <p>{props.Id}</p>
      <p>{props.Change24h}</p>
      <p className="price">{props.Price} $</p>
    </div>
  );
};

export default TopCard;

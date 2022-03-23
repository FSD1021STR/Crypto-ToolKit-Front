import React from "react";

const TopCard = (props) => {
  return (
    <div className="topCard">
      <img alt="cryto" className="coinPhoto" src={props.ImageUrl} />
      <p>{props.FullName}</p>
      <p>{props.Name}</p>
      <p>{props.Id}</p>
    </div>
  );
};

export default TopCard;

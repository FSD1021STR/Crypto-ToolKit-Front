import React, { useEffect, useState } from "react";
import CoinsTable from "../coinsTable/coinsTable";
// import TopCard from "../topCard/topCard";
import "./topListSection.css";

const TopListSection = () => {
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      `https://crypto-toolkit.herokuapp.com/coins/toplist24h`,
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        setTopCoins(json);
      });
  }, []);

  return (
    <section className="topList">
      <h2>Top List</h2>
      <div className="coinsItem">
        <CoinsTable coins={topCoins} />
      </div>
    </section>
  );
};

export default TopListSection;

import React from "react";
import TopCard from "./../topCard/topCard";

const CoinsTable = ({ coins }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Img</th>
          <th>FullName</th>
          <th>Name</th>
          <th>Id</th>
          <th>24h Change</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className="topCoins">
        {coins?.map((coin) => {
          return (
            <TopCard
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

import React from "react";
import { Route, Routes } from "react-router-dom";
import CoinView from "./pages/coinview/coinview";
import Home from "./pages/home/home";
import Markets from "./pages/markets/markets";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/markets" element={<Markets />} />
      <Route path="/coin/:symbol" element={<CoinView />} />
    </Routes>
  );
};

export default Navigator;

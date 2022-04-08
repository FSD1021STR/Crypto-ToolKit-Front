import React from "react";
import { Route, Routes } from "react-router-dom";
import CoinView from "./components/coinView/CoinView";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SignUp";
import Home from "./pages/home/home";
import Markets from "./pages/markets/markets";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/markets" element={<Markets />} />
      <Route path="/coin/:symbol" element={<CoinView />} />
    </Routes>
  );
};

export default Navigator;

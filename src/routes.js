import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Markets from "./pages/markets/markets";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/markets" element={<Markets />} />
    </Routes>
  );
};

export default Navigator;

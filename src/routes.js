import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SingUp";
import Home from "./pages/home/home";
import Markets from "./pages/markets/markets";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/markets" element={<Markets />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};

export default Navigator;

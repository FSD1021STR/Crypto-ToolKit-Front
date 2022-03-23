import "./home.css";
import React from "react";
import IntroSection from "../../components/introSeccion/introSeccion";
import TopListSection from "../../components/topListSeccion/topListSeccion";

const Home = () => {
  return (
    <div className="home">
      <IntroSection />
      <TopListSection />
    </div>
  );
};

export default Home;

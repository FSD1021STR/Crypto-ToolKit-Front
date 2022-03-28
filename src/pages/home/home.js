import "./home.css";
import React from "react";
import IntroSection from "../../components/introSection/introSection";
import TopListSection from "../../components/topListSection/topListSection";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <IntroSection />
      <TopListSection />
      <Footer />
    </div>
  );
};

export default Home;

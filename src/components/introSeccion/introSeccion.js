import React from "react";
import video from "../../videos/videoslide.mp4";

const IntroSection = () => {
  return (
    <section className="title">
      <h1 className="cryptoTitle">CryptoToolkit. Your space to invest.</h1>
      <video autoPlay loop muted playsInline>
        <source src={video} />
      </video>
    </section>
  );
};

export default IntroSection;

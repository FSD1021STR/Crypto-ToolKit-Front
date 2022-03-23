import React from "react";
import styles from './introSection.module.css'
import video from "../../videos/videoslide.mp4";

const IntroSection = () => {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>CryptoToolkit. Your space to invest.</h1>
            <video className={styles.video} autoPlay loop muted playsInline>
                <source src={video} />
            </video>
        </section>
    );
};

export default IntroSection;

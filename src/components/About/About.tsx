import type { FC } from "react";
import styles from "./About.module.css";

const About: FC = () => {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        We are a team of passionate developers.
      </p>
    </section>
  );
};

export default About;

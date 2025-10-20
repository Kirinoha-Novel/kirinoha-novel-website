import type { FC } from "react";
import styles from "./Place.module.css";
import placeImage from "../assets/place.webp";

const Place: FC = () => {
  return (
    <>
      <h1 className={styles.title}>Place</h1>
      <h2 className={styles.description}>3A416 No.9</h2>
      <p className={styles.subDescription}>University of Tsukuba</p>
      <div className={styles.imageBox}>
        <img
          className={styles.image}
          src={placeImage}
          alt="販売場所の情報の地図画像"
        />
      </div>
    </>
  );
};

export { Place };

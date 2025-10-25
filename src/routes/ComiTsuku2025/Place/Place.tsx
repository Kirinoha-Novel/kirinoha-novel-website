import type { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./Place.module.css";
import placeImage from "../assets/place.webp";

const Place: FC = () => {
  return (
    <>
      <h1 className={styles.title}>Place</h1>
      <h2 className={styles.description}>3A416 No.9</h2>
      <p className={styles.subDescription}>University of Tsukuba</p>
      <div className={styles.imageBox}>
        <LazyLoadImage
          wrapperClassName={styles.imageWrapper}
          className={styles.image}
          src={placeImage}
          height={1536}
          width={2048}
          alt="販売場所の情報の地図画像"
          effect="opacity"
        />
      </div>
    </>
  );
};

export { Place };

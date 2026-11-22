import type { FC } from "react";
import {
  LazyLoadImage,
  type ScrollPosition,
} from "react-lazy-load-image-component";
import styles from "./Place.module.css";
import event from "@/shared/event/event.module.css";
import placeImage from "../assets/place.webp";

type Props = {
  scrollPosition: ScrollPosition;
};

export const Place: FC<Props> = (props) => {
  return (
    <>
      <h2 className={event.title}>Place</h2>
      <h3 className={styles.description}>3A416 No.9</h3>
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
          scrollPosition={props.scrollPosition}
        />
      </div>
    </>
  );
};

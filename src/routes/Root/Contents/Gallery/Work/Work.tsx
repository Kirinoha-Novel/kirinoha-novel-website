import type { FC } from "react";
import styles from "./Work.module.css";
import type { ImageStyle } from "../gallery";

type Props = {
  imagePath: string;
  style: ImageStyle;
};

export const Work: FC<Props> = (props: Props) => {
  return (
    <div className={styles.imageWrapper}>
      <img
        className={
          props.style === "cover" ? styles.imageCover : styles.imageContain
        }
        src={props.imagePath}
        alt="Work"
      />
    </div>
  );
};

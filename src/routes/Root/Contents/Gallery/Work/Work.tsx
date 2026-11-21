import type { FC } from "react";
import styles from "./Work.module.css";
import notebook from "@/shared/notebook.module.css";
import type { ImageStyle } from "../gallery";

type Props = {
  imagePath: string;
  alt: string;
  width: number;
  height: number;
  style: ImageStyle;
};

export const Work: FC<Props> = (props: Props) => {
  return (
    <div className={`${styles.imageWrapper} ${notebook.sticker}`}>
      <img
        className={
          props.style === "cover" ? styles.imageCover : styles.imageContain
        }
        src={props.imagePath}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

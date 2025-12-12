import { type FC } from "react";
import {
  LazyLoadImage,
  type ScrollPosition,
} from "react-lazy-load-image-component";
import type { ItemType } from "../types";
import styles from "./Item.module.css";

type Props = ItemType & { scrollPosition: ScrollPosition };

const Item: FC<Props> = (props: Props) => {
  return (
    <div
      className={`${styles.item} ${
        props.size === "Large" ? styles.largeItem : styles.smallItem
      }`}
    >
      <LazyLoadImage
        wrapperClassName={styles.itemImageWrapper}
        className={styles.itemImage}
        src={props.imagePath}
        width={props.width}
        alt={`${props.name}の画像`}
        effect="opacity"
        scrollPosition={props.scrollPosition}
      />
      <h2 className={styles.itemName}>{props.name}</h2>
      <p className={styles.itemPrice}>{props.price}円</p>
    </div>
  );
};

export { Item };

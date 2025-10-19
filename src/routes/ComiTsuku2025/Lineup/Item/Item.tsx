import { type FC } from "react";
import type { ItemType } from "../types";
import styles from "./Item.module.css";

type Props = ItemType;

const Item: FC<Props> = (props: Props) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.itemImage}
        src={props.imagePath}
        width={props.width}
        height={props.height}
        alt={`${props.name}の画像`}
      />
      <h2 className={styles.itemName}>{props.name}</h2>
      <p className={styles.itemPrice}>{props.price}円</p>
    </div>
  );
};

export { Item };

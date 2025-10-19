import { type FC } from "react";
import styles from "./Lineup.module.css";
import { Item } from "./Item/Item";
import { type ItemType } from "./types";

const items: ItemType[] = [
  {
    imagePath: "/items/booklet.webp",
    width: 5098,
    height: 3624,
    name: "中綴じ冊子",
    price: 1000,
  },
  {
    imagePath: "/items/booklet.webp",
    width: 5098,
    height: 3624,
    name: "中綴じ冊子",
    price: 1000,
  },
  {
    imagePath: "/items/booklet.webp",
    width: 5098,
    height: 3624,
    name: "中綴じ冊子",
    price: 1000,
  },
  {
    imagePath: "/items/booklet.webp",
    width: 5098,
    height: 3624,
    name: "中綴じ冊子",
    price: 1000,
  },
  {
    imagePath: "/items/booklet.webp",
    width: 5098,
    height: 3624,
    name: "中綴じ冊子",
    price: 1000,
  },
];

const Lineup: FC = () => {
  return (
    <>
      <h1 className={styles.title}>Lineup</h1>
      <div className={styles.items}>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export { Lineup };

import { type FC } from "react";
import styles from "./Lineup.module.css";
import { Item } from "./Item/Item";
import { type ItemType, type SizeType } from "./types";

const items: ItemType[] = [
  {
    size: "Large" as SizeType,
    imagePath: "/items/booklet.webp",
    width: 5098,
    height: 3624,
    name: "制作日誌",
    price: 300,
  },
  {
    size: "Small" as SizeType,
    imagePath: "/items/sticker.webp",
    width: 2119,
    height: 2164,
    name: "描き下ろしバニーステッカー",
    price: 200,
  },
  {
    size: "Small" as SizeType,
    imagePath: "/items/post-card1.webp",
    width: 1461,
    height: 2122,
    name: "ポストカード A",
    price: 100,
  },
  {
    size: "Small" as SizeType,
    imagePath: "/items/post-card2.webp",
    width: 1461,
    height: 2122,
    name: "ポストカード B",
    price: 100,
  },
  {
    size: "Small" as SizeType,
    imagePath: "/items/shikishi.webp",
    width: 0,
    height: 0,
    name: "直筆色紙 (各日 限定2枚)",
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

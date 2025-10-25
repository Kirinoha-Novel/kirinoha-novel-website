import { type FC } from "react";
import styles from "./Lineup.module.css";
import { Item } from "./Item/Item";
import { type ItemType, type SizeType } from "./types";

const items: ItemType[] = [
  {
    size: "Large" as SizeType,
    imagePath: "/items/booklet.webp",
    width: 2549,
    name: "制作日誌",
    price: 300,
  },
  {
    size: "Small" as SizeType,
    imagePath: "/items/sticker.webp",
    width: 2119,
    name: "描き下ろしバニーステッカー",
    price: 200,
  },
  {
    size: "Small" as SizeType,
    imagePath: "/items/post-card1.webp",
    width: 1461,
    name: "ポストカード A",
    price: 100,
  },
  {
    size: "Small" as SizeType,
    imagePath: "/items/post-card2.webp",
    width: 1461,
    name: "ポストカード B",
    price: 100,
  },
  {
    size: "Small" as SizeType,
    imagePath: "/items/shikishi.webp",
    width: 800,
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

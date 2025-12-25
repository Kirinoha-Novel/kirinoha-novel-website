import { type FC } from "react";
import styles from "./Lineup.module.css";
import { Item } from "./Item/Item";
import { type ItemType, type SizeType } from "./types";
import type { ScrollPosition } from "react-lazy-load-image-component";

const items: ItemType[] = [
  {
    size: "Large" satisfies SizeType,
    imagePath: "/ct1/booklet.webp",
    width: 2549,
    name: "制作日誌",
    price: 300,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/ct1/sticker.webp",
    width: 2119,
    name: "描き下ろしバニーステッカー",
    price: 200,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/ct1/post-card1.webp",
    width: 1461,
    name: "ポストカード A",
    price: 100,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/ct1/post-card2.webp",
    width: 1461,
    name: "ポストカード B",
    price: 100,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/ct1/shikishi.webp",
    width: 800,
    name: "直筆色紙 (各日 限定2枚)",
    price: 1000,
  } satisfies ItemType,
];

type Props = {
  scrollPosition: ScrollPosition;
};

export const Lineup: FC<Props> = (props) => {
  return (
    <>
      <h1 className={styles.title}>Lineup</h1>
      <div className={styles.items}>
        {items.map((item, index) => (
          <Item key={index} {...item} scrollPosition={props.scrollPosition} />
        ))}
      </div>
    </>
  );
};

import { type FC } from "react";
import styles from "./Lineup.module.css";
import { Item } from "./Item/Item";
import { type ItemType, type SizeType } from "./types";
import type { ScrollPosition } from "react-lazy-load-image-component";

const items: ItemType[] = [
  {
    size: "Large" satisfies SizeType,
    imagePath: "/c107/shikishi.webp",
    width: 800,
    name: "体験版配布カード",
    price: 0,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/booklet.webp",
    width: 2549,
    name: "制作日誌",
    price: 300,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/sticker.webp",
    width: 2119,
    name: "猫耳 ステッカー",
    price: 200,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/sticker.webp",
    width: 2119,
    name: "メイド ステッカー",
    price: 200,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/sticker.webp",
    width: 2119,
    name: "バニー ステッカー",
    price: 200,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/post-card1.webp",
    width: 1461,
    name: "キービジュアル ポストカード",
    price: 100,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/post-card2.webp",
    width: 1461,
    name: "私服 ポストカード",
    price: 100,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/shikishi.webp",
    width: 800,
    name: "直筆ミニ色紙",
    price: 1500,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/shikishi.webp",
    width: 800,
    name: "原画キーホルダー",
    price: 800,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/shikishi.webp",
    width: 800,
    name: "サークル名刺",
    price: 0,
  } satisfies ItemType,
];

type Props = {
  scrollPosition: ScrollPosition;
};

export const Lineup: FC<Props> = (props) => {
  return (
    <>
      <h1 className={styles.title}>製品情報</h1>
      <div className={styles.items}>
        {items.map((item, index) => (
          <Item key={index} {...item} scrollPosition={props.scrollPosition} />
        ))}
      </div>
    </>
  );
};

import { type FC } from "react";
import styles from "./Lineup.module.css";
import { Item } from "./Item/Item";
import { type ItemType, type SizeType } from "./types";
import type { ScrollPosition } from "react-lazy-load-image-component";

const items: ItemType[] = [
  {
    size: "Large" satisfies SizeType,
    imagePath: "/c107/trial-distribution-card.webp",
    width: 7096,
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
    imagePath: "/c107/sticker-cat-ears.webp",
    width: 1378,
    name: "猫耳 ステッカー",
    price: 200,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/sticker-maid.webp",
    width: 2067,
    name: "メイド ステッカー",
    price: 200,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/sticker-bunny.webp",
    width: 2119,
    name: "バニー ステッカー",
    price: 200,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/post-card-key-visual.webp",
    width: 1461,
    name: "キービジュアル ポストカード",
    price: 100,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/post-card-private-clothes.webp",
    width: 1461,
    name: "私服 ポストカード",
    price: 100,
  } satisfies ItemType,
  {
    size: "Small" satisfies SizeType,
    imagePath: "/c107/no-image.jpg",
    width: 1228,
    name: "原画キーホルダー",
    price: 800,
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
    imagePath: "/c107/business-card.webp",
    width: 841,
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

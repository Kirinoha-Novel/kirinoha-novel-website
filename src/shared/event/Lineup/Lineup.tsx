import type { FC } from "react";
import type { ScrollPosition } from "react-lazy-load-image-component";
import styles from "./Lineup.module.css";
import event from "../event.module.css";
import { Item } from "./Item/Item";
import type { ItemType } from "./types";

type Props = {
  title: string;
  items: ItemType[];
  scrollPosition: ScrollPosition;
};

export const Lineup: FC<Props> = (props: Props) => {
  return (
    <>
      <h2 className={event.title}>{props.title}</h2>
      <div className={styles.items}>
        {props.items.map((item) => (
          <Item
            key={item.name}
            {...item}
            scrollPosition={props.scrollPosition}
          />
        ))}
      </div>
    </>
  );
};

import { useRef, type FC } from "react";
import styles from "./Event.module.css";
import { useFadeUp } from "@/shared/useFadeUp";
import notebook from "@/shared/notebook.module.css";
import type { EventProps } from "./event";

export const Event: FC<EventProps> = (props: EventProps) => {
  const image = useRef<HTMLDivElement | null>(null);
  const text = useRef<HTMLAnchorElement | null>(null);
  const date = useRef<HTMLElement | null>(null);

  useFadeUp([image, text, date]);

  // on PC the image and the text alternate sides of the timeline
  const [imageSide, textSide] =
    props.index % 2 === 0
      ? [styles.left, styles.right]
      : [styles.right, styles.left];

  return (
    <div className={styles.event}>
      <div className={`${styles.cell} ${imageSide}`}>
        <div className={`${styles.imageWrapper} ${notebook.tape}`} ref={image}>
          <img
            className={styles.image}
            src={props.imagePath}
            width={props.width}
            height={props.height}
            alt={props.title}
          />
        </div>
      </div>
      <div className={`${styles.cell} ${textSide}`}>
        <a className={styles.text} href={props.url} ref={text}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.description}>{props.description}</p>
        </a>
      </div>
      <small className={styles.date} ref={date}>
        {props.date}
      </small>
    </div>
  );
};

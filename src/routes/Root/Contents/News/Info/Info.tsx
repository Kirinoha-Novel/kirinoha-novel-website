import type { FC } from "react";
import styles from "./Info.module.css";
import type { InfoProps } from "../info";

export const Info: FC<InfoProps> = (props: InfoProps) => {
  return (
    <li className={styles.li}>
      <a
        className={styles.link}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.date}>{props.date}</span>
        <span className={styles.content}>{props.content}</span>
      </a>
    </li>
  );
};

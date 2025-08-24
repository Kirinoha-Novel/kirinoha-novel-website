import type { FC } from "react";
import styles from "./Info.module.css";
import type { InfoProps } from "../info";

export const Info: FC<InfoProps> = (props: InfoProps) => {
  return (
    <li className={styles.list}>
      <a
        className={styles.link}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <small className={styles.date}>{props.date}</small>
        <p className={styles.content}>{props.content}</p>
      </a>
    </li>
  );
};

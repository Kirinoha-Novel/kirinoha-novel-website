import { type FC } from "react";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <a className={styles.label} href="/">
        きりのはのべる
      </a>
    </header>
  );
};

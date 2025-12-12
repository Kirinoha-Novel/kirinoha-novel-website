import { type FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <a className={styles.label} href="/">
        きりのはのべる
      </a>
    </header>
  );
};

export { Header };

import { type FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <a className={styles.label} href="/" rel="noopener noreferrer">
        きりのはのべる
      </a>
    </header>
  );
};

export { Header };

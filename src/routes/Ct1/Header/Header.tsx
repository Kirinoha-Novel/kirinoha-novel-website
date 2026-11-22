import type { FC } from "react";
import { Link } from "react-router";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.label} to="/">
        きりのはのべる
      </Link>
    </header>
  );
};

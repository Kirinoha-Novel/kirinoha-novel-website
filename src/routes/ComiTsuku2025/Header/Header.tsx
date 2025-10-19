import { type FC } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.label} to="/">
        きりのはのべる
      </Link>
    </header>
  );
};

export { Header };

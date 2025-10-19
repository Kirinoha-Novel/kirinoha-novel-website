import { type FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <p className={styles.label}>きりのはのべる</p>
    </header>
  );
};

export { Header };

import type { FC } from "react";
import styles from "./FirstView.module.css";

export const FirstView: FC = () => {
  return (
    <div className={styles.box}>
      <div className={`${styles.frame} ${styles.upperFrame}`}>Day 2</div>
      <div className={styles.photoFrame}>
        <div className={styles.content}>
          <div className={styles.photo}></div>
          <h1 className={styles.phrase}>COMIC MARKET</h1>
        </div>
      </div>
      <div className={`${styles.frame} ${styles.lowerFrame}`}>
        South Area L Block 21b
      </div>
    </div>
  );
};

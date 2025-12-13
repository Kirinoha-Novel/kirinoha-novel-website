import { type FC } from "react";
import styles from "./Info.module.css";

export const Info: FC = () => {
  return (
    <>
      <h1 className={styles.title}>出展情報</h1>
      <div className={styles.box}>
        <p className={styles.subTitle}>- サークル名 -</p>
        <p className={styles.description}>きりのはのべる</p>
        <p className={styles.subTitle}>- 場所 -</p>
        <p className={styles.description}>南地区 Lブロック - 21b</p>
        <p className={styles.subTitle}>- 日時 -</p>
        <p className={styles.description}>2025年12月31日 (水)</p>
      </div>
    </>
  );
};

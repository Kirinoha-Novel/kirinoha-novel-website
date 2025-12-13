import type { FC } from "react";
import styles from "./Thanks.module.css";

export const Thanks: FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.innerBox}>
        <h1 className={styles.title}>Thank you!</h1>
        <p className={styles.description}>
          11/2,3の雙峰祭にて開催されたコミックつくばに出展いたしました。
          <br />
          立ち寄ってくださった皆さま、誠にありがとうございました！
        </p>
      </div>
    </div>
  );
};

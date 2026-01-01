import type { FC } from "react";
import styles from "./Thanks.module.css";

export const Thanks: FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.innerBox}>
        <h1 className={styles.title}>Thank you!</h1>
        <p className={styles.description}>
          C107では、「なついろにっき。」の体験版配布カードの配布などを行いました。
          <br />
          立ち寄ってくださった皆さま、誠にありがとうございました！
        </p>
      </div>
    </div>
  );
};

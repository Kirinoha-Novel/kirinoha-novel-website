import { type FC } from "react";
import styles from "./Trial.module.css";

export const Trial: FC = () => {
  return (
    <>
      <h1 className={styles.title}>体験版情報</h1>
      <p className={styles.description}>
        「なついろにっき。」の体験板は、ブラウザゲームとして遊ぶことができます。
        <br />
        以下のリンクからアクセスして、ぜひお楽しみください！
      </p>
      <div className={styles.linkWrapper}>
        <a
          href="https://natsuiro-game-trial.kirinohanovel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <span>体験版「なついろにっき。」</span>
          <span>はこちら！</span>
        </a>
      </div>
    </>
  );
};

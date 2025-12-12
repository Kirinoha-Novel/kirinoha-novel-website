import { type FC } from "react";
import styles from "./Topic.module.css";

const Topic: FC = () => {
  return (
    <>
      <h1 className={styles.title}>トピック</h1>
      <div className={styles.box}>
        <p className={styles.description}>
          コミックマーケット107では、きりのはのべる初の新作ノベルゲーム
          「なついろにっき。」の体験版を宣伝いたします。
          また、「なついろにっき。」に関する関連グッズも販売予定です。
          ぜひ当サークルブースにお立ち寄りください！
        </p>
        <a
          href="https://natsuiro.kirinohanovel.com/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          「なついろにっき。」公式サイトはこちら
        </a>
      </div>
    </>
  );
};
export { Topic };

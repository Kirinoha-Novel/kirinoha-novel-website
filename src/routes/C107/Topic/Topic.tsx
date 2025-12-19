import { type FC } from "react";
import styles from "./Topic.module.css";

export const Topic: FC = () => {
  return (
    <>
      <h1 className={styles.title}>メッセージ</h1>
      <p className={styles.description}>
        コミックマーケット107では、きりのはのべる初の新作ノベルゲーム
        「なついろにっき。」の体験版を紹介します。
        また、「なついろにっき。」に関する関連グッズも販売予定です。
        ぜひ当サークルブースにお立ち寄りください！
      </p>
      <div className={styles.linkWrapper}>
        <a href="https://natsuiro.kirinohanovel.com/" className={styles.link}>
          <span>「なついろにっき。」</span>
          <span>公式サイトはこちら！</span>
        </a>
      </div>
    </>
  );
};

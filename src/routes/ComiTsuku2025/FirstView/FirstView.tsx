import { useEffect, useState, type FC } from "react";
import styles from "./FirstView.module.css";
import meisiImage from "../assets/meisi.webp";

type RemainingTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

const FirstView: FC = () => {
  const [remainingTime, setRemainingTime] = useState<RemainingTime | null>(
    null
  );

  useEffect(() => {
    const targetDate = new Date("2025-11-02T00:00:00+09:00");

    const updateRemainingTime = () => {
      const nowDate = new Date();
      const diff = targetDate.getTime() - nowDate.getTime();

      if (diff <= 0) {
        setRemainingTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      const milliseconds = diff % 1000;

      setRemainingTime({ days, hours, minutes, seconds, milliseconds });
    };

    // 初回実行
    updateRemainingTime();
    // 10msごとに更新
    const timer = setInterval(updateRemainingTime, 10);

    // クリーンアップ
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.firstView}>
      <div className={styles.textBox}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Comic Tsukuba</h1>
        </div>
        <div className={styles.descriptionBox}>
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>:Kirinoha-Novel</p>
            {remainingTime ? (
              <p className={styles.description}>
                Remaining Time&gt; {remainingTime.days}D_
                {String(remainingTime.hours).padStart(2, "0")}:
                {String(remainingTime.minutes).padStart(2, "0")}:
                {String(remainingTime.seconds).padStart(2, "0")}.
                {String(remainingTime.milliseconds).padStart(3, "0")}
              </p>
            ) : (
              <p className={styles.description}>calculating...</p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.meisiImageBox}>
        <img
          className={styles.meisiImage}
          src={meisiImage}
          width={841}
          height={1337}
          alt="meisi"
        />
      </div>
    </div>
  );
};

export { FirstView };

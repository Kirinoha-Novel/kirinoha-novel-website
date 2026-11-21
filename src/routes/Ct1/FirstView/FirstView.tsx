import { useEffect, useState, type FC } from "react";
import styles from "./FirstView.module.css";
import meisiImage from "../assets/meisi.webp";

const targetDate = new Date("2025-11-02T00:00:00+09:00");

// "1D_02:03:04.005" until the event starts
const formatRemaining = (diff: number) => {
  const pad = (value: number, length = 2) =>
    String(Math.floor(value)).padStart(length, "0");
  return `${Math.floor(diff / (1000 * 60 * 60 * 24))}D_${pad((diff / (1000 * 60 * 60)) % 24)}:${pad((diff / (1000 * 60)) % 60)}:${pad((diff / 1000) % 60)}.${pad(diff % 1000, 3)}`;
};

const Details: FC<{ remaining: string | null }> = (props) => {
  return (
    <>
      <p className={styles.description}>:Kirinoha-Novel</p>
      <p className={styles.description}>Date&gt; 2025/11/02 ~ 2025/11/03</p>
      <p className={styles.description}>
        {props.remaining === null
          ? "calculating..."
          : `Remaining Time> ${props.remaining}`}
      </p>
    </>
  );
};

export const FirstView: FC = () => {
  const [remaining, setRemaining] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const diff = Math.max(targetDate.getTime() - Date.now(), 0);
      setRemaining(formatRemaining(diff));
      // stop updating once the event has started
      if (diff === 0) clearInterval(timer);
    };
    const timer = setInterval(update, 10);
    update();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.firstView}>
      <h1 className={styles.title}>:&gt; Comic Tsukuba</h1>
      <img
        className={styles.meisi}
        src={meisiImage}
        width={841}
        height={1337}
        alt="きりのはのべるの名刺"
      />
      <div className={styles.details}>
        <Details remaining={remaining} />
      </div>
    </div>
  );
};

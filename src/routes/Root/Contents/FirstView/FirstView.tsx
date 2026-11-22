import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, type FC } from "react";
import styles from "./FirstView.module.css";
import logo from "@/shared/assets/logo.webp";

const date = new Date().toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const FirstView: FC = () => {
  const catchPhraseWrapper = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to(catchPhraseWrapper.current, {
      opacity: 1,
      duration: 2,
    });
  });

  return (
    <div className={styles.firstView}>
      {/* diary page header */}
      <div className={styles.header}>
        <p className={styles.headerItem}>制作日誌</p>
        <p className={styles.headerItem}>Date. {date}</p>
      </div>
      <div className={styles.catchPhraseWrapper} ref={catchPhraseWrapper}>
        <h1>
          <img
            className={styles.logo}
            src={logo}
            width={451}
            height={293}
            alt="きりのはのべる"
          />
        </h1>
        <p className={styles.title}>「きりのは」が綴る物語</p>
      </div>
    </div>
  );
};

export { FirstView };

import { useEffect, useState, type FC } from "react";
import styles from "./Header.module.css";

export const Header: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // FirstView を半分ほど過ぎたら表示する
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${visible ? styles.visible : ""}`}>
      <a className={styles.label} href="/" tabIndex={visible ? 0 : -1}>
        <span className={styles.arrow} aria-hidden="true">
          ←
        </span>
        <span className={styles.text}>
          <span className={styles.sub}>きりのはのべる</span>
          <span className={styles.main}>トップページへ戻る</span>
        </span>
      </a>
    </header>
  );
};

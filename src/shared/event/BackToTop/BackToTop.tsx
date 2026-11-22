import { useEffect, useState, type FC } from "react";
import { Link } from "react-router";
import styles from "./BackToTop.module.css";

export const BackToTop: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // show once the first view is half scrolled past
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${styles.backToTop} ${visible ? styles.visible : ""}`}
      aria-label="トップページへ戻る"
    >
      <Link className={styles.label} to="/">
        <span className={styles.arrow} aria-hidden="true">
          ←
        </span>
        <span className={styles.text}>
          <span className={styles.sub}>きりのはのべる</span>
          <span className={styles.main}>トップページへ戻る</span>
        </span>
      </Link>
    </nav>
  );
};

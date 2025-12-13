import { useEffect, useRef, type FC } from "react";
import { gsap } from "gsap";
import styles from "./Loading.module.css";

export const Loading: FC = () => {
  const overlay = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!overlay.current) return;

    // フェードアウトアニメーション
    const fadeOut = () => {
      if (!overlay.current) return;

      gsap.to(overlay.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          if (!overlay.current) return;
          overlay.current.style.display = "none";
        },
      });
    };

    // すでにロード済みなら即実行
    if (document.readyState === "complete") {
      fadeOut();
    } else {
      window.addEventListener("load", fadeOut, { once: true });
    }

    return () => window.removeEventListener("load", fadeOut);
  }, []);

  return <div className={styles.overlay} ref={overlay}></div>;
};

import { useEffect, useRef, type FC } from "react";
import { gsap } from "gsap";
import styles from "./Loading.module.css";

export const Loading: FC = () => {
  const overlay = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = overlay.current;
    if (!element) return;

    const fadeOut = () => {
      gsap.to(element, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          element.style.display = "none";
        },
      });
    };

    // already loaded (e.g. opened from another page of this site): fade out now
    if (document.readyState === "complete") {
      fadeOut();
    } else {
      window.addEventListener("load", fadeOut, { once: true });
    }

    return () => {
      window.removeEventListener("load", fadeOut);
      gsap.killTweensOf(element);
    };
  }, []);

  return <div className={styles.overlay} ref={overlay}></div>;
};

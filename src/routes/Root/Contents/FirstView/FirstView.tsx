import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, type FC } from "react";
import styles from "./FirstView.module.css";

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
      <div className={styles.catchPhraseContainer}>
        <div className={styles.catchPhraseWrapper} ref={catchPhraseWrapper}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>「きりのは」が綴る物語</h2>
          </div>
          <img className={styles.leaf} src="/leaf.png" alt="leaf" />
        </div>
      </div>
    </div>
  );
};

export { FirstView };

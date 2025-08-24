import styles from "./FirstView.module.css";
import type { FC } from "react";

const FirstView: FC = () => {
  return (
    <div className={styles.firstView}>
      <div className={styles.keyVisualWrapper}>
        <div>
          <div className={styles.catchPhraseWrapper}>
            <h2 className={styles.catchPhrase}>「きりのは」が綴る物語</h2>
          </div>
          <img className={styles.keyVisual} src="/leaf.png" alt="leaf" />
        </div>
      </div>
    </div>
  );
};

export default FirstView;

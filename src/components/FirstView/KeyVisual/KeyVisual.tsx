import type { FC } from "react";
import styles from "./KeyVisual.module.css";

export const KeyVisual: FC = () => {
  return (
    <div className={styles.keyVisualWrapper}>
      <div>
        <div className={styles.catchPhraseWrapper}>
          <h2 className={styles.catchPhrase}>「きりのは」が綴る物語</h2>
        </div>
        <img className={styles.keyVisual} src="/leaf.png" alt="leaf" />
      </div>
    </div>
  );
};

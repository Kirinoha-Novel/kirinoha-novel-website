import styles from "./FirstView.module.css";
import type { FC } from "react";
import { KeyVisual } from "./KeyVisual/KeyVisual";
import { Label } from "./Label/Label";

const FirstView: FC = () => {
  return (
    <>
      <div className={styles.firstView}>
        <KeyVisual />
        <Label />
      </div>
      <div className={styles.frame}></div>
    </>
  );
};

export default FirstView;

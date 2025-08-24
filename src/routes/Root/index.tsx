import type { FC } from "react";
import styles from "./index.module.css";
import { Label } from "./Label/Label";
import { Contents } from "./Contents/Contents";

const Root: FC = () => {
  return (
    <div className={styles.frame}>
      <Label />
      <div className={styles.window}>
        <Contents />
      </div>
      <div className={styles.bar}></div>
    </div>
  );
};

export default Root;

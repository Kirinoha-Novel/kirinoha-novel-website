import type { FC } from "react";
import styles from "./index.module.css";
import { Label } from "./Label/Label";
import { Contents } from "./Contents/Contents";
const Root: FC = () => {
  return (
    <div className={styles.frame}>
      <Label />
      <Contents />
      <div className={styles.bar}></div>
    </div>
  );
};

export default Root;

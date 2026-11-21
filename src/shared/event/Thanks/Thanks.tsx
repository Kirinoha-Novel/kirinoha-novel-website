import type { FC, ReactNode } from "react";
import styles from "./Thanks.module.css";
import event from "../event.module.css";

type Props = {
  children: ReactNode;
};

export const Thanks: FC<Props> = (props: Props) => {
  return (
    <div className={styles.box}>
      <div className={styles.innerBox}>
        <h2 className={event.title}>Thank you!</h2>
        <p className={styles.description}>{props.children}</p>
      </div>
    </div>
  );
};

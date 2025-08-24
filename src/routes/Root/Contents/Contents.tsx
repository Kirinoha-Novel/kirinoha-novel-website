import { useRef, type FC } from "react";
import styles from "./Contents.module.css";
import About from "./About/About";
import FirstView from "./FirstView/FirstView";

export const Contents: FC = () => {
  const content = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.content} ref={content}>
      <FirstView />
      <About contentRef={content} />
    </div>
  );
};

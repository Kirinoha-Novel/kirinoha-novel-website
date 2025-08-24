import { useRef, type FC } from "react";
import styles from "./Contents.module.css";
import About from "./About/About";
import FirstView from "./FirstView/FirstView";

export const Contents: FC = () => {
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.content} ref={container}>
      <FirstView />
      <About containerRef={container} />
    </div>
  );
};

import { useRef, type FC } from "react";
import styles from "./Contents.module.css";
import About from "./About/About";
import FirstView from "./FirstView/FirstView";

export const Contents: FC = () => {
  const contents = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.contents} ref={contents}>
      <FirstView />
      <About contentsRef={contents} />
    </div>
  );
};

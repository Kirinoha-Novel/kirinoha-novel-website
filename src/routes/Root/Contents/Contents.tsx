import { useRef, type FC } from "react";
import styles from "./Contents.module.css";
import About from "./About/About";
import FirstView from "./FirstView/FirstView";
import { News } from "./News/News";

export const Contents: FC = () => {
  const contents = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.contents} ref={contents}>
      <FirstView contentsRef={contents} />
      <News />
      <About contentsRef={contents} />
    </div>
  );
};

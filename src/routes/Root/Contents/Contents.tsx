import { useRef, type FC } from "react";
import styles from "./Contents.module.css";
import About from "./About/About";
import FirstView from "./FirstView/FirstView";
import { News } from "./News/News";
import { Footer } from "./Footer/Footer";

export const Contents: FC = () => {
  const contents = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.contents} ref={contents}>
      <FirstView contentsRef={contents} />
      <About contentsRef={contents} />
      <News contentsRef={contents} />
      <Footer />
    </div>
  );
};

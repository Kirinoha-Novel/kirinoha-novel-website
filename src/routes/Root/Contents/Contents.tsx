import { useRef, type FC } from "react";
import styles from "./Contents.module.css";
import About from "./About/About";
import FirstView from "./FirstView/FirstView";
import { News } from "./News/News";
import { Footer } from "./Footer/Footer";
import { Blog } from "./Blog/Blog";
import { Title } from "./Title/Title";
import { History } from "./History/History";

export const Contents: FC = () => {
  const contents = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.contents} ref={contents}>
      <FirstView contentsRef={contents} />
      <About contentsRef={contents} />
      <Title title="News" contentsRef={contents} />
      <News contentsRef={contents} />
      <Title title="Blog" contentsRef={contents} />
      <Blog contentsRef={contents} />
      <Title title="History" contentsRef={contents} />
      <History contentsRef={contents} />
      <Footer />
    </div>
  );
};

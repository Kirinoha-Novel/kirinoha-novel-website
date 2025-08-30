import { useRef, type FC } from "react";
import styles from "./Contents.module.css";
import { Title } from "./Title/Title";
import { FirstView } from "./FirstView/FirstView";
import { About } from "./About/About";
import { News } from "./News/News";
import { Blog } from "./Blog/Blog";
import { Products } from "./Products/Products";
import { Gallery } from "./Gallery/Gallery";
import { Footer } from "./Footer/Footer";

export const Contents: FC = () => {
  const contents = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.contents} ref={contents}>
      <FirstView />
      <About contentsRef={contents} />
      <Title title="News" contentsRef={contents} />
      <News contentsRef={contents} />
      <Title title="Blog" contentsRef={contents} />
      <Blog contentsRef={contents} />
      <Title title="Products" contentsRef={contents} />
      <Products contentsRef={contents} />
      <Title title="Gallery" contentsRef={contents} />
      <Gallery contentsRef={contents} />
      <Footer />
    </div>
  );
};

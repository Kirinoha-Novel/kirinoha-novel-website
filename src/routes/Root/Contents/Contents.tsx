import { useRef, type FC } from "react";
import styles from "./Contents.module.css";
import About from "./About/About";
import FirstView from "./FirstView/FirstView";
import { News } from "./News/News";
import { Footer } from "./Footer/Footer";
import { Blog } from "./Blog/Blog";
import { Title } from "./Title/Title";
import { Products } from "./Products/Products";
import { Gallery } from "./Gallery/Gallery";

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
      <Title title="Products" contentsRef={contents} />
      <Products contentsRef={contents} />
      <Title title="Gallery" contentsRef={contents} />
      <Gallery contentsRef={contents} />
      <Footer />
    </div>
  );
};

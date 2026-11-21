import type { FC } from "react";
import styles from "./Contents.module.css";
import notebook from "@/shared/notebook.module.css";
import { Title } from "./Title/Title";
import { FirstView } from "./FirstView/FirstView";
import { Topic } from "./Topic/Topic";
import { About } from "./About/About";
import { News } from "./News/News";
import { Blog } from "./Blog/Blog";
import { History } from "./History/History";
import { Gallery } from "./Gallery/Gallery";
import { Footer } from "./Footer/Footer";

export const Contents: FC = () => {
  return (
    <main
      className={`${styles.contents} ${notebook.ruled} ${notebook.marginLine}`}
    >
      <FirstView />
      <About />
      <Title title="Topic" />
      <Topic />
      <Title title="News" />
      <News />
      <Title title="Blog" />
      <Blog />
      <Title title="History" />
      <History />
      <Title title="Gallery" />
      <Gallery />
      <Footer />
    </main>
  );
};

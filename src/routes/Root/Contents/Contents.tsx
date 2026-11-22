import { Fragment, type FC } from "react";
import styles from "./Contents.module.css";
import notebook from "@/shared/notebook.module.css";
import { Title } from "./Title/Title";
import { FirstView } from "./FirstView/FirstView";
import { About } from "./About/About";
import { Footer } from "./Footer/Footer";
import { sectionId, sections } from "./sections";

export const Contents: FC = () => {
  return (
    <main
      className={`${styles.contents} ${notebook.ruled} ${notebook.marginLine}`}
    >
      <FirstView />
      <About />
      {sections.map(({ title, Section }) => (
        <Fragment key={title}>
          <Title title={title} id={sectionId(title)} />
          <Section />
        </Fragment>
      ))}
      <Footer />
    </main>
  );
};

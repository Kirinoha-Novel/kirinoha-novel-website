import type { FC } from "react";
import styles from "./index.module.css";
import { Loading } from "./Loading/Loading";
import { FirstView } from "./FirstView/FirstView";
import { Footer } from "./Footer/Footer";

const C107: FC = () => {
  return (
    <>
      <Loading />
      <div className={styles.container}>
        <FirstView />
        <Footer />
      </div>
    </>
  );
};

export default C107;

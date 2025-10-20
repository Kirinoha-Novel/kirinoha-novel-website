import { type FC } from "react";
import { Loading } from "./Loading/Loading";
import { Header } from "./Header/Header";
import { FirstView } from "./FirstView/FirstView";
import { Place } from "./Place/Place";
import { Lineup } from "./Lineup/Lineup";
import { Footer } from "./Footer/Footer";
import styles from "./index.module.css";

const TsukuComi2025: FC = () => {
  return (
    <>
      <Loading />
      <div className={styles.container}>
        <Header />
        <FirstView />
        <Place />
        <Lineup />
        <Footer />
      </div>
    </>
  );
};

export default TsukuComi2025;

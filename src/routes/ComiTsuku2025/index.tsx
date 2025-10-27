import { type FC } from "react";
import { Loading } from "./Loading/Loading";
import { Header } from "./Header/Header";
import { FirstView } from "./FirstView/FirstView";
import { Place } from "./Place/Place";
import { Lineup } from "./Lineup/Lineup";
import { Footer } from "./Footer/Footer";
import styles from "./index.module.css";
import {
  trackWindowScroll,
  type ScrollPosition,
} from "react-lazy-load-image-component";

type Props = {
  scrollPosition: ScrollPosition;
};

const TsukuComi2025Page: FC<Props> = (props) => {
  return (
    <>
      <Loading />
      <div className={styles.container}>
        <Header />
        <FirstView />
        <Place scrollPosition={props.scrollPosition} />
        <Lineup scrollPosition={props.scrollPosition} />
        <Footer />
      </div>
    </>
  );
};

const TsukuComi2025 = trackWindowScroll(TsukuComi2025Page);
export default TsukuComi2025;

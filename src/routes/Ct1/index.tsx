import { type FC } from "react";
import { Loading } from "./Loading/Loading";
import { Header } from "./Header/Header";
import { FirstView } from "./FirstView/FirstView";
import { Thanks } from "./Thanks/Thanks";
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

const Ct1Page: FC<Props> = (props) => {
  return (
    <>
      <Loading />
      <div className={styles.container}>
        <Header />
        <FirstView />
        <Thanks />
        <Place scrollPosition={props.scrollPosition} />
        <Lineup scrollPosition={props.scrollPosition} />
        <Footer />
      </div>
    </>
  );
};

const Ct1 = trackWindowScroll(Ct1Page);
export default Ct1;

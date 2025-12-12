import type { FC } from "react";
import styles from "./index.module.css";
import { Loading } from "./Loading/Loading";
import { FirstView } from "./FirstView/FirstView";
import { Topic } from "./Topic/Topic";
import { Info } from "./Info/Info";
import { Footer } from "./Footer/Footer";
// import {
//   trackWindowScroll,
//   type ScrollPosition,
// } from "react-lazy-load-image-component";
// import { Lineup } from "./Lineup/Lineup";

// type Props = {
//   scrollPosition: ScrollPosition;
// };

// const C107Page: FC<Props> = (props) => {
const C107: FC = () => {
  return (
    <>
      <Loading />
      <div className={styles.container}>
        <FirstView />
        <Topic />
        <Info />
        {/* <Lineup scrollPosition={props.scrollPosition} /> */}
        <Footer />
      </div>
    </>
  );
};

// const C107 = trackWindowScroll(C107Page);
export default C107;

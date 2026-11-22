import type { FC } from "react";
import {
  trackWindowScroll,
  type ScrollPosition,
} from "react-lazy-load-image-component";
import styles from "./index.module.css";
import { Loading } from "@/shared/event/Loading/Loading";
import { Thanks } from "@/shared/event/Thanks/Thanks";
import { Lineup } from "@/shared/event/Lineup/Lineup";
import { Footer } from "@/shared/event/Footer/Footer";
import { BackToTop } from "@/shared/event/BackToTop/BackToTop";
import { FirstView } from "./FirstView/FirstView";
import { Topic } from "./Topic/Topic";
import { Info } from "./Info/Info";
import { Trial } from "./Trial/Trial";
import { lineupItems } from "./lineup";

type Props = {
  scrollPosition: ScrollPosition;
};

const C107Page: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <title>コミックマーケット107 | きりのはのべる</title>
      <Loading />
      <BackToTop />
      <main>
        <FirstView />
        <Thanks>
          C107では、「なついろにっき。」の体験版配布カードの配布などを行いました。
          <br />
          立ち寄ってくださった皆さま、誠にありがとうございました！
        </Thanks>
        <Topic />
        <Info />
        <Trial />
        <Lineup
          title="製品情報"
          items={lineupItems}
          scrollPosition={props.scrollPosition}
        />
      </main>
      <Footer />
    </div>
  );
};

const C107 = trackWindowScroll(C107Page);
export default C107;

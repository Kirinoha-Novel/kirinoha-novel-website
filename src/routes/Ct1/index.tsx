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
import { Header } from "./Header/Header";
import { FirstView } from "./FirstView/FirstView";
import { Place } from "./Place/Place";
import { lineupItems } from "./lineup";

type Props = {
  scrollPosition: ScrollPosition;
};

const Ct1Page: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <title>コミックつくば | きりのはのべる</title>
      <Loading />
      <Header />
      <BackToTop />
      <main>
        <FirstView />
        <Thanks>
          11/2,3の雙峰祭にて開催されたコミックつくばに出展いたしました。
          <br />
          立ち寄ってくださった皆さま、誠にありがとうございました！
        </Thanks>
        <Place scrollPosition={props.scrollPosition} />
        <Lineup
          title="Lineup"
          items={lineupItems}
          scrollPosition={props.scrollPosition}
        />
      </main>
      <Footer />
    </div>
  );
};

const Ct1 = trackWindowScroll(Ct1Page);
export default Ct1;

import { useRef, type FC, type RefObject } from "react";
import styles from "./News.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Info } from "./Info/Info";
import { infoArray } from "../../../../news";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

export const News: FC<Props> = (props: Props) => {
  const ulWrapper = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to(ulWrapper.current, {
      opacity: 1,
      y: -20,
      duration: 1,
      scrollTrigger: {
        scroller: props.contentsRef.current,
        trigger: ulWrapper.current,
        start: "top center+=25%",
        markers: false,
      },
    });
  });

  return (
    <section>
      <div className={styles.ulWrapper} ref={ulWrapper}>
        <ul className={styles.ul}>
          {infoArray.map((info, index) => (
            <Info key={index} {...info} />
          ))}
        </ul>
      </div>
    </section>
  );
};

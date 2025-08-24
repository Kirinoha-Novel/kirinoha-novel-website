import { useRef, type FC, type RefObject } from "react";
import styles from "./News.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Info } from "./Info/Info";
import { infoArray } from "../../../../data";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

export const News: FC<Props> = (props: Props) => {
  const ul = useRef<HTMLUListElement | null>(null);

  useGSAP(
    () => {
      gsap.to(ul.current, {
        opacity: 1,
        y: -20,
        duration: 1,
        scrollTrigger: {
          scroller: props.contentsRef.current,
          trigger: ul.current,
          start: "top center",
          markers: true,
        },
      });
    },
    { scope: props.contentsRef }
  );

  return (
    <section>
      <ul className={styles.ul} ref={ul}>
        {infoArray.map((info, index) => (
          <Info key={index} {...info} />
        ))}
      </ul>
    </section>
  );
};

import { useRef, type FC, type RefObject } from "react";
import styles from "./Title.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  title: string;
  contentsRef: RefObject<HTMLDivElement | null>;
};

export const Title: FC<Props> = (props: Props) => {
  const title = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    gsap.to(title.current, {
      opacity: 1,
      y: -20,
      duration: 1,
      scrollTrigger: {
        scroller: props.contentsRef.current,
        trigger: title.current,
        start: "top center",
        markers: false,
      },
    });
  });

  return (
    <h1 className={styles.title} ref={title}>
      {props.title}
    </h1>
  );
};

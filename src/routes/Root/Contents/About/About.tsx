import { useRef, type FC, type RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./About.module.css";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

const About: FC<Props> = (props: Props) => {
  const title = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.to(title.current, {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          scroller: props.contentsRef.current,
          trigger: title.current,
          start: "top center",
          markers: true,
        },
      });
    },
    { scope: props.contentsRef }
  );

  return (
    <section>
      <div className={styles.title} ref={title}>
        サークル紹介
      </div>
      <div className={styles.tmp}>Hello, World!</div>
    </section>
  );
};

export default About;

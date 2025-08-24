import { useRef, type FC, type RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./About.module.css";

type Props = {
  contentRef: RefObject<HTMLDivElement | null>;
};

const About: FC<Props> = (props: Props) => {
  const title = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(title.current, {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          scroller: props.contentRef.current,
          trigger: title.current,
          start: "top center",
          markers: true,
        },
      });
    },
    { scope: props.contentRef }
  );

  return (
    <section>
      <div className={styles.title} ref={title}>
        サークル紹介
      </div>
      <div className={styles.content}>Hello, World!</div>
    </section>
  );
};

export default About;

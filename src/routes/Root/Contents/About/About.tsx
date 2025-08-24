import { useRef, type FC, type RefObject } from "react";
import styles from "./About.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  containerRef: RefObject<HTMLDivElement | null>;
};

const About: FC<Props> = (props: Props) => {
  const title = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.to(title.current, {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          scroller: props.containerRef.current,
          trigger: title.current,
          start: "top center",
          markers: true,
        },
      });
    },
    { scope: props.containerRef }
  );

  return (
    <section>
      <h1 className={styles.title} ref={title}>
        サークル紹介
      </h1>
      <div className={styles.content}></div>
    </section>
  );
};

export default About;

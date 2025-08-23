import { useRef, type FC } from "react";
import styles from "./About.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About: FC = () => {
  const container = useRef<HTMLElement | null>(null);
  const title = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.to("[data-animate='title']", {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: "[data-animate='title']",
          start: "top center",
          markers: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <h1 data-animate="title" className={styles.title} ref={title}>
        サークル紹介
      </h1>
      <div className={styles.content}></div>
    </section>
  );
};

export default About;

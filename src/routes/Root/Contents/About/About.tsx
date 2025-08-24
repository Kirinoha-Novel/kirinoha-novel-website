import { useRef, type FC, type RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./About.module.css";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

const About: FC<Props> = (props: Props) => {
  const logo = useRef<HTMLImageElement | null>(null);
  const description = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      gsap.to(logo.current, {
        opacity: 1,
        y: -20,
        duration: 1,
        scrollTrigger: {
          scroller: props.contentsRef.current,
          trigger: logo.current,
          start: "top center",
          markers: true,
        },
      });

      gsap.to(description.current, {
        opacity: 1,
        y: -20,
        duration: 1,
        scrollTrigger: {
          scroller: props.contentsRef.current,
          trigger: description.current,
          start: "top center",
          markers: true,
        },
      });
    },
    { scope: props.contentsRef }
  );

  return (
    <section>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src="/logo.svg" alt="logo" ref={logo} />
      </div>
      <div className={styles.descriptionWrapper}>
        <p className={styles.description} ref={description}>
          同人美少女ゲーム制作サークル「きりのはのべる」です。
          <br />
          弊団体は筑波大生が集い、同人の美少女ゲーム/ノベルゲームを制作しています。
          筑波大学を飛び越えてみなさんに萌えをお届けします。
        </p>
      </div>
      <div className={styles.tmp}></div>
    </section>
  );
};

export default About;

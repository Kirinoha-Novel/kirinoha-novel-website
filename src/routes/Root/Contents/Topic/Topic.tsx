import { useRef, type FC, type RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Topic.module.css";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

const Topic: FC<Props> = (props: Props) => {
  const topic = useRef<HTMLHeadingElement | null>(null);
  const description = useRef<HTMLParagraphElement | null>(null);
  const link = useRef<HTMLAnchorElement | null>(null);

  useGSAP(() => {
    gsap.to(topic.current, {
      opacity: 1,
      y: -20,
      duration: 1,
      scrollTrigger: {
        scroller: props.contentsRef.current,
        trigger: topic.current,
        start: "top center+=25%",
        markers: false,
      },
    });

    gsap.to(description.current, {
      opacity: 1,
      y: -20,
      duration: 1,
      scrollTrigger: {
        scroller: props.contentsRef.current,
        trigger: description.current,
        start: "top center+=25%",
        markers: false,
      },
    });

    gsap.to(link.current, {
      opacity: 1,
      y: -20,
      duration: 1,
      scrollTrigger: {
        scroller: props.contentsRef.current,
        trigger: link.current,
        start: "top center+=25%",
        markers: false,
      },
    });
  });

  return (
    <section>
      <h2 className={styles.topic} ref={topic}>
        コミックマーケット C107に出展します！
      </h2>
      <p className={styles.description} ref={description}>
        コミックマーケット C107の2日目（2025年12月31日（水））
        に出展いたします。ブース番号は「南地区 Lブロック -
        21b」です。新作のゲームの体験版の紹介やグッズの販売を予定しておりますので、
        ぜひお立ち寄りください！
      </p>
      <a
        className={styles.link}
        ref={link}
        href="/c107"
        rel="noopener noreferrer"
      >
        <span>コミックマーケット C107&nbsp;</span>
        <span>特設サイトはこちらから！</span>
      </a>
    </section>
  );
};

export { Topic };

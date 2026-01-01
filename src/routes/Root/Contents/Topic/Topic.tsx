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
        コミックマーケット C107に出展しました！
      </h2>
      <p className={styles.description} ref={description}>
        C107では、「なついろにっき。」の体験版配布カードの配布などを行いました。
        立ち寄ってくださった皆さま、誠にありがとうございました！
      </p>
      <div className={styles.linkWrapper}>
        <a className={styles.link} ref={link} href="/c107">
          <span>コミックマーケット C107&nbsp;</span>
          <span>特設サイトはこちら！</span>
        </a>
      </div>
    </section>
  );
};

export { Topic };

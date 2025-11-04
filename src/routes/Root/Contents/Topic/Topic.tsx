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
        コミックつくばに出展しました！
      </h2>
      <p className={styles.description} ref={description}>
        11/2,3の雙峰祭にて開催されたコミックつくばに出展いたしました。
        <br />
        立ち寄ってくださった皆さま、誠にありがとうございました！
      </p>
      <a
        className={styles.link}
        ref={link}
        href="/comitsuku2025"
        rel="noopener noreferrer"
      >
        コミックつくば 特設サイトはこちらから！
      </a>
    </section>
  );
};

export { Topic };

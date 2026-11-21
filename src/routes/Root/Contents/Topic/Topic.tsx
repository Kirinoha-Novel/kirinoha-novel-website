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
        「なついろにっき。」DLsite にて販売中！
      </h2>
      <p className={styles.description} ref={description}>
        きりのはのべる の最初の作品「なついろにっき。」は、DLsite
        にて販売中です。
      </p>
      <div className={styles.linkWrapper}>
        <a
          className={styles.link}
          ref={link}
          href="https://www.dlsite.com/maniax/work/=/product_id/RJ01703526.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>DLsite&nbsp;</span>
          <span>販売ページはこちら！</span>
        </a>
      </div>
    </section>
  );
};

export { Topic };

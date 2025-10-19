import { useRef, type FC, type RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Topic.module.css";
import { Link } from "react-router";

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
        start: "top center",
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
        start: "top center",
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
        start: "top center",
        markers: false,
      },
    });
  });

  return (
    <section>
      <h2 className={styles.topic} ref={topic}>
        コミックつくばに出展!
      </h2>
      <p className={styles.description} ref={description}>
        11/2,3の雙峰祭にて開催されるコミックつくばに出展します。
      </p>
      <Link className={styles.link} ref={link} to="/comitsuku2025">
        コミックつくば 特設サイトはこちらから！
      </Link>
    </section>
  );
};

export { Topic };

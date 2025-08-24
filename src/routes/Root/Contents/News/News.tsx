import { useRef, type FC, type RefObject } from "react";
import styles from "./News.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

export const News: FC<Props> = (props: Props) => {
  const title = useRef<HTMLHeadingElement | null>(null);
  const twitterWrapper = useRef<HTMLAnchorElement | null>(null);

  useGSAP(
    () => {
      gsap.to(title.current, {
        opacity: 1,
        y: -20,
        duration: 1,
        scrollTrigger: {
          scroller: props.contentsRef.current,
          trigger: title.current,
          start: "top center",
          markers: true,
        },
      });

      gsap.to(twitterWrapper.current, {
        opacity: 1,
        y: -20,
        duration: 1,
        scrollTrigger: {
          scroller: props.contentsRef.current,
          trigger: twitterWrapper.current,
          start: "top center",
          markers: true,
        },
      });
    },
    { scope: props.contentsRef }
  );

  return (
    <section>
      <h1 className={styles.title} ref={title}>
        News
      </h1>
      <a
        href={"https://x.com/kirinohanovel"}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.twitterWrapper}
        ref={twitterWrapper}
      >
        <div className={styles.iconWrapper}>
          <img className={styles.icon} src="/icon.png" alt="circle icon" />
        </div>
        <div>
          <h2 className={styles.twitterAccount}>
            アカウント名: @kirinohanovel
          </h2>
          <p className={styles.twitterDescription}>
            情報発信は、X (旧: Twitter) で行っています。
          </p>
        </div>
      </a>
    </section>
  );
};

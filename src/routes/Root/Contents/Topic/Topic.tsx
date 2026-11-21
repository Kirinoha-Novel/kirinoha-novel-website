import { useRef, type FC } from "react";
import styles from "./Topic.module.css";
import { useFadeUp } from "@/shared/useFadeUp";
import notebook from "@/shared/notebook.module.css";

const Topic: FC = () => {
  const topic = useRef<HTMLHeadingElement | null>(null);
  const description = useRef<HTMLParagraphElement | null>(null);
  const link = useRef<HTMLAnchorElement | null>(null);

  useFadeUp([topic, description, link]);

  return (
    <section>
      <h3 className={styles.topic} ref={topic}>
        「なついろにっき。」DLsite にて販売中！
      </h3>
      <p className={styles.description} ref={description}>
        きりのはのべる の最初の作品「なついろにっき。」は、DLsite
        にて販売中です。
      </p>
      <div className={styles.linkWrapper}>
        <a
          className={`${styles.link} ${notebook.pill}`}
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

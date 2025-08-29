import { useRef, type FC, type RefObject } from "react";
import styles from "./Blog.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

export const Blog: FC<Props> = (props: Props) => {
  const blogContainer = useRef<HTMLAnchorElement | null>(null);

  useGSAP(
    () => {
      gsap.to(blogContainer.current, {
        opacity: 1,
        y: -20,
        duration: 1,
        scrollTrigger: {
          scroller: props.contentsRef.current,
          trigger: blogContainer.current,
          start: "top center",
          markers: false,
        },
      });
    },
    { scope: props.contentsRef }
  );

  return (
    <section>
      <a
        href={"https://blog.kirinohanovel.com"}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.blogContainer}
        ref={blogContainer}
      >
        <div className={styles.iconWrapper}>
          <img className={styles.icon} src="/icon.webp" alt="circle icon" />
        </div>
        <div className={styles.blogText}>
          <h2 className={styles.blogTitle}>制作日記</h2>
          <p className={styles.blogDescription}>
            <span className={styles.span}>ゲーム制作に関する内容が</span>
            <span className={styles.span}>綴られます！</span>
          </p>
        </div>
      </a>
    </section>
  );
};

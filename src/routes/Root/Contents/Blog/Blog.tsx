import { useRef, type FC, type RefObject } from "react";
import styles from "./Blog.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

export const Blog: FC<Props> = (props: Props) => {
  const blogWrapper = useRef<HTMLAnchorElement | null>(null);

  useGSAP(
    () => {
      gsap.to(blogWrapper.current, {
        opacity: 1,
        y: -20,
        duration: 1,
        scrollTrigger: {
          scroller: props.contentsRef.current,
          trigger: blogWrapper.current,
          start: "top center",
          markers: true,
        },
      });
    },
    { scope: props.contentsRef }
  );

  return (
    <section>
      <a
        href={""}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.blogWrapper}
        ref={blogWrapper}
      >
        <div className={styles.iconWrapper}>
          <img className={styles.icon} src="/icon.webp" alt="circle icon" />
        </div>
        <div>
          <h2 className={styles.blogTitle}>制作日記</h2>
          <p className={styles.blogDescription}>
            ゲーム制作に関する内容が綴られます！
          </p>
        </div>
      </a>
    </section>
  );
};

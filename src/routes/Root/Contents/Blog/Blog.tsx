import { useRef, type FC } from "react";
import styles from "./Blog.module.css";
import { useFadeUp } from "@/shared/useFadeUp";
import notebook from "@/shared/notebook.module.css";

export const Blog: FC = () => {
  const blogContainer = useRef<HTMLAnchorElement | null>(null);

  useFadeUp([blogContainer]);

  return (
    <section>
      <a
        href={"https://blog.kirinohanovel.com"}
        className={`${styles.blogContainer} ${notebook.paper} ${notebook.tape}`}
        ref={blogContainer}
      >
        <div className={styles.iconWrapper}>
          <img
            className={styles.icon}
            src="/icon.webp"
            width={2508}
            height={2508}
            alt="きりのはのべるのアイコン"
          />
        </div>
        <div className={styles.blogText}>
          <h3 className={styles.blogTitle}>制作日記</h3>
          <p className={styles.blogDescription}>
            <span className={styles.span}>ゲーム制作に関する内容が</span>
            <span className={styles.span}>綴られます！</span>
          </p>
        </div>
      </a>
    </section>
  );
};

import { useRef, type FC } from "react";
import styles from "./News.module.css";
import { useFadeUp } from "@/shared/useFadeUp";
import notebook from "@/shared/notebook.module.css";
import { Info } from "./Info/Info";
import { infoArray } from "@/news";

export const News: FC = () => {
  const ulWrapper = useRef<HTMLDivElement | null>(null);

  useFadeUp([ulWrapper]);

  return (
    <section>
      <div
        className={`${styles.ulWrapper} ${notebook.paper} ${notebook.tape}`}
        ref={ulWrapper}
      >
        <ul className={styles.ul}>
          {infoArray.map((info, index) => (
            <Info key={index} {...info} />
          ))}
        </ul>
      </div>
    </section>
  );
};

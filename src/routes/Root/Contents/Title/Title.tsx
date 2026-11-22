import { useRef, type FC } from "react";
import styles from "./Title.module.css";
import { useFadeUp } from "@/shared/useFadeUp";
import notebook from "@/shared/notebook.module.css";

type Props = {
  title: string;
  id: string;
};

export const Title: FC<Props> = (props: Props) => {
  const title = useRef<HTMLHeadingElement | null>(null);

  useFadeUp([title]);

  return (
    <h2
      className={`${styles.title} ${notebook.marker}`}
      id={props.id}
      ref={title}
    >
      {props.title}
    </h2>
  );
};

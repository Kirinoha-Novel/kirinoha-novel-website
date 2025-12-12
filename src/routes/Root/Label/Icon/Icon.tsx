import styles from "./Icon.module.css";
import type { FC } from "react";
import type { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  url: string;
};

export const Icon: FC<Props> = (props: Props) => {
  return (
    <a href={props.url} className={styles.link}>
      <props.Icon />
    </a>
  );
};

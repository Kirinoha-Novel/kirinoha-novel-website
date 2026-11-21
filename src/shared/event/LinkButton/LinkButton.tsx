import type { FC } from "react";
import styles from "./LinkButton.module.css";

type Props = {
  href: string;
  // each phrase is kept on one line when the text wraps
  phrases: string[];
  external?: boolean;
};

export const LinkButton: FC<Props> = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.link}
        href={props.href}
        {...(props.external && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {props.phrases.map((phrase) => (
          <span key={phrase}>{phrase}</span>
        ))}
      </a>
    </div>
  );
};

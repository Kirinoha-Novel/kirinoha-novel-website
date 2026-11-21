import type { FC } from "react";
import styles from "./Label.module.css";
import notebook from "../notebook.module.css";
import logo from "../assets/logo.webp";

type Tab = {
  label: string;
  // tabs without href are labels only (e.g. the error code)
  href?: string;
};

type Props = {
  tabs: Tab[];
};

export const Label: FC<Props> = (props: Props) => {
  return (
    <div className={styles.label}>
      {/* index tabs */}
      <nav className={styles.tabs} aria-label="目次">
        {props.tabs.map((tab) =>
          tab.href ? (
            <a className={styles.tab} href={tab.href} key={tab.label}>
              {tab.label}
            </a>
          ) : (
            <span className={styles.tab} key={tab.label}>
              {tab.label}
            </span>
          ),
        )}
      </nav>
      {/* stickers on the inside cover */}
      <img
        className={styles.logoSticker}
        src={logo}
        width={451}
        height={293}
        alt=""
      />
      <img
        className={`${styles.photoSticker} ${notebook.sticker}`}
        src="/gallery/establish.webp"
        width={2508}
        height={2508}
        alt=""
      />
      <img
        className={`${styles.iconSticker} ${notebook.sticker}`}
        src="/icon.webp"
        width={2508}
        height={2508}
        alt=""
      />
    </div>
  );
};

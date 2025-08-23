import type { FC } from "react";
import styles from "./Label.module.css";
import { IconContext } from "react-icons";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { Icon } from "./Icon/Icon";

export const Label: FC = () => {
  return (
    <div className={styles.label}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>きりのはのべる</h1>
      </div>
      <div className={styles.iconWrapper}>
        <IconContext.Provider value={{ color: "#000000", size: "25px" }}>
          <Icon url="https://x.com/kirinohanovel/" Icon={BsTwitterX} />
          <Icon url="https://github.com/Kirinoha-Novel/" Icon={BsGithub} />
        </IconContext.Provider>
      </div>
    </div>
  );
};

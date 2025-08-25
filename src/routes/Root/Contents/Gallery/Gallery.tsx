import { GalleryArray } from "../../../../gallery";
import { Work } from "./Work/Work";
import styles from "./Gallery.module.css";

export const Gallery = () => {
  return (
    <section>
      <div className={styles.gallery}>
        <div className={styles.frame}>
          {GalleryArray.map((item, index) => (
            <Work key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

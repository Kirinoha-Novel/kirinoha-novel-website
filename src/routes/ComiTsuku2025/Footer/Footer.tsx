import { useEffect, useState, type FC } from "react";
import styles from "./Footer.module.css";

export const Footer: FC = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <p className={styles.copyRight}>&copy; {year} きりのはのべる</p>
    </footer>
  );
};

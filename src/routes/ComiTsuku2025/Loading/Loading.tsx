import { useEffect, useState, type FC } from "react";
import styles from "./Loading.module.css";

const Loading: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };
    // イベントリスナーの登録
    window.addEventListener("load", handleLoad);
    // クリーンアップ
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div
      className={`${styles.loading} ${isLoaded ? styles.fadeOut : ""}`}
    ></div>
  );
};

export { Loading };

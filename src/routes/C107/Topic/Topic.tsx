import type { FC } from "react";
import event from "@/shared/event/event.module.css";
import { LinkButton } from "@/shared/event/LinkButton/LinkButton";

export const Topic: FC = () => {
  return (
    <>
      <h2 className={event.title}>メッセージ</h2>
      <p className={event.description}>
        コミックマーケット107では、きりのはのべる初の新作ノベルゲーム
        「なついろにっき。」の体験版を紹介しました。
        また、「なついろにっき。」に関する関連グッズも販売しました。
      </p>
      <LinkButton
        href="https://natsuiro.kirinohanovel.com/"
        phrases={["「なついろにっき。」", "公式サイトはこちら！"]}
      />
    </>
  );
};

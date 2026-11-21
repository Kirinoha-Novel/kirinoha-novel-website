import type { FC } from "react";
import event from "@/shared/event/event.module.css";
import { LinkButton } from "@/shared/event/LinkButton/LinkButton";

export const Trial: FC = () => {
  return (
    <>
      <h2 className={event.title}>体験版情報</h2>
      <p className={event.description}>
        「なついろにっき。」の体験版は、ブラウザゲームとして遊ぶことができます。
        <br />
        以下のリンクからアクセスして、ぜひお楽しみください！
      </p>
      <LinkButton
        href="https://natsuiro-game-trial.kirinohanovel.com/"
        phrases={["体験版「なついろにっき。」", "はこちら！"]}
        external
      />
    </>
  );
};

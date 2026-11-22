import type { FC } from "react";
import { Event } from "./Event/Event";
import { historyArray } from "@/history";

export const History: FC = () => {
  return (
    <section>
      {historyArray.map((event, index) => (
        <Event key={index} index={index} {...event} />
      ))}
    </section>
  );
};

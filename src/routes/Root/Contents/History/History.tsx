import type { FC, RefObject } from "react";
import { Event } from "./Event/Event";
import { historyArray } from "../../../../history";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

export const History: FC<Props> = (props: Props) => {
  return (
    <section>
      {historyArray.map((event, index) => (
        <Event
          key={index}
          index={index}
          {...event}
          contentsRef={props.contentsRef}
        />
      ))}
    </section>
  );
};

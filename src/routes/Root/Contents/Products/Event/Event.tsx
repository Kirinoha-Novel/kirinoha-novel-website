import { type FC } from "react";
import { EventPc } from "./EventPc/EventPc";
import type { EventProps } from "./event";
import { EventMobile } from "./EventMobile/EventMobile";

export const Event: FC<EventProps> = (props: EventProps) => {
  return (
    <>
      {/* PC Version */}
      <EventPc
        index={props.index}
        imagePath={props.imagePath}
        title={props.title}
        description={props.description}
        date={props.date}
        contentsRef={props.contentsRef}
        url={props.url}
      />
      {/* Mobile Version */}
      <EventMobile
        index={props.index}
        imagePath={props.imagePath}
        title={props.title}
        description={props.description}
        date={props.date}
        contentsRef={props.contentsRef}
        url={props.url}
      />
    </>
  );
};

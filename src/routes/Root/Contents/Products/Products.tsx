import type { FC, RefObject } from "react";
import { Event } from "./Event/Event";
import { productsArray } from "../../../../products";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

export const Products: FC<Props> = (props: Props) => {
  return (
    <section>
      {productsArray.map((event, index) => (
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

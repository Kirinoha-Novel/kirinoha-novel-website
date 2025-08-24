import type { FC, RefObject } from "react";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

export const Products: FC<Props> = (props: Props) => {
  return (
    <section>
      <div ref={props.contentsRef}></div>
    </section>
  );
};

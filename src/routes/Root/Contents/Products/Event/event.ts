import type { RefObject } from "react";

export type EventProps = {
  index: number;
  imagePath: string;
  title: string;
  description: string;
  date: string;
  contentsRef: RefObject<HTMLDivElement | null>;
  url: string;
};

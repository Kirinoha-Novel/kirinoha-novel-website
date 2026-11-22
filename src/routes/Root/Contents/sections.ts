import type { FC } from "react";
import { Topic } from "./Topic/Topic";
import { News } from "./News/News";
import { Blog } from "./Blog/Blog";
import { History } from "./History/History";
import { Gallery } from "./Gallery/Gallery";
import { Archive } from "./Archive/Archive";

// titled sections of the top page, in order; each one also gets an index tab
// on the right panel (tab and title colors: Label.module.css, Title.module.css)
export const sections: { title: string; Section: FC }[] = [
  { title: "Topic", Section: Topic },
  { title: "News", Section: News },
  { title: "Blog", Section: Blog },
  { title: "History", Section: History },
  { title: "Gallery", Section: Gallery },
  { title: "Archive", Section: Archive },
];

// id of the section title, which the index tab links to
export const sectionId = (title: string) => title.toLowerCase();

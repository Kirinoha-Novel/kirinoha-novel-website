import type { FC } from "react";
import notebook from "@/shared/notebook.module.css";
import { Label } from "@/shared/Label/Label";
import { Contents } from "./Contents/Contents";
import { Cursor } from "@/shared/Cursor/Cursor";

const tabs = ["Topic", "News", "Blog", "History", "Gallery"].map((tab) => ({
  label: tab,
  href: `#${tab.toLowerCase()}`,
}));

const Root: FC = () => {
  return (
    <div className={notebook.page}>
      <Contents />
      <Label tabs={tabs} />
      <div className={notebook.rings}></div>
      <Cursor />
    </div>
  );
};

export default Root;

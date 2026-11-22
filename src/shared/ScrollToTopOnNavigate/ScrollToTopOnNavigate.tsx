import { useLayoutEffect, type FC } from "react";
import { useLocation, useNavigationType } from "react-router";

// BrowserRouter keeps the scroll position across pages, so start each newly
// opened page from the top (back / forward and in-page #anchors are left alone)
export const ScrollToTopOnNavigate: FC = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (navigationType !== "POP" && !hash) {
      // instant: the top page scrolls smoothly
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash, navigationType]);

  return null;
};

import type { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { NotFound, Root, Ct1, C107 } from "./routes";
import { ScrollToTopOnNavigate } from "@/shared/ScrollToTopOnNavigate/ScrollToTopOnNavigate";

const App: FC = () => {
  return (
    <Router>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<Root />} />
        {/* /comitsuku2025 is a deprecated path (now active /ct1) */}
        <Route path="/comitsuku2025" element={<Ct1 />} />
        <Route path="/ct1" element={<Ct1 />} />
        <Route path="/c107" element={<C107 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

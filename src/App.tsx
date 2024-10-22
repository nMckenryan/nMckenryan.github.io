import { Suspense, type ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollerContent from "./components/scroller/ScrollerContent";
import ScrollerMenu from "./components/scroller/ScrollerMenu";
import LoadingOrError from "./components/ui/LoadingOrError";

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />} />
      <div className="w-1/5">
        <ScrollerMenu />
      </div>
      <div className="w-4/5">
        <ScrollerContent />
      </div>
    </BrowserRouter>
  );
}

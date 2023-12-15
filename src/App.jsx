import React from "react";
import { HashRouter } from "react-router-dom";
import { Context } from "./Context/Context";
import { Suspense } from "react";
import "./bootstrap-grid.min.css";
import "./bootstrap-utilities.min.css";
import "./bootstrap.css";
import "./index.css";
import LoadingFullPage from "./Components/LoadingFullPage";
import AnimateRoutes from "./Components/AnimateRoutes";

function App() {
  return (
    <Context>
      <HashRouter>
        <Suspense fallback={<LoadingFullPage></LoadingFullPage>}>
          <AnimateRoutes></AnimateRoutes>
        </Suspense>
      </HashRouter>
    </Context>
  );
}

export default App;

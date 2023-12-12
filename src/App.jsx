import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ActiveUser } from "./Context/ActiveUser";
import { Context } from "./Context/Context";
import { Suspense, lazy } from "react";
import "./bootstrap-grid.min.css";
import "./bootstrap-utilities.min.css";
import "./bootstrap.css";
import "./index.css";
import Cities from "./Components/Cities";
import Countries from "./Components/Countries";
import City from "./Components/City";
import Form from "./Components/Form";
import LoadingFullPage from "./Components/LoadingFullPage";
const Pricing = lazy(() => import("./Pages/Pricing"));
const MainPage = lazy(() => import("./Pages/MainPage"));
const Login = lazy(() => import("./Pages/Login"));
const Application = lazy(() => import("./Pages/Application"));
const Product = lazy(() => import("./Pages/Product"));

function App() {
  return (
    <Context>
      <HashRouter>
        <Suspense fallback={<LoadingFullPage></LoadingFullPage>}>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="Pricing" element={<Pricing />} />
            <Route path="Product" element={<Product />} />
            <Route path="Login" element={<Login />} />
            <Route
              path="Application"
              element={
                <ActiveUser>
                  <Application />
                </ActiveUser>
              }
            >
              <Route index element={<Cities />} />
              <Route path="cities" element={<Cities />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<Countries></Countries>} />
              <Route path="form" element={<Form></Form>} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </Context>
  );
}

export default App;

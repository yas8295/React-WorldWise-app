import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActiveUser } from "./assets/Context/ActiveUser";
import { Context } from "./assets/Context/Context";
import { Suspense, lazy } from "react";
import "./bootstrap-grid.min.css";
import "./bootstrap-utilities.min.css";
import "./bootstrap.css";
import "./index.css";
import Cities from "./assets/Components/Cities";
import Countries from "./assets/Components/Countries";
import City from "./assets/Components/City";
import Form from "./assets/Components/Form";
import LoadingFullPage from "./assets/Components/LoadingFullPage";
const Pricing = lazy(() => import("./assets/Pages/Pricing"));
const MainPage = lazy(() => import("./assets/Pages/MainPage"));
const Login = lazy(() => import("./assets/Pages/Login"));
const Application = lazy(() => import("./assets/Pages/Application"));
const Product = lazy(() => import("./assets/Pages/Product"));

function App() {
  return (
    <Context>
      <BrowserRouter>
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
      </BrowserRouter>
    </Context>
  );
}

export default App;

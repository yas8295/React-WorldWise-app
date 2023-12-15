import { React, lazy } from "react";
import Cities from "./Cities";
import Countries from "./Countries";
import City from "./City";
import Form from "./Form";
import { Route, Routes, useLocation } from "react-router-dom";
import { ActiveUser } from "../Context/ActiveUser";
import { AnimatePresence } from "framer-motion";
const Pricing = lazy(() => import("../Pages/Pricing"));
const MainPage = lazy(() => import("../Pages/MainPage"));
const Login = lazy(() => import("../Pages/Login"));
const Application = lazy(() => import("../Pages/Application"));
const Product = lazy(() => import("../Pages/Product"));

export default function AnimateRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<MainPage></MainPage>} />
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
    </AnimatePresence>
  );
}

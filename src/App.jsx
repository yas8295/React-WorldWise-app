import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActiveUser } from "./Context/ActiveUser";
import { Context } from "./Context/Context";
import "./bootstrap-grid.min.css";
import "./bootstrap-utilities.min.css";
import "./bootstrap.css";
import "./index.css";
import Cities from "./Components/Cities";
import Countries from "./Components/Countries";
import City from "./Components/City";
import Form from "./Components/Form";
import MainPage from "./assets/Pages/MainPage";
import Pricing from "./assets/Pages/Pricing";
import Product from "./assets/Pages/Product";
import Login from "./Pages/Login";
import Application from "./assets/Pages/Application";

function App() {
  return (
    <Context>
      <BrowserRouter>
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
      </BrowserRouter>
    </Context>
  );
}

export default App;

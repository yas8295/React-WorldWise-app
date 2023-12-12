import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./bootstrap-grid.min.css";
import "./bootstrap-utilities.min.css";
import "./bootstrap.css";
import "./index.css";
import { Context } from "./assets/Context/Context";
import Pricing from "./assets/Pages/Pricing";
import Product from "./assets/Pages/Product";
import MainPage from "./assets/Pages/MainPage";
import Login from "./assets/Pages/Login";
import Application from "./assets/Pages/Application";
import Cities from "./assets/Components/Cities";
import Countries from "./assets/Components/Countries";
import City from "./assets/Components/City";
import Form from "./assets/Components/Form";
import { ActiveUser } from "./assets/Context/ActiveUser";

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

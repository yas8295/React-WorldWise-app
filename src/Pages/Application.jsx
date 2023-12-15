import React, { memo, useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import favicon from "../../public/favicon.png";
import Map from "../Components/Map";
import { Contexts } from "../Context/Context";
import NightModeButton from "../Components/NightModeButton";

const Application = memo(function Application() {
  const { nightMode } = useContext(Contexts);

  return (
    <div className="app d-flex flex-wrap" style={{ minHeight: "100vh" }}>
      <div
        className={`${
          !nightMode ? "night" : ""
        } d-flex align-items-center justify-content-between px-4 py-5 px-sm-5 flex-column gap-5 col-12 col-lg-4 flex-grow-1`}
        style={{ minHeight: "50vh" }}
      >
        <NightModeButton></NightModeButton>
        <div className="d-flex align-items-center justify-content-center gap-5 flex-column w-100">
          <div>
            <Link className="d-flex gap-3 align-items-center" to="/">
              <img src={favicon} alt="" width={"55px"} />
              <p style={{ fontSize: "30px", fontWeight: "400" }}>WorldWise</p>
            </Link>
          </div>
          <div className="d-flex gap-3 align-items-center flex-column w-100">
            <div
              className="d-flex mb-4 align-items-center"
              style={{ fontSize: "13px" }}
            >
              <NavLink
                className={`${!nightMode ? "night" : ""} app-nav-cities`}
                to="Cities"
                style={{
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  backgroundColor: "#42484d",
                  padding: "8px 25px",
                  opacity: "0.8",
                  color: "white",
                }}
              >
                CITIES
              </NavLink>
              <NavLink
                className={`${!nightMode ? "night" : ""} app-nav-countries`}
                to="Countries"
                style={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  backgroundColor: "#42484d",
                  padding: "8px 25px",
                  opacity: "0.8",
                  color: "white",
                }}
              >
                COUNTRIES
              </NavLink>
            </div>
            <div
              className="d-flex city gap-4 flex-wrap w-100 justify-content-center"
              style={{
                maxHeight: "420px",
                minHeight: "200px",
                overflowX: "hidden",
                overflowY: "auto",
              }}
            >
              <Outlet></Outlet>
            </div>
          </div>
        </div>
        <footer>
          <h1 style={{ color: "rgb(143 143 143)", fontSize: "15px" }}>
            © Copyright 2023 by WorldWise Inc.
          </h1>
        </footer>
      </div>
      <div
        className="col-7 flex-grow-1 position-relative"
        style={{ minHeight: "65vh" }}
      >
        <Map></Map>
      </div>
    </div>
  );
});

export default Application;

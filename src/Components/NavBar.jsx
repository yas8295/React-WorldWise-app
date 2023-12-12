import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { Contexts } from "../Context/Context";

export default function NavBar() {
  const { user } = useContext(Contexts);

  return (
    <nav className="p-5 position-absolute w-100 gap-5 justify-content-center flex-wrap d-flex justify-content-md-between align-items-center">
      <NavLink className="text-center" to="/">
        <img src={logo} alt="" width={"230px"} />
      </NavLink>
      <div className="d-flex gap-4 gap-sm-5 align-items-center">
        <NavLink
          className="NavLink"
          to="/Pricing"
          style={{ color: "white", fontSize: "1.5rem", fontWeight: 600 }}
        >
          <p className="m-0">PRICING</p>
        </NavLink>
        <NavLink
          className="NavLink"
          to="/Product"
          style={{ color: "white", fontSize: "1.5rem", fontWeight: 600 }}
        >
          <p className="m-0">PRODUCT</p>
        </NavLink>
        <NavLink
          className="d-flex button-28 justify-content-center align-items-center p-3 px-4"
          to={user ? "/Application/cities" : "/login"}
          style={{
            fontSize: "1.5rem",
            borderRadius: "10px",
            fontWeight: 600,
            transition: "0s",
          }}
        >
          <p className="m-0">{user ? user.name.toUpperCase() : "LOGIN"}</p>
        </NavLink>
      </div>
    </nav>
  );
}

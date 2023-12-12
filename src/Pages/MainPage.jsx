import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useContext } from "react";
import { Contexts } from "../Context/Context";

export default function MainPage() {
  const { user } = useContext(Contexts);

  return (
    <>
      <NavBar></NavBar>
      <main className="main p-3 py-5 p-sm-5">
        <div
          className="d-flex p-sm-5 py-5 flex-column text-center justify-content-center gap-5"
          style={{ marginTop: "150px" }}
        >
          <h1
            className="m-0 mt-sm-5"
            style={{ fontSize: "45px", lineHeight: "60px" }}
          >
            You travel the world. <br /> WorldWise keeps track of your
            adventures.
          </h1>
          <p
            className="m-0"
            style={{ fontSize: "23px", lineHeight: "40px", color: "#aeaeae" }}
          >
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show <br /> your
            friends how you have wandered the world.
          </p>
          <Link
            className="d-flex button-28 mt-4 align-self-center justify-content-center align-items-center p-4 px-5"
            to={user ? "/Application/cities" : "/login"}
            style={{
              color: "black",
              fontSize: "1.5rem",
              backgroundColor: "#00c46a",
              borderRadius: "10px",
              fontWeight: 600,
            }}
          >
            START TRACKING NOW
          </Link>
        </div>
      </main>
    </>
  );
}

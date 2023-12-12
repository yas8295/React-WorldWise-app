import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Contexts } from "../Context/Context";
import Loading from "./Loading";
import Deleting from "./Deleting";
import Error from "./Error";

export default function Cities() {
  const { cities, loading, city, deleteCity, deleting, error, nightMode } =
    useContext(Contexts);

  useEffect(function () {
    setTimeout(function () {
      const cities = document.querySelectorAll(".cities");
      if (!loading && cities)
        cities.forEach((city) => (city.style.translate = "0"));
    }, 100);
  });

  if (error) {
    return <Error></Error>;
  }

  if (deleting) {
    return <Deleting></Deleting>;
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return cities.map((ccity, i) => (
    <Link
      key={ccity.id}
      to={`${ccity.id.toString()}?lat=${ccity.position.lat}&lng=${
        ccity.position.lng
      }`}
      className={`${ccity.cityName === city.cityName ? "active" : ""} ${
        !nightMode ? "night" : ""
      } cities d-flex py-4 px-5 gap-4 justify-content-between align-items-center w-100`}
      style={{
        borderRadius: "12px",
        backgroundColor: "#42484d",
        borderLeft: "5px solid  #00c46a",
        transition: "1s",
        transitionDelay: `0.${i}s`,
        maxHeight: "80px",
        translate: "-100%",
        backgroundImage:
          "radial-gradient( 100% 100% at 100% 0, rgb(254 255 254 / 20%) 0, #43434366 100% )",
      }}
    >
      <div className="d-flex gap-4 align-items-center justify-content-between flex-grow-1 flex-wrap">
        <div className="d-flex align-items-center gap-4">
          <img
            src={`https://flagcdn.com/32x24/${ccity.emoji}.png`}
            alt=""
            width={"20px"}
          />
          <h1>{ccity.cityName}</h1>
        </div>
        <div>
          <p>({new Date(ccity.date).toString().slice(4, 15)})</p>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteCity(ccity);
        }}
        className="delete"
        style={{
          border: "none",
          backgroundColor: "#2d3439",
          borderRadius: "50%",
          padding: "6px 9px",
          transition: "0.4s",
          fontSize: "10px",
          zIndex: "4",
          boxShadow: "0px 0px 2px 2px inset black",
          color: "white",
        }}
      >
        X
      </button>
    </Link>
  ));
}
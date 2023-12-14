import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Contexts } from "../Context/Context";
import Loading from "./Loading";
import Error from "./Error";
import { motion } from "framer-motion";

export default function City() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { city, getCity, loading, error, nightMode } = useContext(Contexts);

  useEffect(
    function () {
      getCity(id);
    },
    [id, getCity]
  );

  if (!city) return;

  if (error) {
    return <Error></Error>;
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: 360 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 60, duration: 1 }}
      className={`${
        !nightMode ? "night" : ""
      } current-city d-flex p-5 flex-column gap-5 flex-grow-1 w-100`}
      style={{
        borderRadius: "12px",
        backgroundColor: "#42484d",
        backgroundImage:
          "radial-gradient( 100% 100% at 100% 0, #c4c4c454 0, #141514cc 100% )",
        borderTop: "3px solid #1cbc1d",
      }}
    >
      <div className={`d-flex flex-column gap-4`}>
        <h1 style={{ color: "rgb(170 170 170)", fontSize: "13px" }}>
          CITY NAME
        </h1>
        <div className="d-flex gap-4 align-items-center">
          <h1
            className="text-center"
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "19px",
            }}
          >
            {city.cityName}
          </h1>
          <img
            src={`https://flagcdn.com/32x24/${
              city.country === undefined ? null : city.emoji
            }.png`}
            alt=""
            width={"30px"}
          />
        </div>
      </div>
      <div className="d-flex flex-column gap-4">
        <h1 style={{ color: "rgb(170 170 170)", fontSize: "13px" }}>
          YOU WENT TO{" "}
          <span style={{ color: "#edb42d", fontSize: "15px" }}>
            {city.cityName}
          </span>{" "}
          ON
        </h1>
        <h1 style={{ color: "white", fontWeight: "100" }}>
          {new Date(city.date).toString().slice(0, 15)}
        </h1>
      </div>
      {city.notes ? (
        <div className="d-flex flex-column gap-4">
          <h1 style={{ color: "rgb(170 170 170)", fontSize: "13px" }}>
            YOUR NOTES
          </h1>
          <h1 style={{ color: "white", fontWeight: "100" }}>{city.notes}</h1>
        </div>
      ) : null}
      <div className="d-flex flex-column gap-4">
        <h1 style={{ color: "rgb(170 170 170)", fontSize: "13px" }}>
          LEARN MORE
        </h1>
        <Link
          className="wiki"
          to={`https://en.wikipedia.org/wiki/${city.cityName}`}
          style={{
            fontSize: "17px",
            textDecoration: "underline !important",
            width: "fit-content",
          }}
          target="_blank"
        >
          Check out {city.cityName} on Wikipedia →
        </Link>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/Application/cities");
        }}
        className="p-3 px-4 align-self-start"
        style={{
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid white",
          backgroundColor: "transparent",
          color: "white",
          backgroundImage:
            "radial-gradient(100% 100% at 100% 0px, rgb(0 0 0) 0px, rgb(60 60 60) 100%)",
        }}
      >
        ← BACK
      </button>
    </motion.div>
  );
}

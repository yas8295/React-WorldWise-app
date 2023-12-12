import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Contexts } from "../Context/Context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loading from "./Loading";
import Error from "./Error";

export default function Form() {
  const { loading, dispatch, addCity, cities, error, nightMode } =
    useContext(Contexts);
  const [city, setCity] = useState(null);
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  function handleSubmit(e) {
    e.preventDefault();

    if (!date) {
      alert("Please Insert Date");
      return;
    }

    const newCity = {
      cityName: city.city,
      country: city.countryName,
      date: date,
      emoji: city.countryCode.toLowerCase(),
      notes: notes,
      position: { lat, lng },
      id: Math.random(0, 99999),
    };

    if (cities.find((ccity) => ccity.cityName === newCity.cityName)) {
      alert("this city is exist");
      return;
    }

    addCity(newCity);
    navigate("/Application/cities");
  }

  useEffect(function () {
    setTimeout(function () {
      const form = document.querySelector(".form");
      if (!loading && form) form.style.scale = "1";
    }, 100);
  });

  useEffect(
    function () {
      async function getCity() {
        dispatch({ type: "loading", payload: true });
        try {
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
          );
          const data = await res.json();
          setCity(data);
        } catch (err) {
          dispatch({ type: "error", payload: true });
        } finally {
          setTimeout(function () {
            dispatch({ type: "loading", payload: false });
          }, 1500);
        }
      }
      getCity();
    },
    [lat, lng, dispatch]
  );

  if (error) {
    return <Error></Error>;
  }

  if (loading) {
    return <Loading></Loading>;
  }

  if (city && !city.city) {
    return (
      <h1 className="text-center">
        THERE IS NO CITY HERE <span style={{ fontSize: "30px" }}>🔎</span>
      </h1>
    );
  }

  return (
    <form
      className={`${
        !nightMode ? "night" : ""
      } form d-flex p-5 flex-column gap-5 flex-grow-1 w-100 position-relative`}
      style={{
        borderRadius: "12px",
        transition: "0.5s",
        color: "black",
        scale: "0",
        borderTop: "3px solid rgb(255 181 69)",
      }}
    >
      <div
        className="position-absolute w-100 h-100"
        style={{
          left: "0",
          top: "0",
          backgroundColor: "rgb(66, 72, 77)",
          zIndex: "-1",
          borderRadius: "12px",
          backgroundImage:
            "radial-gradient(100% 100% at 100% 0px, rgb(0 0 0 / 66%) 0px, rgb(22 22 22 / 0%) 100%)",
        }}
      ></div>
      <div className="d-flex flex-column gap-2">
        <h1 style={{ color: "white", fontSize: "17px" }}>City name</h1>
        <div className="position-relative">
          <input
            className={`form-input ${nightMode ? "" : "night"} p-3 w-100`}
            style={{
              fontSize: "15px",
              borderRadius: "7px",
              backgroundColor: "#d6dee0",
              boxShadow: "inset 0px 0px 1px 2px #000",
              border: "4px inset #7b7b7b",
            }}
            value={city ? city.city : ""}
            type="text"
            readOnly
            placeholder="City..."
          />
          {city ? (
            <img
              src={`https://flagcdn.com/32x24/${city.countryCode.toLowerCase()}.png`}
              alt=""
              width={"25px"}
              className="position-absolute"
              style={{ right: "10px", top: "50%", translate: "0 -50%" }}
            />
          ) : null}
        </div>
      </div>
      <div className="d-flex flex-column gap-2">
        <h1 style={{ color: "white", fontSize: "17px" }}>
          When did you go to {city ? city.city : ""}
        </h1>
        <DatePicker
          style={{
            boxShadow: "inset 0px 0px 1px 2px #000",
            border: "4px inset #7b7b7b",
          }}
          required
          className={`form-input ${nightMode ? "" : "night"} date p-3 w-100`}
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="d-flex flex-column gap-2">
        <h1 style={{ color: "white", fontSize: "17px" }}>
          Notes about your trip to {city ? city.city : ""}
        </h1>
        <textarea
          className={`form-input ${nightMode ? "" : "night"}  p-3`}
          style={{
            fontSize: "15px",
            borderRadius: "7px",
            backgroundColor: "#d6dee0",
            resize: "none",
            boxShadow: "inset 0px 0px 1px 2px #000",
            border: "4px inset #7b7b7b",
          }}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <div className="d-flex gap-5 justify-content-between align-items-center">
        <button
          onClick={handleSubmit}
          className="p-3 px-4 button-29"
          style={{ color: "black" }}
        >
          ADD
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/Application/cities");
          }}
          className={`form-back ${
            !nightMode ? "night" : ""
          } p-3 px-4 button-27`}
          style={{
            backgroundColor: "transparent !important",
            backgroundImage:
              "radial-gradient( 100% 100% at 100% 0, black 0, #12a86300 100% )",
          }}
        >
          ← BACK
        </button>
      </div>
    </form>
  );
}

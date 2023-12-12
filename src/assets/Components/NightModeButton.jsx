import React, { useContext, useState } from "react";
import { Contexts } from "../Context/Context";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function NightModeButton() {
  const { dispatch } = useContext(Contexts);
  const [isDarkMode, setDarkMode] = useState(false);

  const modee = function () {
    dispatch({ type: "nightMode" });
    document.querySelector(".leaflet-layer").style.filter = `${
      isDarkMode ? "" : "none"
    }`;
    document.querySelector(".leaflet-container").style.background = `${
      isDarkMode ? "black" : "white"
    }`;
  };

  return (
    <div className="position-absolute" style={{ left: "8px", top: "5px" }}>
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={isDarkMode}
        sunColor="white"
        moonColor="black"
        onChange={(e) => {
          setDarkMode((e) => !e);
          modee();
        }}
        size={25}
      />
    </div>
  );
}

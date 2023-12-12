import React, { useContext } from "react";
import { Contexts } from "../Context/Context";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function NightModeButton() {
  const { dispatch, nightMode } = useContext(Contexts);

  const modee = function () {
    dispatch({ type: "nightMode" });
  };

  return (
    <div className="position-absolute" style={{ left: "8px", top: "5px" }}>
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={!nightMode}
        sunColor="white"
        moonColor="black"
        onChange={(e) => {
          modee();
        }}
        size={25}
      />
    </div>
  );
}

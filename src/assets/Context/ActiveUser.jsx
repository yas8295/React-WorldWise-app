import React, { createContext, useContext, useEffect } from "react";
import { Contexts } from "./Context";
import { useNavigate } from "react-router-dom";

const userContext = createContext();

function ActiveUser({ children }) {
  const { user } = useContext(Contexts);

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!user) navigate("/login");
    },
    [user]
  );

  return <userContext.Provider value={{}}>{children}</userContext.Provider>;
}

export { ActiveUser, userContext };

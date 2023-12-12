import React, { useContext, useReducer } from "react";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
import { Contexts } from "../Context/Context";

const initialValues = { email: "mohamed@email", password: "8295" };

function reducer(states, action) {
  switch (action.type) {
    case "email":
      return { ...states, email: action.payload };
    case "password":
      return { ...states, password: action.payload };
    default:
      throw new Error("something wrong");
  }
}

export default function Login() {
  const [{ email, password }, dispatchLogin] = useReducer(
    reducer,
    initialValues
  );
  const { users, dispatch } = useContext(Contexts);
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    const user = users.find((user) => user.email === email);
    if (password === user.password) {
      dispatch({ type: "login", payload: user });
      navigate("/Application/cities");
    }
  }

  return (
    <>
      <NavBar></NavBar>
      <div className="main p-3 py-5 p-sm-5">
        <div
          className="d-flex py-5 align-items-center justify-content-center "
          style={{ marginTop: "120px" }}
        >
          <form
            onSubmit={(e) => login(e)}
            className="d-flex p-5 mt-5 flex-column gap-5 col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 position-relative"
            action=""
            style={{
              backgroundColor: "#42484d",
              borderRadius: "20px",
              color: "white",
              boxShadow: "black -1px 0px 15px 4px",
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
                filter: "blur(1px)",
              }}
            ></div>
            <div className="d-flex flex-column gap-1">
              <label style={{ fontSize: "17px" }} htmlFor="">
                Email address
              </label>
              <input
                required
                value={email}
                onChange={(e) =>
                  dispatchLogin({ type: "email", payload: e.target.value })
                }
                className="p-3 w-100"
                style={{
                  fontSize: "15px",
                  borderRadius: "7px",
                  backgroundColor: "#d6dee0",
                  boxShadow: "inset 0px 0px 1px 2px #000",
                  color: "black",
                  border: "4px inset #7b7b7b",
                }}
                type="email"
              />
            </div>
            <div className="d-flex flex-column gap-1">
              <label style={{ fontSize: "17px" }} htmlFor="">
                Password
              </label>
              <input
                required
                value={password}
                onChange={(e) =>
                  dispatchLogin({ type: "password", payload: e.target.value })
                }
                className="p-3 w-100"
                style={{
                  fontSize: "15px",
                  borderRadius: "7px",
                  backgroundColor: "#d6dee0",
                  boxShadow: "inset 0px 0px 1px 2px #000",
                  color: "black",
                  border: "4px inset #7b7b7b",
                }}
                type="password"
              />
            </div>
            <button className="button-29 align-self-start">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

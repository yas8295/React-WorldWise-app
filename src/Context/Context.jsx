import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";

const Contexts = createContext();

const users = [{ name: "mohamed", email: "mohamed@email", password: "8295" }];

const initialValues = {
  cities: [],
  city: {},
  loading: false,
  error: false,
  deleting: false,
  user: null,
  nightMode: true,
};

function reducer(states, action) {
  switch (action.type) {
    case "loading":
      return { ...states, loading: action.payload };
    case "error":
      return { ...states, error: true };
    case "ready":
      return {
        ...states,
        cities: action.payload,
        city: action.payload[0],
      };
    case "city":
      return { ...states, city: action.payload };
    case "add":
      return { ...states, cities: action.payload };
    case "delete":
      return {
        ...states,
        cities:
          action.payload === true
            ? states.cities
            : action.payload === false
            ? states.cities
            : action.payload,
        deleting: action.payload === false ? action.payload : true,
      };
    case "login":
      return { ...states, user: action.payload };
    case "logout":
      return { ...states, user: null };
    case "nightMode":
      return { ...states, nightMode: !states.nightMode };
    default:
      throw new Error("something went wrong");
  }
}

export default function Context({ children }) {
  const [
    { cities, city, loading, error, deleting, user, nightMode },
    dispatch,
  ] = useReducer(reducer, initialValues);

  useEffect(function () {
    async function fetchData() {
      try {
        dispatch({ type: "loading", payload: true });
        const res = await fetch(
          "https://api.jsonbin.io/v3/b/65734e6954105e766fdb8d9f"
        );
        const data = await res.json();
        dispatch({ type: "ready", payload: data.record.cities });
      } catch (err) {
        dispatch({ type: "error" });
      } finally {
        setTimeout(function () {
          dispatch({ type: "loading", payload: false });
        }, 1500);
      }
    }
    fetchData();
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      if (city.id === Number(id)) return;

      try {
        dispatch({ type: "loading", payload: true });
        const res = await fetch(
          `https://api.jsonbin.io/v3/b/65734e6954105e766fdb8d9f`
        );
        const data = await res.json();
        dispatch({
          type: "city",
          payload: data.record.cities
            .slice()
            .filter((city) => Number(city.id) === Number(id))[0],
        });
      } catch (err) {
        dispatch({ type: "error" });
      } finally {
        setTimeout(function () {
          dispatch({ type: "loading", payload: false });
        }, 1500);
      }
    },
    [city]
  );

  async function addCity(city) {
    try {
      dispatch({ type: "loading", payload: true });
      const res = await fetch(
        "https://api.jsonbin.io/v3/b/65734e6954105e766fdb8d9f",
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            "X-Master-Key":
              "$2a$10$bJ8vBV1eNJqhZGXOv/q3UeWJh3v7lmnlIy826IA8YxGtyTrdHSwP2",
          },
          body: JSON.stringify({ cities: [...cities, city] }),
        }
      );
      const data = await res.json();
      dispatch({ type: "add", payload: data.record.cities });
    } catch (err) {
      dispatch({ type: "error" });
    } finally {
      setTimeout(function () {
        dispatch({ type: "loading", payload: false });
      }, 1500);
    }
  }

  async function deleteCity(city) {
    dispatch({ type: "delete", payload: true });
    try {
      const res = await fetch(
        "https://api.jsonbin.io/v3/b/65734e6954105e766fdb8d9f",
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            "X-Master-Key":
              "$2a$10$bJ8vBV1eNJqhZGXOv/q3UeWJh3v7lmnlIy826IA8YxGtyTrdHSwP2",
          },
          body: JSON.stringify({
            cities: cities.filter((ccity) => ccity !== city),
          }),
        }
      );
      const data = await res.json();
      dispatch({ type: "delete", payload: data.record.cities });
    } catch (err) {
      dispatch({ type: "error" });
    } finally {
      setTimeout(function () {
        dispatch({ type: "delete", payload: false });
      }, 3000);
    }
  }

  return (
    <Contexts.Provider
      value={{
        cities,
        loading,
        error,
        city,
        getCity,
        addCity,
        deleteCity,
        dispatch,
        deleting,
        users,
        user,
        nightMode,
      }}
    >
      {children}
    </Contexts.Provider>
  );
}

export { Context, Contexts };

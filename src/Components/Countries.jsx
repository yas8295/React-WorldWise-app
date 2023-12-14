import { useContext } from "react";
import { Contexts } from "../Context/Context";
import Loading from "./Loading";
import Error from "./Error";
import Deleting from "./Deleting";
import { motion } from "framer-motion";

export default function Cities() {
  const { cities, loading, error, deleting, nightMode } = useContext(Contexts);

  if (error) {
    return <Error></Error>;
  }

  if (deleting) {
    return <Deleting></Deleting>;
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return Array.from(new Set(cities.map((city) => city.country))).map(
    (country, i) => (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
          delay: `0.${Math.ceil(Math.random() * 9)}`,
        }}
        key={country}
        className={`${
          !nightMode ? "night" : ""
        } country d-flex col-5 flex-grow-1 p-5 justify-content-center align-items-center`}
        style={{
          borderRadius: "12px",
          backgroundColor: "#42484d",
          borderLeft: "5px solid  rgb(255 165 0 / 99%)",
          maxHeight: "120px",
          backgroundImage:
            "radial-gradient( 100% 100% at 100% 0, rgb(193 193 193 / 68%) 0, #36363600 100% )",
        }}
      >
        <div className="d-flex flex-column gap-4 align-items-center">
          <img
            src={`https://flagcdn.com/32x24/${
              cities.find((city) => city.country === country).emoji
            }.png`}
            alt=""
            width={"30px"}
          />
          <h1>{country}</h1>
        </div>
      </motion.div>
    )
  );
}

import React from "react";
import NavBar from "../Components/NavBar";
import Pimage from "../images/img-2.jpg";
import { motion, useIsPresent } from "framer-motion";

export default function Pricing() {
  const isPresent = useIsPresent();

  return (
    <>
      <NavBar></NavBar>
      <div className="main p-3 py-5 p-sm-5" style={{ minHeight: "100vh" }}>
        <div
          className="d-flex p-sm-5 py-5 align-items-center justify-content-center gap-5 flex-wrap"
          style={{ marginTop: "135px" }}
        >
          <div className="col-12 col-lg-5 text-lg-start text-center">
            <h1
              className="m-0 mb-5"
              style={{ fontSize: "40px", lineHeight: "50px" }}
            >
              Simple pricing. <br /> Just $9/month.
            </h1>
            <p
              className="m-0"
              style={{ fontSize: "18px", lineHeight: "30px", color: "#aeaeae" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
              Vitae vel labore mollitia iusto. Recusandae quos <br /> provident,
              laboriosam fugit voluptatem iste.
            </p>
          </div>
          <img
            className="col-12 col-lg-4"
            src={Pimage}
            alt=""
            width={"200px"}
            style={{ maxHeight: "430px" }}
          />
        </div>{" "}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      </div>
    </>
  );
}

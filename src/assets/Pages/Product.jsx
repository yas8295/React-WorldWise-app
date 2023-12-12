import React from "react";
import Pimage from "../../images/img-1.jpg";
import NavBar from "../Components/NavBar";

export default function Product() {
  return (
    <>
      <NavBar></NavBar>
      <div className="main p-3 py-5 p-sm-5">
        <div
          className="d-flex p-sm-5 py-5 align-items-center justify-content-center gap-5 flex-wrap-reverse"
          style={{ marginTop: "135px" }}
        >
          <img
            className="col-12 col-lg-4 me-lg-5"
            src={Pimage}
            alt=""
            width={"200px"}
            style={{ maxHeight: "430px" }}
          />
          <div className="px-sm-5 ms-lg-5 col-12 col-lg-5 text-lg-start text-center">
            <h1
              className="m-0 mb-5 text-center"
              style={{ fontSize: "40px", lineHeight: "50px" }}
            >
              About WorldWide.
            </h1>
            <p
              className="m-0"
              style={{ fontSize: "18px", lineHeight: "30px", color: "#aeaeae" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
              dicta illum vero culpa cum quaerat architecto sapiente eius non
              soluta, molestiae nihil laborum, placeat debitis, laboriosam at
              fuga perspiciatis? <br /> <br /> Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Corporis doloribus libero sunt
              expedita ratione iusto, magni, id sapiente sequi officiis et.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

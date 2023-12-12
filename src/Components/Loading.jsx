import React from "react";

export default function Loading() {
  return (
    <div className="d-flex flex-column gap-5 align-items-center align-self-center">
      <div className="loader ">
        <div className="face">
          <div className="circle"></div>
        </div>
        <div className="face">
          <div className="circle"></div>
        </div>
      </div>
      <p>LOADING...</p>
    </div>
  );
}

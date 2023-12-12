import React from "react";

export default function LoadingFullPage() {
  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center flex-column gap-5">
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

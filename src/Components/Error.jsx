import React from "react";

export default function Error() {
  return (
    <div className="error d-flex flex-column align-self-center align-items-center gap-5">
      <div className="circle-border"></div>
      <div className="circle">
        <div className="error"></div>
      </div>
      <h1 className="text-center">
        Something Went Wrong ! <br /> Reload Page
      </h1>
    </div>
  );
}

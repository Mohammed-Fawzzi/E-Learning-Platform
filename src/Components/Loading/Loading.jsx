import React from "react";
import { Hourglass } from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <div className="container-fluid">
        <div className="position-fixed start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center bg-light">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#292524", "#a88759"]}
          />
        </div>
      </div>
    </>
  );
}

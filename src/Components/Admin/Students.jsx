import React from "react";
import { Helmet } from "react-helmet";

export default function Students() {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>جميع الطلاب</title>
      </Helmet>

      <section className="students my-5 py-3">
        <h4 className="m-3 fw-bold">جميع الطلاب :</h4>
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
      </section>
    </>
  );
}

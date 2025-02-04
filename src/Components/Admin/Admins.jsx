import React from "react";
import { Helmet } from "react-helmet";

export default function Admins() {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>جميع المسؤولين</title>
      </Helmet>

      <section className="students my-5 py-3">
        <h4 className="m-3 fw-bold">جميع المسؤولين :</h4>
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
      </section>
    </>
  );
}

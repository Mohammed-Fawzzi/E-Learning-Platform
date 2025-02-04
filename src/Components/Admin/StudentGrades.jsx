import React from "react";
import { Helmet } from "react-helmet";

export default function StudentGrades() {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>درجات الطلاب</title>
      </Helmet>

      <section className="my-5 py-5">
        <div className="container">
          <h4 className="fw-bold mb-4">درجات الطلاب :</h4>
        </div>
      </section>
    </>
  );
}

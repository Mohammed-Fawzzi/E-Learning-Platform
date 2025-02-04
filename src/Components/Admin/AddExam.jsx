import React from "react";
import { Helmet } from "react-helmet";

export default function AddExam() {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>اضافة امتحان</title>
      </Helmet>
      
      <section className="my-5 py-5">
        <div className="container">
          <h4 className="fw-bold mb-4">اضافة امتحان :</h4>
        </div>
      </section>
    </>
  );
}

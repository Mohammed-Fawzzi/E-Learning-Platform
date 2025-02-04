import React from "react";
import Ezo from "../../assets/history.webp";
import { Link } from "react-router-dom";
export default function History() {
  return (
    <>
      {/* History */}
      <section className="my-5 history">
        <div className="container overflow-hidden">
          <div className="row g-5">
            <div className="col-md-6 d-flex justify-content-center">
              <img src={Ezo} alt="م/محمود العزونى" className="ezo" />
            </div>
            <div className="col-md-6 historic">
              <h1 className="mt-3">تاريخك هنا</h1>
              <p className="fw-bold pt-4">
                مستر محمود العزونى مبيقولش غير الكلام المهم وبيجيبلك من الأخر
              </p>
              <p className="fw-bold py-4">
                اول ما تدخل عيلتنا مش هتشيل هم التاريخ تانى
                <br />
                علشان شرحنا بسيط وبطرق مختلفة وامتحاناتنا كتير من الاخر هتبقا من
                المتفوقين باذن الله
              </p>
              <div>
                <Link to={"/"} className="btn px-4 py-2 rounded-0 fw-bold">
                  ابدأ رحلتك الأن
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

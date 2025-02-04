import React from "react";
import Hero from "../../assets/p4.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Features from "./Features";
import History from "./History";
import AcademicYears from "./AcademicYears";

export default function Home() {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>الرئيسية</title>
      </Helmet>

      {/* Hero */}
      <section className="py-3 position-relative">
        <div className="container my-5 py-4">
          <div className="row pt-5">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src={Hero}
                alt="Mr/Mahmoud"
                className="hero shadow-lg rounded-circle"
              />
            </div>

            <div className="col-md-6">
              <div className="py-5 mt-3 text-center">
                <h1 className="fw-bolder grey-color main-head">
                  م/محمود العزونى
                </h1>
                <p className="pt-4 pb-4 fw-bold hero-p">
                  منصة تعليمية تسعي دائما لجعلك من المتفوقين وتهتم بتقديم أفضل
                  محتوي ومنهج دراسة بأساليب مبتكرة وتتميز بطريقة شرح تسعي الي
                  الوصول لكل مستويات الطالب مع متابعة مستمرة
                </p>
                <Link to={"/"} className="btn px-4 py-2 rounded-0 fw-bold">
                  ابدأ رحلتك الأن
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* History */}
      <History />

      {/* AcademicYears */}
      <AcademicYears />
    </>
  );
}

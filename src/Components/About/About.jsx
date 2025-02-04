import React from "react";
import Hero from "../../assets/p4.webp";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>نبذة عن المدرس</title>
      </Helmet>

      <section className="mt-5 pt-5 about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3 className="text-center mb-5 fw-bold main-color">
                  " عن الاستاذ محمود ابراهيم العزوني "
                </h3>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={Hero}
                  alt="Mr/Mahmoud"
                  className="hero shadow-lg rounded-circle"
                />
              </div>
              <div className="my-5 py-5">
                <p className="fw-bold">
                  درس فى كليه التربيه بجامعه المنصوره و حصل على ليسانس الاداب و
                  التربيه في ماده الدراسات الاجتماعيه عام 2022 بتقدير عام جيد
                  جدا .
                </p>
                <p className="fw-bold">
                  ثم تخصص في تدريس ماده الدراسات الاجتماعيه للصفوف الابتدائية و
                  الاعداديه و ماده التاريخ و الجغرافيا للصفوف الثانويه العامه .
                </p>
                <p className="fw-bold">
                  يمتلك خبره سبع سنوات في تدريسها متخصص في اعداد المراجعات
                  النهائية و ليله الامتحان و الامتحانات الشامله و رفع دون
                  المستوى للمستوى المطلوب .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

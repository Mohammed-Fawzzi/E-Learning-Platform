import React from "react";
import { Helmet } from "react-helmet";
import { FaDownload } from "react-icons/fa";

export default function Summaries() {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>الملخصات</title>
      </Helmet>

      <section className="summaries my-5 py-3">
        <h5 className="fw-bold m-3 text-center">ملخصات المراجعه النهائية</h5>
        <div className="container">
          {/* قسم الابتدائية */}
          <div className="mb-5">
            <h4 className="fw-bold mb-4">المرحلة الابتدائية :</h4>
            <div className="row g-4">
              {/* الصف الرابع الابتدائى */}
              <div className="col-md-4">
                <div className="card p-3 text-center">
                  <h6 className="mb-3 pb-3 fw-bold">الصف الرابع الابتدائى</h6>
                  <a href="/summaries/G4.pdf">
                    <button className="btn py-2 rounded-0 w-100">
                      قم بتحميل الملخص <FaDownload className="me-1" />
                    </button>
                  </a>
                </div>
              </div>
              {/* الصف الخامس الابتدائى */}
              <div className="col-md-4">
                <div className="card p-3 text-center">
                  <h6 className="mb-3 pb-3 fw-bold">الصف الخامس الابتدائى</h6>
                  <a href="/summaries/G5.pdf">
                    <button className="btn py-2 rounded-0 w-100">
                      قم بتحميل الملخص <FaDownload className="me-1" />
                    </button>
                  </a>
                </div>
              </div>
              {/* الصف السادس الابتدائى */}
              <div className="col-md-4">
                <div className="card p-3 text-center">
                  <h6 className="mb-3 pb-3 fw-bold">الصف السادس الابتدائى</h6>
                  <a href="/summaries/G6.pdf">
                    <button className="btn py-2 rounded-0 w-100">
                      قم بتحميل الملخص <FaDownload className="me-1" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* قسم الاعدادية */}
          <div className="mb-5">
            <h4 className="fw-bold mb-4">المرحلة الاعدادية :</h4>
            <div className="row g-4">
              {/* الصف الثانى الاعدادى  */}
              <div className="col-md-4">
                <div className="card p-3 text-center">
                  <h6 className="mb-3 pb-3 fw-bold">الصف الثانى الاعدادى </h6>
                  <a href="/summaries/G8.pdf">
                    <button className="btn py-2 rounded-0 w-100">
                      قم بتحميل الملخص <FaDownload className="me-1" />
                    </button>
                  </a>
                </div>
              </div>
              {/* الصف الثالث الاعدادى  */}
              <div className="col-md-4">
                <div className="card p-3 text-center">
                  <h6 className="mb-3 pb-3 fw-bold">الصف الثالث الاعدادى</h6>
                  <a href="/summaries/G9.pdf">
                    <button className="btn py-2 rounded-0 w-100">
                      قم بتحميل الملخص <FaDownload className="me-1" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

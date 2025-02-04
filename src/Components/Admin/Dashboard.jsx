import React from "react";
import { Helmet } from "react-helmet";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>لوحة التحكم</title>
      </Helmet>

      <section className="my-4 dashboard">
        <div className="container my-5 py-3">
          <h3 className="text-center fw-bold mb-2">لوحة تحكم الأستاذ</h3>

          {/* قسم الطلاب */}
          <div className="mb-5 mt-4">
            <h4 className="fw-bold mb-4">الطلاب :</h4>
            <div className="row g-4">
              {/* إضافة طالب */}
              <div className="col-md-4">
                <div className="card p-3 text-center">
                  <h5 className="mb-3">إضافة طالب</h5>
                  <Link to="/add-student" className="btn rounded-0 w-100">
                    انتقل الى <FaArrowLeft className="ms-2" />
                  </Link>
                </div>
              </div>
              {/* جميع الطلاب */}
              <div className="col-md-4">
                <div className="card p-3 text-center">
                  <h5 className="mb-3">جميع الطلاب</h5>
                  <Link to="/students" className="btn rounded-0 w-100">
                    انتقل الى <FaArrowLeft className="ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* قسم الإدارة */}
          <div className="mb-5">
            <h4 className="fw-bold mb-4">الإدارة :</h4>
            <div className="row g-4">
              {/* إضافة مسؤول */}
              <div className="col-md-4">
                <div className="card p-3 text-center">
                  <h5 className="mb-3">إضافة مسؤول</h5>
                  <Link to="/add-admin" className="btn rounded-0 w-100">
                    انتقل الى <FaArrowLeft className="ms-2" />
                  </Link>
                </div>
              </div>
              {/* جميع المسؤولين */}
              <div className="col-md-4">
                <div className="card p-3 text-center">
                  <h5 className="mb-3">جميع المسؤولين</h5>
                  <Link to="/admins" className="btn rounded-0 w-100">
                    انتقل الى <FaArrowLeft className="ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* قسم الامتحانات */}
          <div className="mb-5">
            <h4 className="fw-bold mb-4">الامتحانات :</h4>
            <div className="row g-4">
              {/* إضافة امتحان */}
              <div className="col-md-4">
                <div className="card p-3 text-center">
                  <h5 className="mb-3">إضافة امتحان</h5>
                  <Link to="/add-exam" className="btn rounded-0 w-100">
                    انتقل الى <FaArrowLeft className="ms-2" />
                  </Link>
                </div>
              </div>
              {/* درجات الطلاب */}
              <div className="col-md-4">
                <div className="card p-3 text-center">
                  <h5 className="mb-3">درجات الطلاب</h5>
                  <Link to="/student-grades" className="btn rounded-0 w-100">
                    انتقل الى <FaArrowLeft className="ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

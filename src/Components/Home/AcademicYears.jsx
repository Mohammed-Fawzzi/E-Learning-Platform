import React from "react";
import G4 from "../../assets/Pri(1).webp";
import G5 from "../../assets/Pri(2).webp";
import G6 from "../../assets/Pri(3).webp";

export default function AcademicYears() {
  return (
    <>
      <section className="my-5 academic">
        <h3 className="text-center fw-bold">السنوات الدراسية</h3>

        {/* Primary stage */}
        <div className="container pb-5 border-2">
          <div className="row">
            <h4 className="my-4 fw-bold">المرحلة الابتدائية :</h4>
            <div className="col-md-4">
              <div className="academic-card">
                <img
                  src={G4}
                  alt="الصف الرابع الابتدائي"
                  className="academic-img"
                />
                <div className="academic-inner">
                  <p className="fw-bold pt-2">الصف الرابع الابتدائي</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="academic-card">
                <img
                  src={G4}
                  alt="الصف الخامس الابتدائي"
                  className="academic-img"
                />
                <div className="academic-inner">
                  <p className="fw-bold pt-2">الصف الخامس الابتدائي</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="academic-card">
                <img
                  src={G4}
                  alt="الصف السادس الابتدائي"
                  className="academic-img"
                />
                <div className="academic-inner">
                  <p className="fw-bold pt-2">الصف السادس الابتدائي</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preparatory stage */}
        <div className="container pb-5 border-2">
          <div className="row">
            <h4 className="my-4 fw-bold">المرحلة الإعدادية :</h4>
            <div className="col-md-4">
              <div className="academic-card">
                <img
                  src={G5}
                  alt="الصف الأول الإعدادي"
                  className="academic-img"
                />
                <div className="academic-inner">
                  <p className="fw-bold pt-2">الصف الأول الإعدادي</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="academic-card">
                <img
                  src={G5}
                  alt="الصف الثاني الإعدادي"
                  className="academic-img"
                />
                <div className="academic-inner">
                  <p className="fw-bold pt-2">الصف الثاني الإعدادي</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="academic-card">
                <img
                  src={G5}
                  alt="الصف الثالث الإعدادي"
                  className="academic-img"
                />
                <div className="academic-inner">
                  <p className="fw-bold pt-2">الصف الثالث الإعدادي</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary stage */}
        <div className="container pb-5 border-2">
          <div className="row">
            <h4 className="my-4 fw-bold">المرحلة الثانوية :</h4>
            <div className="col-md-4">
              <div className="academic-card">
                <img
                  src={G6}
                  alt="الصف الأول الثانوي"
                  className="academic-img"
                />
                <div className="academic-inner">
                  <p className="fw-bold pt-2">الصف الأول الثانوي</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="academic-card">
                <img
                  src={G6}
                  alt="الصف الثاني الثانوي"
                  className="academic-img"
                />
                <div className="academic-inner">
                  <p className="fw-bold pt-2">الصف الثاني الثانوي</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="academic-card">
                <img
                  src={G6}
                  alt="الصف الثالث الثانوي"
                  className="academic-img"
                />
                <div className="academic-inner">
                  <p className="fw-bold pt-2">الصف الثالث الثانوي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

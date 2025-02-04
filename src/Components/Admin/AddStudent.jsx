import React from "react";
import { Helmet } from "react-helmet";

export default function AddStudent() {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>اضافة طالب</title>
      </Helmet>

      <section className="my-5 py-5 add-student">
        <div className="container">
          <h4 className="fw-bold mb-4">إضافة طالب :</h4>
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="studentName" className="form-label fw-bold">
                  اسم الطالب :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="studentName"
                  placeholder="أدخل اسم الطالب"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="studentGrade" className="form-label fw-bold">
                  الصف :
                </label>
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    id="studentGrade"
                    placeholder="اختر الصف"
                    readOnly
                  />
                  <select
                    id="grade"
                    name="grade"
                    className="form-select position-absolute top-0 start-0 w-100 h-100 opacity-0"
                  >
                    <option value="" disabled hidden>
                      اختر الصف :
                    </option>
                    <optgroup label="المرحلة الابتدائية">
                      <option value="G4">الصف الرابع الابتدائي</option>
                      <option value="G5">الصف الخامس الابتدائي</option>
                      <option value="G6">الصف السادس الابتدائي</option>
                    </optgroup>
                    <optgroup label="المرحلة الإعدادية">
                      <option value="G7">الصف الأول الإعدادي</option>
                      <option value="G8">الصف الثاني الإعدادي</option>
                      <option value="G9">الصف الثالث الإعدادي</option>
                    </optgroup>
                    <optgroup label="المرحلة الثانوية">
                      <option value="G10">الصف الأول الثانوي</option>
                      <option value="G11">الصف الثاني الثانوي</option>
                      <option value="G12">الصف الثالث الثانوي</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="studentPhone" className="form-label fw-bold">
                  رقم الهاتف :
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="studentPhone"
                  placeholder="أدخل رقم هاتف الطالب"
                  style={{ textAlign: "right", direction: "rtl" }}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="guardianPhone" className="form-label fw-bold">
                  رقم هاتف ولي الأمر :
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="guardianPhone"
                  placeholder="أدخل رقم هاتف ولي الأمر"
                  style={{ textAlign: "right", direction: "rtl" }}
                />
              </div>
            </div>
            <button type="submit" className="btn mt-3 py-2 rounded-0">
              إضافة الطالب
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

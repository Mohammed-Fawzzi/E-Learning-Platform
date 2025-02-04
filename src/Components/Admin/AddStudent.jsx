import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Api from "../../config/api"; 
import { useFormik } from "formik";
import * as Yup from "yup";
import { Bars } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

export default function AddStudent() {
  // Navigate to Students list
  const navigate = useNavigate();

  // loading State
  const [isLoading, setisLoading] = useState(false);

  // Fetch Api Data
  async function submitStudent(values) {
    try {
      setisLoading(true);
      let { data } = await Api.post(`/api/user/add-student`, values);
      toast.success(`تم إضافة الطالب بنجاح`);
      setisLoading(false);
      console.log(data.type);
      navigate("/students");
    } catch (error) {
      toast.error(`حدث خطأ اثناء إضافة الطالب!`);
      setisLoading(false);
    }
  }

  // Validation Schema
  let validationSchema = Yup.object({
    name: Yup.string().required("اسم الطالب مطلوب"),
    grade: Yup.string().required("الصف مطلوب"),
    studentMobile: Yup.string().required("رقم الهاتف مطلوب"),
    parentMobile: Yup.string().required("رقم هاتف ولي الأمر مطلوب"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      grade: "",
      studentMobile: "",
      parentMobile: "",
    },
    validationSchema,
    onSubmit: submitStudent,
  });

  // Check if loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>إضافة طالب</title>
      </Helmet>

      <section className="my-5 py-5 add-student">
        <div className="container">
          <h4 className="fw-bold mb-4">إضافة طالب جديد :</h4>
          <form onSubmit={formik.handleSubmit}>
            <div className="row mb-3">
              {/* اسم الطالب */}
              <div className="col-md-6">
                <label htmlFor="name" className="form-label fw-bold">
                  اسم الطالب :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="أدخل اسم الطالب"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ textAlign: "right", direction: "rtl" }}
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className="alert alert-danger p-2 my-2 rounded-0">
                    {formik.errors.name}
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* الصف */}
              <div className="col-md-6">
                <label htmlFor="grade" className="form-label fw-bold">
                  الصف :
                </label>
                <select
                  id="grade"
                  name="grade"
                  className="form-select"
                  value={formik.values.grade}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled hidden>
                    اختر الصف
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
                {formik.errors.grade && formik.touched.grade ? (
                  <div className="alert alert-danger p-2 my-2 rounded-0">
                    {formik.errors.grade}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="row mb-3">
              {/* رقم هاتف الطالب */}
              <div className="col-md-6">
                <label htmlFor="studentMobile" className="form-label fw-bold">
                  رقم الهاتف :
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="studentMobile"
                  placeholder="أدخل رقم هاتف الطالب"
                  value={formik.values.studentMobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ textAlign: "right", direction: "rtl" }}
                />
                {formik.errors.studentMobile && formik.touched.studentMobile ? (
                  <div className="alert alert-danger p-2 my-2 rounded-0">
                    {formik.errors.studentMobile}
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* رقم هاتف ولي الأمر */}
              <div className="col-md-6">
                <label htmlFor="parentMobile" className="form-label fw-bold">
                  رقم هاتف ولي الأمر :
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="parentMobile"
                  placeholder="أدخل رقم هاتف ولي الأمر"
                  value={formik.values.parentMobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ textAlign: "right", direction: "rtl" }}
                />
                {formik.errors.parentMobile && formik.touched.parentMobile ? (
                  <div className="alert alert-danger p-2 my-2 rounded-0">
                    {formik.errors.parentMobile}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <button
              type="submit"
              className="btn mt-3 py-2 rounded-0"
              disabled={!(formik.isValid && formik.dirty)}
            >
              {isLoading ? (
                <Bars
                  height="20"
                  width="50"
                  color="#fff"
                  ariaLabel="bars-loading"
                  visible={true}
                />
              ) : (
                "إضافة الطالب"
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

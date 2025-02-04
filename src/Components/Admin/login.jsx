import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Api from "../../config/api";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Bars } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

export default function Login() {
  // Navigate to Dashboard
  const navigate = useNavigate();

  // loading
  const [isLoading, setisLoading] = useState(false);

  // Fetch Api Data
  async function submitLogin(values) {
    try {
      setisLoading(true);
      let { data } = await Api.post(`/api/admin/login`, values);
      toast.success(`تم تسجبل الدخول بنجاح`);
      sessionStorage.setItem("Role", data.data.admin);
      setisLoading(false);
      navigate("/admin-dashboard");
    } catch (error) {
      toast.error(`حدث خطأ اثناء تسجيل الدخول!`);
      setisLoading(false);
    }
  }

  //Validation Schema
  let validationSchema = Yup.object({
    userName: Yup.string().required("رقم الهاتف مطلوب"),
    password: Yup.string().required("كلمه المرور مطلوبة"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema,
    onSubmit: submitLogin,
  });

  // Check if is loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>تسجيل دخول المسؤول</title>
      </Helmet>

      <section className="login">
        <div className="container my-5 py-5">
          <div className="row justify-content-center p-3 my-4">
            <div className="col-md-6 p-4 shadow-sm">
              <h3 className="text-center mb-4">تسجيل الدخول</h3>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label fw-bold">
                    رقم الهاتف :
                  </label>
                  <input
                    className="form-control"
                    placeholder="أدخل رقم هاتفك"
                    style={{ textAlign: "right", direction: "rtl" }}
                    id="userName"
                    name="userName"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.userName && formik.touched.userName ? (
                    <div className="alert alert-danger p-2 my-2 rounded-0">
                      {formik.errors.userName}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    كلمة المرور :
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="أدخل كلمة المرور"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="alert alert-danger p-2 my-2 rounded-0">
                      {formik.errors.password}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <button
                  type="submit"
                  className="btn rounded-0 w-100 d-flex justify-content-center"
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
                    "تسجيل الدخول"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

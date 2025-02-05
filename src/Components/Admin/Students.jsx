import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaUserGraduate, FaPhone, FaEdit, FaTrashAlt } from "react-icons/fa";
import api from "../../config/api";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

export default function Students() {
  // loading State
  const [isLoading, setIsLoading] = useState(false);

  // Stored Data
  const [students, setStudents] = useState([]);

  // Fetch Api Data
  async function displayStudents() {
    try {
      setIsLoading(true);
      let { data } = await api.get("/api/user/all-students");
      toast.success("تم جلب بيانات الطلاب بنجاح.");
      setStudents(data.data);
      setIsLoading(false);
    } catch (error) {
      toast.error("حدثت مشكلة أثناء جلب بيانات الطلاب!");
      console.error(error);
      setIsLoading(false);
    }
  }

  // Delete student
  async function deleteStudent(studentId) {
    try {
      await api.delete(`/api/user/delete-student/${studentId}`);
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student._id !== studentId)
      );
      toast.success("تم حذف الطالب بنجاح.");
    } catch (error) {
      console.error("Error deleting student:", error);
      toast.error("حدثت مشكلة أثناء محاولة حذف الطالب!");
    }
  }

  // Handle student Id
  function handleStudentId(studentId) {
    sessionStorage.setItem("SelectedStudent", studentId);
  }

  // Call Function
  useEffect(() => {
    displayStudents();
  }, []);

  // Check if is loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>جميع الطلاب</title>
      </Helmet>

      <section className="students my-5 py-3">
        <h4 className="m-3 fw-bold">جميع الطلاب :</h4>
        <div className="container mt-4">
          <div className="row">
            {students.length > 0 ? (
              students.map((student, index) => (
                <div
                  className="col-md-4 mb-4"
                  key={student._id}
                  onClick={() => handleStudentId(student._id)}
                >
                  <div className="card p-4 shadow-md">
                    <span>{index + 1}</span>

                    {/* Student Icon */}
                    <div
                      className="card-header rounded-circle mx-auto d-flex justify-content-center align-items-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <FaUserGraduate size={30} />
                    </div>

                    {/* student Details */}
                    <div className="card-details">
                      <p className="h6 fw-bold my-4">
                        الاسم: <strong className="me-2">{student.name}</strong>
                      </p>
                      <p className="h6 fw-bold">
                        الصف: <strong className="me-2">{student.grade}</strong>
                      </p>
                      <p className="h6 fw-bold my-4">
                        <FaPhone className="main-color" /> رقم الطالب:
                        <strong className="me-2">
                          {student.studentMobile}
                        </strong>
                      </p>
                      <p className="h6 fw-bold mb-3">
                        <FaPhone className="main-color" /> رقم ولي الأمر:
                        <strong className="me-2">{student.parentMobile}</strong>
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="card-buttons mt-3 d-flex justify-content-center gap-3">
                      <button className="btn d-flex align-items-center gap-1 rounded-0">
                        تعديل <FaEdit />
                      </button>
                      <button
                        className="btn d-flex align-items-center gap-1 rounded-0"
                        onClick={() => deleteStudent(student._id)}
                      >
                        حذف <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center main-color fw-bold">
                <p>لا يوجد بيانات لعرضها</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

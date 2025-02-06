import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaUserGraduate, FaPhone, FaEdit, FaTrashAlt } from "react-icons/fa";
import api from "../../config/api";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

export default function Students() {
  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Stored Data
  const [students, setStudents] = useState([]);

  // Student Data for Update
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newName, setNewName] = useState("");
  const [newGrade, setNewGrade] = useState("");
  const [newStudentMobile, setNewStudentMobile] = useState("");
  const [newParentMobile, setNewParentMobile] = useState("");

  // Fetch API Data
  async function displayStudents() {
    try {
      setIsLoading(true);
      let { data } = await api.get("/api/user/all-students");
      toast.success("تم جلب بيانات الطلاب بنجاح.");
      setStudents(data.data);
    } catch (error) {
      toast.error("حدثت مشكلة أثناء جلب بيانات الطلاب!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  // Delete Student
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

  // Open Update Modal
  function openUpdateModal(student) {
    setSelectedStudent(student);
    setNewName(student.name);
    setNewGrade(student.grade);
    setNewStudentMobile(student.studentMobile);
    setNewParentMobile(student.parentMobile);
  }

  // Update Student
  async function updateStudent() {
    if (!selectedStudent) return;

    try {
      await api.put(`/api/user/update-student/${selectedStudent._id}`, {
        name: newName,
        grade: newGrade,
        studentMobile: newStudentMobile,
        parentMobile: newParentMobile,
      });

      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student._id === selectedStudent._id
            ? {
                ...student,
                name: newName,
                grade: newGrade,
                studentMobile: newStudentMobile,
                parentMobile: newParentMobile,
              }
            : student
        )
      );

      toast.success("تم تعديل بيانات الطالب بنجاح.");
      setSelectedStudent(null); // Close modal after saving
    } catch (error) {
      console.error("Error updating student:", error);
      toast.error("حدثت مشكلة أثناء محاولة التعديل!");
    }
  }

  useEffect(() => {
    displayStudents();
  }, []);

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
                <div className="col-md-4 mb-4" key={student._id}>
                  <div className="card p-4 shadow-md">
                    <span>{index + 1}</span>

                    {/* Student Icon */}
                    <div
                      className="card-header rounded-circle mx-auto d-flex justify-content-center align-items-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <FaUserGraduate size={30} />
                    </div>

                    {/* Student Details */}
                    <div className="card-details">
                      <p className="h6 fw-bold my-4">
                        الاسم: <strong className="me-1 fw-medium">{student.name}</strong>
                      </p>
                      <p className="h6 fw-bold">
                        الصف: <strong className="me-1 fw-medium">{student.grade}</strong>
                      </p>
                      <p className="h6 fw-bold my-4">
                        <FaPhone className="main-color" /> رقم الطالب:
                        <strong className="me-1 fw-medium">
                          {student.studentMobile}
                        </strong>
                      </p>
                      <p className="h6 fw-bold mb-3">
                        <FaPhone className="main-color" /> رقم ولي الأمر:
                        <strong className="me-1 fw-medium">{student.parentMobile}</strong>
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="card-buttons mt-3 d-flex justify-content-center gap-3">
                      {/* Edit Button */}
                      <button
                        className="btn d-flex align-items-center gap-1 rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#updateStudentModal"
                        onClick={() => openUpdateModal(student)}
                      >
                        تعديل <FaEdit />
                      </button>
                      {/* Delete Button */}
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

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="updateStudentModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between">
              <button
                type="button"
                className="btn-close ms-auto"
                data-bs-dismiss="modal"
              ></button>
              <h5 className="modal-title">تعديل بيانات الطالب</h5>
            </div>

            <div className="modal-body">
              <label className="form-label">اسم الطالب</label>
              <input
                type="text"
                className="form-control"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />

              <label className="form-label mt-3">الصف</label>
              <input
                type="text"
                className="form-control"
                value={newGrade}
                onChange={(e) => setNewGrade(e.target.value)}
              />

              <label className="form-label mt-3">رقم الطالب</label>
              <input
                type="text"
                className="form-control"
                value={newStudentMobile}
                onChange={(e) => setNewStudentMobile(e.target.value)}
              />

              <label className="form-label mt-3">رقم ولي الأمر</label>
              <input
                type="text"
                className="form-control"
                value={newParentMobile}
                onChange={(e) => setNewParentMobile(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                data-bs-dismiss="modal"
              >
                إغلاق
              </button>
              <button
                type="button"
                className="btn"
                onClick={updateStudent}
                data-bs-dismiss="modal"
              >
                حفظ التعديلات
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

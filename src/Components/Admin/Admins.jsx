import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AiFillSetting } from "react-icons/ai";
import { FaUserShield, FaPhone, FaEdit, FaTrashAlt } from "react-icons/fa";
import api from "../../config/api";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

export default function Admins() {
  // Loading State
  const [isLoading, setisLoading] = useState(false);

  // Stored Data
  const [admins, setAdmins] = useState([]);

  // Admin Data for Update
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [newUserName, setNewUserName] = useState("");
  const [newRole, setNewRole] = useState("");

  // Fetch API Data
  async function displayAdmins() {
    try {
      setisLoading(true);
      let { data } = await api.get(`/api/admin/all-admin`);
      toast.success("تم جلب البيانات بنجاح.");
      setAdmins(data.data);
    } catch (error) {
      toast.error("حدثت مشكلة أثناء جلب البيانات !");
      console.log(error);
    } finally {
      setisLoading(false);
    }
  }

  // Delete Admin
  async function deleteAdmin(adminId) {
    try {
      await api.delete(`/api/admin/${adminId}`);
      setAdmins((prevAdmins) =>
        prevAdmins.filter((admin) => admin._id !== adminId)
      );
      toast.success("تم حذف المسؤول بنجاح.");
    } catch (error) {
      console.error("Error deleting admin:", error);
      toast.error("حدثت مشكلة أثناء محاولة حذف المسؤول!");
    }
  }

  // Open Update Modal
  function openUpdateModal(admin) {
    setSelectedAdmin(admin);
    setNewUserName(admin.userName);
    setNewRole(admin.role);
  }

  // Update Admin
  async function updateAdmin() {
    if (!selectedAdmin) return;

    try {
      await api.patch(`/api/admin/update/${selectedAdmin._id}`, {
        userName: newUserName,
        role: newRole,
      });

      setAdmins((prevAdmins) =>
        prevAdmins.map((admin) =>
          admin._id === selectedAdmin._id
            ? { ...admin, userName: newUserName, role: newRole }
            : admin
        )
      );

      toast.success("تم تعديل المسؤول بنجاح.");
      setSelectedAdmin(null);
    } catch (error) {
      console.error("Error updating admin:", error);
      toast.error("حدثت مشكلة أثناء محاولة التعديل!");
    }
  }

  useEffect(() => {
    displayAdmins();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>جميع المسؤولين</title>
      </Helmet>

      <section className="admins my-5 py-3">
        <h4 className="m-3 fw-bold">جميع المسؤولين :</h4>
        <div className="container mt-4">
          <div className="row">
            {admins.length > 0 ? (
              admins.map((admin, index) => (
                <div className="col-md-4 mb-4" key={admin._id}>
                  <div className="card p-4 shadow-md">
                    <span>{index + 1}</span>

                    {/* Admin Icon */}
                    <div
                      className="card-header rounded-circle mx-auto d-flex justify-content-center align-items-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <FaUserShield size={30} />
                    </div>

                    {/* Admin Details */}
                    <div className="card-details">
                      <p className="h6 fw-bold my-4">
                        <FaPhone className="main-color" /> رقم الهاتف :
                        <strong className="me-1 fw-medium">
                          {admin.userName}
                        </strong>
                      </p>
                      <p className="h6 fw-bold">
                        <AiFillSetting className="main-color" /> دور المسؤول :
                        <strong className="me-1 fw-medium">{admin.role}</strong>
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="card-buttons mt-3 d-flex justify-content-center gap-3">
                      {/* Edit Button */}
                      <button
                        className="btn d-flex align-items-center gap-1 rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#updateAdminModal"
                        onClick={() => openUpdateModal(admin)}
                      >
                        تعديل <FaEdit />
                      </button>

                      {/* Delete Button */}
                      <button
                        className="btn d-flex align-items-center gap-1 rounded-0"
                        onClick={() => deleteAdmin(admin._id)}
                      >
                        حذف <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center main-color fw-bold">
                <p>لا يوجد بيانات لعرضها </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="updateAdminModal"
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
              <h5 className="modal-title">تعديل بيانات المسؤول</h5>
            </div>

            <div className="modal-body">
              <label className="form-label">اسم المستخدم:</label>
              <input
                type="text"
                className="form-control"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />

              <label className="form-label mt-3">دور المسؤول:</label>
              <input
                type="text"
                className="form-control"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn rounded-0"
                data-bs-dismiss="modal"
              >
                إغلاق
              </button>
              <button
                type="button"
                className="btn rounded-0"
                onClick={updateAdmin}
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

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AiFillSetting } from "react-icons/ai";
import { FaUserShield, FaPhone, FaEdit, FaTrashAlt } from "react-icons/fa";
import api from "../../config/api";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

export default function Admins() {
  // loading State
  const [isLoading, setisLoading] = useState(false);

  // Stored Data
  const [admins, setAdmins] = useState([]);

  // Fetch Api Data
  async function displayAdmins() {
    try {
      setisLoading(true);
      let { data } = await api.get(`/api/admin/all-admin`);
      toast.success("تم جلب البيانات بنجاح.");
      setAdmins(data.data);
      setisLoading(false);
    } catch (error) {
      toast.error("حدثت مشكلة اثناء جلب البيانات !");
      console.log(error);
      setisLoading(false);
    }
  }

  // Delete Admin
  async function deleteAdmin(adminId) {
    try {
      await api.delete(`/api/admin/${adminId}`);
      setAdmins((prevAdmin) =>
        prevAdmin.filter((admin) => admin._id !== adminId)
      );
      toast.success("تم حذف المسؤول بنجاح.");
    } catch (error) {
      console.error("Error deleting student:", error);
      toast.error("حدثت مشكلة أثناء محاولة حذف المسؤول!");
    }
  }

  // Handle Admin Id
  function handleAdminId(adminId) {
    sessionStorage.setItem("OneAdmin", adminId);
  }

  // Call Function
  useEffect(() => {
    displayAdmins();
  }, []);

  // Check if is loading
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
                <div
                  className="col-md-4 mb-4"
                  key={admin._id}
                  onClick={() => handleAdminId(admin._id)}
                >
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
                        <strong className="me-2">{admin.userName}</strong>
                      </p>
                      <p className="h6 fw-bold">
                        <AiFillSetting className="main-color" /> دور المسؤول :
                        <strong className="me-2">{admin.role}</strong>
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="card-buttons mt-3 d-flex justify-content-center gap-3">
                      <button className="btn d-flex align-items-center gap-1 rounded-0">
                        تعديل <FaEdit />
                      </button>

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
    </>
  );
}

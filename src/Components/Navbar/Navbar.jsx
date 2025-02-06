import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  // Logout Function
  function handleLogout() {
    sessionStorage.removeItem("AdminLogin");
    sessionStorage.removeItem("AdminRole");
    navigate("/admin-login");
  }

  // Check if AdminLogin exists in sessionStorage
  const isAdminLoggedIn = sessionStorage.getItem("AdminLogin");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold">م/ محمود العزونى</NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/">
                  الرئيسية
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/about"
                >
                  عن الأستاذ محمود العزونى
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/quiz"
                >
                  اختبارات المنصة
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/summaries"
                >
                  ملخصات نصية <CgSoftwareDownload size={25} />
                </NavLink>
              </li>

              {isAdminLoggedIn && (
                <li className="nav-item">
                  <button
                    className="nav-link main-bg text-white"
                    onClick={handleLogout}
                  >
                    تسجيل الخروج <TbLogout2 size={25} />
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

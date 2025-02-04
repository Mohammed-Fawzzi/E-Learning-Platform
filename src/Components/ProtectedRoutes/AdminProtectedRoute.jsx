import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminProtectedRoutes(props) {
  if (sessionStorage.getItem("Role") === "true") {
    return props.children;
  } else {
    return <Navigate to={"/admin-login"} />;
  }
}

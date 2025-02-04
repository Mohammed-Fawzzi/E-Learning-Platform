import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // Get Role and Id after login directly 
  const [isAdminId, setisAdminId] = useState(sessionStorage.getItem("OneAdmin"));
  const [adminRole, setAdminRole] = useState(sessionStorage.getItem("AdminRole"));

  return (
    <AuthContext.Provider value={{ isAdminId, setisAdminId, adminRole, setAdminRole }}>
      {children}
    </AuthContext.Provider>
  );
}


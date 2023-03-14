import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRouts = ({ children }) => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/search" />;
  }

  return children;
};

export default ProtectedRouts;

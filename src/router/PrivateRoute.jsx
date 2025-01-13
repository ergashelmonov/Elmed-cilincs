import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
// import { apiClient } from "../api";

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/login") {
      navigate("/login");
    }
  }, [pathname]);
console.log(pathname);
  // console.log(document.cookie);

  // useEffect(() => {
  //   apiClient
  //     .get("/api/dashboard")
  //     .then((response) => {
  //       setIsAuthenticated(true);
  //     })
  //     .catch(() => {
  //       setIsAuthenticated(false);
  //     });
  // }, []);

  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export { PrivateRoute };

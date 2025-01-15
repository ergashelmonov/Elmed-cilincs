import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
// import { apiClient } from "../api";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
  }

  

  return <Outlet />;
};

export { PrivateRoute };

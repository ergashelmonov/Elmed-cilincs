import React, { useEffect } from "react";
import { useAuth } from "../store/useAuth";
import { Outlet, useNavigate } from "react-router-dom";

export const PrivateRoute = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const login = JSON.parse(localStorage.getItem("login"));

  useEffect(() => {
    if (!login || !auth) {
      navigate("/login");
    }
  }, [auth, login]);

  useEffect(() => {
    setAuth(login);
  }, [login]);

  return (
    <>
      <Outlet />
    </>
  );
};

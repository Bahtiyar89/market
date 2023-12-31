import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { useAuthContext } from "../context/AuthProvider";

function PrivateRouter() {
  const location = useLocation();
  // const { authRouter }: any = useAuthContext();

  if (true) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return <Outlet />;
}

export default PrivateRouter;

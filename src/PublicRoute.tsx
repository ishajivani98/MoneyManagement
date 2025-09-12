import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

function PublicRoute({ children }: { children: ReactNode }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? <Navigate to="/dashboard" /> : children;
}

export default PublicRoute;

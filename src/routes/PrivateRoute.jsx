import { Navigate, useLocation } from "react-router-dom";
import { GridLoader } from "react-spinners";

import useAuth from "../hooks/useAuth";
export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <GridLoader />;
  if (user) return children;

  return <Navigate to="/sign-in" state={location?.pathname} replace={true} />;
};

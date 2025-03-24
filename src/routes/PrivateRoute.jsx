import { Navigate, useLocation } from "react-router-dom";
import { GridLoader } from "react-spinners";

import { useAuth } from "../hooks/useAuth";
export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <GridLoader color="#E11D48" size={20} />
      </div>
    );
  }
  if (user) return children;

  return <Navigate to="/sign-in" state={location?.pathname} replace={true} />;
};

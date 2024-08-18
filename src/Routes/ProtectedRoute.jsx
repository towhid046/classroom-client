import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }
  if (!user) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRoute;

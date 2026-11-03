import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute() {
  const { autenticado } = useAuth();
  const localizacao = useLocation();

  if (!autenticado) {
    return <Navigate to="/login" replace state={{ origem: localizacao }} />;
  }

  return <Outlet />;
}

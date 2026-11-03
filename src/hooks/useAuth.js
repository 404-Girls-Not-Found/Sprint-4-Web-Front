import { useContext } from "react";

import { AuthContext } from "../auth/authContext";

export function useAuth() {
  const contexto = useContext(AuthContext);

  if (!contexto) {
    throw new Error("useAuth deve ser utilizado dentro de AuthProvider.");
  }

  return contexto;
}

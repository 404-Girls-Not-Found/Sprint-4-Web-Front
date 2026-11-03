import { useMemo, useState } from "react";

import { AuthContext } from "./authContext";
import { USUARIO_TESTE } from "./authCredentials";

const CHAVE_AUTH = "jovi_sprint4_usuario";

function carregarUsuario() {
  try {
    const usuarioSalvo = localStorage.getItem(CHAVE_AUTH);
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(carregarUsuario);

  function entrar(email, senha) {
    if (email !== USUARIO_TESTE.email || senha !== USUARIO_TESTE.senha) {
      return { sucesso: false, mensagem: "E-mail ou senha inválidos." };
    }

    const usuarioAutenticado = {
      email: USUARIO_TESTE.email,
      nome: USUARIO_TESTE.nome,
    };

    localStorage.setItem(CHAVE_AUTH, JSON.stringify(usuarioAutenticado));
    setUsuario(usuarioAutenticado);

    return { sucesso: true };
  }

  function sair() {
    localStorage.removeItem(CHAVE_AUTH);
    setUsuario(null);
  }

  const valor = useMemo(
    () => ({
      usuario,
      autenticado: Boolean(usuario),
      entrar,
      sair,
    }),
    [usuario]
  );

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>;
}

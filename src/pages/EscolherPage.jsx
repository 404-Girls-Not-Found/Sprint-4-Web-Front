import { useNavigate } from "react-router-dom";

import EscolherPrototipo from "../components/escolherprototipo/EscolherPrototipo";
import { useAuth } from "../hooks/useAuth";

export default function EscolherPage() {
  const navegar = useNavigate();
  const { autenticado, sair } = useAuth();

  return (
    <EscolherPrototipo
      autenticado={autenticado}
      onEntrar={() => navegar("/login")}
      onSair={sair}
      onAbrirCamera={() => navegar("/camera")}
      onAbrirAplicativo={() => navegar("/aplicativo")}
    />
  );
}

import { useNavigate } from "react-router-dom";

import EscolherPrototipo from "../components/escolherprototipo/EscolherPrototipo";

export default function EscolherPage() {
  const navegar = useNavigate();

  return (
    <EscolherPrototipo
      onAbrirCamera={() => navegar("/camera")}
      onAbrirAplicativo={() => navegar("/aplicativo")}
    />
  );
}

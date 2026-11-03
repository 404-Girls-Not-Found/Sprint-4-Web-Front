import { useNavigate } from "react-router-dom";

import PrototipoAplicativo from "../components/aplicativo/PrototipoAplicativo";
import { useAuth } from "../hooks/useAuth";
import { useDicaEstudo } from "../hooks/useDicaEstudo";

export default function AplicativoPage({ curso, aulas }) {
  const navegar = useNavigate();
  const { sair } = useAuth();
  const dicas = useDicaEstudo();

  function encerrarSessao() {
    sair();
  }

  return (
    <PrototipoAplicativo
      curso={curso}
      aulas={aulas}
      dicaEstudo={dicas.dica}
      carregandoDica={dicas.carregando}
      erroDica={dicas.erro}
      onNovaDica={dicas.proximaDica}
      onSair={encerrarSessao}
      onVoltar={() => navegar("/")}
      onAbrirCamera={() => navegar("/camera")}
    />
  );
}

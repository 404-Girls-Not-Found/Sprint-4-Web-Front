import { useNavigate } from "react-router-dom";

import PrototipoAplicativo from "../components/aplicativo/PrototipoAplicativo";
import { useDicaEstudo } from "../hooks/useDicaEstudo";

export default function AplicativoPage({ curso, aulas }) {
  const navegar = useNavigate();
  const dicas = useDicaEstudo();

  return (
    <PrototipoAplicativo
      curso={curso}
      aulas={aulas}
      dicaEstudo={dicas.dica}
      carregandoDica={dicas.carregando}
      erroDica={dicas.erro}
      onNovaDica={dicas.proximaDica}
      onVoltar={() => navegar("/")}
      onAbrirCamera={() => navegar("/camera")}
    />
  );
}

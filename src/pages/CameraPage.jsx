import { useNavigate } from "react-router-dom";

import CameraPrototipo from "../components/camera/CameraPrototipo";
import EntradaModoAula from "../components/camera/1entradamodoaula/EntradaModoAula";
import ConfigurarCurso from "../components/camera/2configurarcurso/ConfigurarCurso";
import ConfigurarAulas from "../components/camera/3configuraraulas/ConfigurarAulas";
import Revisar from "../components/camera/4revisarcronograma/Revisar";
import Organizar from "../components/camera/5organizarconteudos/Organizar";
import ModoAulaAtivo from "../components/camera/6modoaula/ModoAulaAtivo";
import { useCamera } from "../hooks/useCamera";

export default function CameraPage({ modoAula }) {
  const navegar = useNavigate();
  const videoRef = useCamera();

  function voltarParaInicio() {
    modoAula.fecharTodasAsTelas();
    navegar("/");
  }

  return (
    <CameraPrototipo
      videoRef={videoRef}
      modoAulaAtivo={modoAula.modoAulaAtivo}
      onAbrirModoAula={modoAula.abrirEntrada}
      onVoltar={voltarParaInicio}
    >
      <EntradaModoAula
        aberto={modoAula.entradaModoAulaAberta}
        onFechar={modoAula.fecharEntrada}
        onConfigurar={modoAula.iniciarConfiguracao}
      />

      <ConfigurarCurso
        aberto={modoAula.configuracaoCursoAberta}
        curso={modoAula.curso}
        onAlterarCurso={modoAula.setCurso}
        onVoltar={modoAula.voltarParaEntrada}
        onContinuar={modoAula.abrirConfiguracaoAulas}
      />

      <ConfigurarAulas
        aberto={modoAula.configuracaoAulasAberta}
        aulas={modoAula.aulas}
        onAlterarAulas={modoAula.setAulas}
        onVoltar={modoAula.voltarParaCurso}
        onContinuar={modoAula.abrirRevisao}
      />

      <Revisar
        aberto={modoAula.revisaoConfiguracaoAberta}
        curso={modoAula.curso}
        aulas={modoAula.aulas}
        onVoltar={modoAula.voltarParaAulas}
        onEditarCurso={modoAula.editarCurso}
        onEditarAulas={modoAula.editarAulas}
        onFinalizar={modoAula.abrirOrganizacao}
      />

      <Organizar
        aberto={modoAula.organizacaoConteudosAberta}
        valor={modoAula.formaOrganizacao}
        onAlterar={modoAula.setFormaOrganizacao}
        onVoltar={modoAula.voltarParaRevisao}
        onFinalizar={modoAula.ativarModoAula}
      />

      <ModoAulaAtivo
        aberto={modoAula.modoAulaAtivo}
        curso={modoAula.curso}
        aulas={modoAula.aulas}
        onSair={modoAula.sairModoAula}
        onAbrirConfiguracoes={modoAula.reabrirConfiguracoes}
      />
    </CameraPrototipo>
  );
}

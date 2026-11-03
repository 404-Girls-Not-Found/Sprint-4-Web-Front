import { useEffect, useState } from "react";

const CHAVE_STORAGE_CURSO = "jovi_modoaula_curso";
const CHAVE_STORAGE_AULAS = "jovi_modoaula_aulas";

const AULA_PADRAO = {
  id: 1,
  materia: "",
  dia: "",
  horarioInicio: "",
  horarioFim: "",
};

function carregarCursoSalvo() {
  try {
    return localStorage.getItem(CHAVE_STORAGE_CURSO) ?? "";
  } catch {
    return "";
  }
}

function carregarAulasSalvas() {
  try {
    const aulasSalvas = localStorage.getItem(CHAVE_STORAGE_AULAS);
    if (!aulasSalvas) return [AULA_PADRAO];

    const aulasConvertidas = JSON.parse(aulasSalvas);
    return Array.isArray(aulasConvertidas) && aulasConvertidas.length > 0
      ? aulasConvertidas
      : [AULA_PADRAO];
  } catch {
    return [AULA_PADRAO];
  }
}

export function useModoAula() {
  const [entradaModoAulaAberta, setEntradaModoAulaAberta] = useState(false);
  const [configuracaoCursoAberta, setConfiguracaoCursoAberta] = useState(false);
  const [configuracaoAulasAberta, setConfiguracaoAulasAberta] = useState(false);
  const [revisaoConfiguracaoAberta, setRevisaoConfiguracaoAberta] = useState(false);
  const [organizacaoConteudosAberta, setOrganizacaoConteudosAberta] = useState(false);
  const [modoAulaAtivo, setModoAulaAtivo] = useState(false);
  const [formaOrganizacao, setFormaOrganizacao] = useState("");
  const [curso, setCurso] = useState(carregarCursoSalvo);
  const [aulas, setAulas] = useState(carregarAulasSalvas);

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_STORAGE_CURSO, curso);
    } catch (erro) {
      console.error("Erro ao salvar o curso:", erro);
    }
  }, [curso]);

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_STORAGE_AULAS, JSON.stringify(aulas));
    } catch (erro) {
      console.error("Erro ao salvar as aulas:", erro);
    }
  }, [aulas]);

  function fecharTodasAsTelas() {
    setEntradaModoAulaAberta(false);
    setConfiguracaoCursoAberta(false);
    setConfiguracaoAulasAberta(false);
    setRevisaoConfiguracaoAberta(false);
    setOrganizacaoConteudosAberta(false);
    setModoAulaAtivo(false);
  }

  return {
    curso,
    setCurso,
    aulas,
    setAulas,
    entradaModoAulaAberta,
    configuracaoCursoAberta,
    configuracaoAulasAberta,
    revisaoConfiguracaoAberta,
    organizacaoConteudosAberta,
    modoAulaAtivo,
    formaOrganizacao,
    setFormaOrganizacao,
    abrirEntrada: () => setEntradaModoAulaAberta(true),
    fecharEntrada: () => setEntradaModoAulaAberta(false),
    iniciarConfiguracao: () => {
      setEntradaModoAulaAberta(false);
      setConfiguracaoCursoAberta(true);
    },
    voltarParaEntrada: () => {
      setConfiguracaoCursoAberta(false);
      setEntradaModoAulaAberta(true);
    },
    abrirConfiguracaoAulas: () => {
      setConfiguracaoCursoAberta(false);
      setConfiguracaoAulasAberta(true);
    },
    voltarParaCurso: () => {
      setConfiguracaoAulasAberta(false);
      setConfiguracaoCursoAberta(true);
    },
    abrirRevisao: () => {
      setConfiguracaoAulasAberta(false);
      setRevisaoConfiguracaoAberta(true);
    },
    voltarParaAulas: () => {
      setRevisaoConfiguracaoAberta(false);
      setConfiguracaoAulasAberta(true);
    },
    editarCurso: () => {
      setRevisaoConfiguracaoAberta(false);
      setConfiguracaoCursoAberta(true);
    },
    editarAulas: () => {
      setRevisaoConfiguracaoAberta(false);
      setConfiguracaoAulasAberta(true);
    },
    abrirOrganizacao: () => {
      setRevisaoConfiguracaoAberta(false);
      setOrganizacaoConteudosAberta(true);
    },
    voltarParaRevisao: () => {
      setOrganizacaoConteudosAberta(false);
      setRevisaoConfiguracaoAberta(true);
    },
    ativarModoAula: () => {
      setOrganizacaoConteudosAberta(false);
      setModoAulaAtivo(true);
    },
    sairModoAula: () => setModoAulaAtivo(false),
    reabrirConfiguracoes: () => {
      setModoAulaAtivo(false);
      setConfiguracaoCursoAberta(true);
    },
    fecharTodasAsTelas,
  };
}

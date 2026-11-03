import { useEffect, useRef, useState } from "react";

import {
  BookOpen,
  ChevronUp,
  FileText,
  Images,
  LogOut,
  Menu,
  Mic,
  RefreshCw,
  Settings,
  Square,
  ZapOff,
} from "lucide-react";

import { camera } from "../../../tailwindStyles";

const diasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

function converterParaMinutos(horario) {
  const [horas, minutos] = horario.split(":").map(Number);

  return horas * 60 + minutos;
}

function encontrarAulaAtiva(aulas) {
  const agora = new Date();
  const diaAtual = diasDaSemana[agora.getDay()];
  const minutosAgora = agora.getHours() * 60 + agora.getMinutes();

  return aulas.find((aula) => {
    if (
      aula.dia !== diaAtual ||
      !aula.horarioInicio ||
      !aula.horarioFim
    ) {
      return false;
    }

    const inicio = converterParaMinutos(aula.horarioInicio);
    const fim = converterParaMinutos(aula.horarioFim);

    return minutosAgora >= inicio && minutosAgora <= fim;
  });
}

function ModoAulaAtivo({
  aberto,
  curso,
  aulas,
  onSair,
  onAbrirConfiguracoes,
}) {
  const [modoSelecionado, setModoSelecionado] =
    useState("Foto");

  const [gravandoAudio, setGravandoAudio] =
    useState(false);

  const [segundosGravacao, setSegundosGravacao] =
    useState(0);

  const gravadorRef = useRef(null);
  const streamAudioRef = useRef(null);

  useEffect(() => {
    let intervalo;

    if (gravandoAudio) {
      intervalo = setInterval(() => {
        setSegundosGravacao((segundos) => segundos + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [gravandoAudio]);

  useEffect(() => {
    return () => {
      if (
        gravadorRef.current &&
        gravadorRef.current.state !== "inactive"
      ) {
        gravadorRef.current.stop();
      }

      streamAudioRef.current?.getTracks().forEach((track) => {
        track.stop();
      });
    };
  }, []);

  if (!aberto) {
    return null;
  }

  const aulaAtiva = encontrarAulaAtiva(aulas);

  const materiaAtual =
    aulaAtiva?.materia ||
    aulas.find((aula) => aula.materia?.trim())?.materia ||
    curso ||
    "Modo Aula";

  const sessaoAtual = aulaAtiva
    ? `${aulaAtiva.dia} · ${aulaAtiva.horarioInicio} às ${aulaAtiva.horarioFim}`
    : "Nenhuma aula ativa agora";

  const modosAula = [
    "Foto",
    "Documento",
    "Áudio",
  ];

  function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;

    return `${String(minutos).padStart(2, "0")}:${String(
      segundosRestantes
    ).padStart(2, "0")}`;
  }

  async function iniciarGravacaoAudio() {
    if (gravandoAudio) {
      return;
    }

    try {
      const streamAudio =
        await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

      const gravador = new MediaRecorder(streamAudio);

      gravadorRef.current = gravador;
      streamAudioRef.current = streamAudio;

      gravador.onstop = () => {
        streamAudio.getTracks().forEach((track) => {
          track.stop();
        });
      };

      gravador.start();

      setSegundosGravacao(0);
      setGravandoAudio(true);
    } catch (erro) {
      console.error(
        "Não foi possível iniciar a gravação:",
        erro
      );

      alert(
        "Não foi possível acessar o microfone. Verifique as permissões do navegador."
      );
    }
  }

  function pararGravacaoAudio() {
    if (
      gravadorRef.current &&
      gravadorRef.current.state !== "inactive"
    ) {
      gravadorRef.current.stop();
    }

    streamAudioRef.current?.getTracks().forEach((track) => {
      track.stop();
    });

    setGravandoAudio(false);
    setSegundosGravacao(0);
  }

  function selecionarModo(modo) {
    setModoSelecionado(modo);
  }

  function capturarModoAtual() {
    if (modoSelecionado === "Áudio") {
      iniciarGravacaoAudio();
    }
  }

  function sairDoModoAula() {
    if (gravandoAudio) {
      pararGravacaoAudio();
    }

    onSair();
  }

  return (
    <section className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between">
      <header className={`${camera.topo} pointer-events-auto`}>
        <div className="flex max-w-[48%] items-center gap-2 overflow-hidden">
          <BookOpen size={19} />

          <span className="flex min-w-0 flex-col gap-0.5">
            <strong className="overflow-hidden text-ellipsis whitespace-nowrap">{materiaAtual}</strong>
            <small className="overflow-hidden text-ellipsis whitespace-nowrap text-[9px] text-texto-secundario">{sessaoAtual}</small>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            className={camera.botaoIcone}
            type="button"
            aria-label="Flash desligado"
          >
            <ZapOff size={19} />
          </button>

          <button
            className={camera.botaoIcone}
            type="button"
            onClick={onAbrirConfiguracoes}
            aria-label="Editar curso e matérias"
          >
            <Settings size={19} />
          </button>

          <button
            className="grid size-[34px] place-items-center bg-transparent"
            type="button"
            onClick={sairDoModoAula}
            aria-label="Sair do Modo Aula"
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      {modoSelecionado === "Documento" && (
        <div className="pointer-events-none absolute top-[15%] right-[10%] bottom-[35%] left-[10%] overflow-hidden rounded-[12px] border-2 border-amarelo-camera">
          <div className="absolute inset-x-0 h-0.5 bg-amarelo-camera animate-[escanear-documento_2.2s_ease-in-out_infinite_alternate]" />
        </div>
      )}

      <section className={`${camera.controles} pointer-events-auto`}>
        <nav
          className="flex h-[55px] w-full items-center justify-center gap-7 overflow-hidden px-5"
          aria-label="Modos da câmera"
        >
          {modosAula.map((modo) => (
            <button
              key={modo}
              className={`${camera.modo} flex cursor-pointer items-center justify-center gap-1 ${modo === modoSelecionado ? "!text-[#f3c900]" : ""}`}
              type="button"
              onClick={() => selecionarModo(modo)}
            >
              {modo === "Documento" && (
                <FileText size={14} />
              )}

              {modo === "Áudio" && (
                <Mic size={14} />
              )}

              {modo}
            </button>
          ))}
        </nav>

        <div className={camera.acoes}>
          <button
            className={camera.botaoRedondo}
            type="button"
            aria-label="Abrir galeria"
          >
            <Images size={23} />
          </button>

          <button
            className={camera.capturar}
            type="button"
            onClick={capturarModoAtual}
            aria-label={
              modoSelecionado === "Áudio"
                ? "Iniciar gravação de áudio"
                : "Capturar"
            }
          >
            <span className="block h-full w-full rounded-full border-[3px] border-[#e3bd00] bg-black" />
          </button>

          <button
            className={camera.botaoRedondo}
            type="button"
            aria-label="Inverter câmera"
          >
            <RefreshCw size={24} />
          </button>
        </div>

        {gravandoAudio ? (
          <button
            className="mt-[14px] flex w-full items-center justify-center gap-[7px] bg-transparent text-[0.78rem] text-vermelho-gravacao"
            type="button"
            onClick={pararGravacaoAudio}
            aria-label="Parar gravação de áudio"
          >
            <span className="size-2 rounded-full bg-vermelho-gravacao animate-[piscar-gravacao_1s_ease-in-out_infinite]" />

            <span>Gravando áudio</span>

            <strong className="text-[0.78rem] tabular-nums">
              {formatarTempo(segundosGravacao)}
            </strong>

            <Square size={13} fill="currentColor" />
          </button>
        ) : (
          <button
            className={camera.expandir}
            type="button"
            aria-label="Expandir controles"
          >
            <ChevronUp size={25} />
          </button>
        )}

        <footer className={camera.navegacao}>
          <Menu size={18} />

          <span className="size-[14px] rounded-full border-2 border-[#777]" />

          <ChevronUp
            className="-rotate-90"
            size={20}
          />
        </footer>
      </section>
    </section>
  );
}

export default ModoAulaAtivo;

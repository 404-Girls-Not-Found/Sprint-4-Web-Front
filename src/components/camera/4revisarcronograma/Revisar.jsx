import {
  BookOpen,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Pencil,
} from "lucide-react";

import { configuracao } from "../../../tailwindStyles";

function Revisar({
  aberto,
  curso,
  aulas,
  onVoltar,
  onEditarCurso,
  onEditarAulas,
  onFinalizar,
}) {
  if (!aberto) {
    return null;
  }

  return (
    <section className={`${configuracao.tela} z-50`}>
      <header className={configuracao.topo}>
        <button
          className={configuracao.voltar}
          type="button"
          onClick={onVoltar}
        >
          <ChevronLeft size={23} />
        </button>

        <div className={configuracao.titulo}>
          <span className={configuracao.rotuloTopo}>Configuração</span>
          <strong className={configuracao.nomeTopo}>Modo Aula</strong>
        </div>

        <span className={configuracao.etapa}>3 de 4</span>
      </header>

      <div className={configuracao.progresso}>
        <span className={`${configuracao.barra} w-3/4`} />
      </div>

      <main className="mx-auto grid w-full max-w-[430px] gap-5 px-[22px] pt-[35px] pb-[45px]">
        <span className={`${configuracao.icone} mb-5 size-14 rounded-[18px]`}>
          <Check size={30} />
        </span>

        <p className={configuracao.categoria}>
          Revisão
        </p>

        <h1 className="max-w-[340px] text-[25px] leading-[1.2] text-texto-principal">Confira suas informações</h1>

        <p className={`${configuracao.descricao} max-w-[360px]`}>
          Verifique se o seu curso, as matérias e os horários
          estão certos antes de ativar o Modo Aula.
        </p>

        <section className="mt-[25px]">
          <header className="mb-[10px] flex items-center justify-between">
            <div className="flex items-center gap-2 text-azul-geral">
              <BookOpen size={18} />
              <span className="text-[12px] font-bold text-texto-principal">Seu curso</span>
            </div>

            <button
              className="flex items-center gap-[5px] rounded-[9px] border border-azul-geral bg-azul-transparente px-[9px] py-[7px] text-[10px] font-bold text-azul-geral transition-[background-color,transform] duration-150 hover:bg-azul-foco active:scale-[0.96]"
              type="button"
              onClick={onEditarCurso}
            >
              <Pencil size={15} />
              Editar
            </button>
          </header>

          <article className="flex flex-col gap-[5px] rounded-[15px] border border-borda-principal bg-fundo-input p-[17px]">
            <small className="text-[9px] text-texto-suave">Curso informado</small>
            <strong className="text-[14px] text-texto-principal">{curso}</strong>
          </article>
        </section>

        <section className="mt-[25px]">
          <header className="mb-[10px] flex items-center justify-between">
            <div className="flex items-center gap-2 text-azul-geral">
              <CalendarDays size={18} />
              <span className="text-[12px] font-bold text-texto-principal">Suas aulas</span>
            </div>

            <button
              className="flex items-center gap-[5px] rounded-[9px] border border-azul-geral bg-azul-transparente px-[9px] py-[7px] text-[10px] font-bold text-azul-geral transition-[background-color,transform] duration-150 hover:bg-azul-foco active:scale-[0.96]"
              type="button"
              onClick={onEditarAulas}
            >
              <Pencil size={15} />
              Editar
            </button>
          </header>

          <div className="flex flex-col gap-[11px]">
            {aulas.map((aula, indice) => (
              <article
                className="flex items-start gap-[13px] rounded-[15px] border border-borda-principal bg-fundo-input p-[15px]"
                key={aula.id}
              >
                <div className="grid size-[33px] shrink-0 place-items-center rounded-[10px] border border-azul-geral bg-azul-transparente text-[11px] font-bold text-texto-principal">
                  {indice + 1}
                </div>

                <div className="flex min-w-0 flex-col gap-[7px] [&>div]:flex [&>div]:items-center [&>div]:gap-1.5 [&>div]:text-texto-secundario [&_svg]:shrink-0 [&_svg]:text-azul-geral [&_span]:text-[10px]">
                  <strong className="text-[13px] text-texto-principal [overflow-wrap:anywhere]">{aula.materia}</strong>

                  <div>
                    <CalendarDays size={14} />
                    <span>{aula.dia}</span>
                  </div>

                  <div>
                    <Clock size={14} />

                    <span>
                      {aula.horarioInicio} até{" "}
                      {aula.horarioFim}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-6 flex items-start gap-[9px] rounded-[12px] border border-borda-principal bg-fundo-botao p-[13px] text-texto-secundario">
          <Check className="shrink-0 text-azul-geral" size={18} />

          <p className="text-[10px] leading-[1.55]">
            Depois de ativado, o Modo Aula identificará
            automaticamente a matéria atual usando o dia e o
            horário.
          </p>
        </div>

        <button
          className={`${configuracao.primario} mt-[25px]`}
          type="button"
          onClick={onFinalizar}
        >
          Continuar
          <ChevronRight size={20} />
        </button>
      </main>
    </section>
  );
}

export default Revisar;

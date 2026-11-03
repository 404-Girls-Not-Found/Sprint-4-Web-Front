import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock,
  Plus,
  Trash2,
} from "lucide-react";

import { configuracao } from "../../../tailwindStyles";

const campo = "mt-[14px]";
const label = "mb-[7px] block text-[10px] font-semibold text-texto-label";
const controle = "h-[46px] w-full rounded-[11px] border border-borda-principal bg-fundo px-3 text-[12px] text-texto-principal outline-none placeholder:text-texto-placeholder focus:border-azul-geral focus:shadow-[0_0_0_3px_var(--color-azul-foco)]";

function ConfigurarAulas({
  aberto,
  aulas,
  onAlterarAulas,
  onVoltar,
  onContinuar,
}) {
  if (!aberto) {
    return null;
  }

  function adicionarAula() {
    const novaAula = {
      id: Date.now(),
      materia: "",
      dia: "",
      horarioInicio: "",
      horarioFim: "",
    };

    onAlterarAulas([...aulas, novaAula]);
  }

  function alterarAula(id, campo, valor) {
    const aulasAtualizadas = aulas.map((aula) => {
      if (aula.id === id) {
        return {
          ...aula,
          [campo]: valor,
        };
      }

      return aula;
    });

    onAlterarAulas(aulasAtualizadas);
  }

  function removerAula(id) {
    const aulasAtualizadas = aulas.filter(
      (aula) => aula.id !== id
    );

    onAlterarAulas(aulasAtualizadas);
  }

  function enviarFormulario(evento) {
    evento.preventDefault();

    const existeCampoVazio = aulas.some((aula) => {
      return (
        !aula.materia.trim() ||
        !aula.dia ||
        !aula.horarioInicio ||
        !aula.horarioFim
      );
    });

    if (existeCampoVazio) {
      alert(
        "Preencha a matéria, o dia e os horários de todas as aulas."
      );

      return;
    }

    onContinuar();
  }

  return (
    <section className={`${configuracao.tela} z-40`}>
      <header className={configuracao.topo}>
        <button
          className={configuracao.voltar}
          type="button"
          onClick={onVoltar}
          aria-label="Voltar"
        >
          <ChevronLeft size={23} />
        </button>

        <div className={configuracao.titulo}>
          <span className={configuracao.rotuloTopo}>Configuração</span>
          <strong className={configuracao.nomeTopo}>Modo Aula</strong>
        </div>

        <span className={configuracao.etapa}>
          2 de 4
        </span>
      </header>

      <div className={configuracao.progresso}>
        <span className={`${configuracao.barra} w-1/2`} />
      </div>

      <main className="mx-auto w-full max-w-[430px] px-[22px] pt-[35px] pb-10">
        <span className={`${configuracao.icone} mb-5 size-14 rounded-[18px]`}>
          <BookOpen size={30} />
        </span>

        <p className={configuracao.categoria}>
          Suas aulas
        </p>

        <h1 className="max-w-[340px] text-[25px] leading-[1.2] text-texto-principal">Quais aulas fazem parte da sua rotina?</h1>

        <p className={`${configuracao.descricao} max-w-[360px]`}>
          Informe as matérias e os horários para que o Modo Aula
          identifique automaticamente cada aula.
        </p>

        <form
          className="mt-[30px] grid gap-5"
          onSubmit={enviarFormulario}
        >
          <div className="flex flex-col gap-[17px]">
            {aulas.map((aula, indice) => (
              <article
                className="rounded-2xl border border-borda-principal bg-fundo-input p-[17px]"
                key={aula.id}
              >
                <header className="mb-[18px] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-azul-geral">
                    <Clock size={16} />
                    <strong className="text-[12px] text-texto-principal">Aula {indice + 1}</strong>
                  </div>

                  {aulas.length > 1 && (
                    <button
                      className="grid size-8 place-items-center rounded-[9px] border border-[rgba(210,103,103,0.3)] bg-[rgba(210,103,103,0.08)] text-[#d26767] hover:bg-[rgba(210,103,103,0.18)]"
                      type="button"
                      onClick={() => removerAula(aula.id)}
                      aria-label={`Remover aula ${indice + 1}`}
                    >
                      <Trash2 size={17} />
                    </button>
                  )}
                </header>

                <div className={campo}>
                  <label className={label} htmlFor={`materia_${aula.id}`}>
                    Matéria
                  </label>

                  <input
                    className={controle}
                    id={`materia_${aula.id}`}
                    type="text"
                    value={aula.materia}
                    placeholder="Ex: Web Development"
                    onChange={(evento) =>
                      alterarAula(
                        aula.id,
                        "materia",
                        evento.target.value
                      )
                    }
                  />
                </div>

                <div className={campo}>
                  <label className={label} htmlFor={`dia_${aula.id}`}>
                    Dia da semana
                  </label>

                  <select
                    className={`${controle} [&>option]:bg-fundo [&>option]:text-texto-principal`}
                    id={`dia_${aula.id}`}
                    value={aula.dia}
                    onChange={(evento) =>
                      alterarAula(
                        aula.id,
                        "dia",
                        evento.target.value
                      )
                    }
                  >
                    <option value="">Selecione um dia</option>
                    <option value="Segunda-feira">
                      Segunda-feira
                    </option>
                    <option value="Terça-feira">
                      Terça-feira
                    </option>
                    <option value="Quarta-feira">
                      Quarta-feira
                    </option>
                    <option value="Quinta-feira">
                      Quinta-feira
                    </option>
                    <option value="Sexta-feira">
                      Sexta-feira
                    </option>
                    <option value="Sábado">Sábado</option>
                    <option value="Domingo">Domingo</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className={campo}>
                    <label className={label} htmlFor={`inicio_${aula.id}`}>
                      Início
                    </label>

                    <input
                      className={controle}
                      id={`inicio_${aula.id}`}
                      type="time"
                      value={aula.horarioInicio}
                      onChange={(evento) =>
                        alterarAula(
                          aula.id,
                          "horarioInicio",
                          evento.target.value
                        )
                      }
                    />
                  </div>

                  <div className={campo}>
                    <label className={label} htmlFor={`fim_${aula.id}`}>
                      Término
                    </label>

                    <input
                      className={controle}
                      id={`fim_${aula.id}`}
                      type="time"
                      value={aula.horarioFim}
                      onChange={(evento) =>
                        alterarAula(
                          aula.id,
                          "horarioFim",
                          evento.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-[13px] border border-dashed border-azul-geral bg-azul-transparente text-[12px] font-bold text-azul-geral hover:bg-azul-foco"
            type="button"
            onClick={adicionarAula}
          >
            <Plus size={20} />
            Adicionar aula
          </button>

          <button
            className={`${configuracao.primario} mt-[25px]`}
            type="submit"
          >
            Continuar
            <ChevronRight size={20} />
          </button>
        </form>
      </main>
    </section>
  );
}

export default ConfigurarAulas;

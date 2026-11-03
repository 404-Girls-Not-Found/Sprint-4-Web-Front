import {
  ArrowRight,
  Check,
  ChevronLeft,
  Cloud,
  FolderOpen,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { configuracao } from "../../../tailwindStyles";

const opcoesOrganizacao = [
  {
    id: "aplicativos-nativos",
    titulo: "Aplicativos do celular",
    descricao:
      "Fotos, arquivos e áudios continuam salvos e organizados nos aplicativos nativos do seu aparelho.",
    icone: Smartphone,
  },
  {
    id: "google-drive",
    titulo: "Google Drive",
    descricao:
      "Conecte sua conta para guardar os conteúdos das aulas no Google Drive.",
    icone: FolderOpen,
  },
  {
    id: "one-drive",
    titulo: "OneDrive",
    descricao:
      "Conecte sua conta Microsoft para salvar os conteúdos das aulas no OneDrive.",
    icone: Cloud,
  },
  {
    id: "organizacao-inteligente",
    titulo: "Organização inteligente",
    descricao:
      "Use nosso aplicativo para organizar os materiais, transcrever áudios e criar resumos inteligentes.",
    icone: Sparkles,
    recomendado: true,
    beneficios: [
      "Organização automática por matéria",
      "Transcrição das gravações",
      "Resumos inteligentes",
    ],
  },
];

function Organizar({
  aberto,
  valor,
  onAlterar,
  onVoltar,
  onFinalizar,
}) {
  if (!aberto) {
    return null;
  }

  return (
    <section className={`${configuracao.tela} z-[55]`}>
      <header className={configuracao.topo}>
        <button
          className={configuracao.voltar}
          type="button"
          onClick={onVoltar}
          aria-label="Voltar para a revisão"
        >
          <ChevronLeft size={23} />
        </button>

        <div className={configuracao.titulo}>
          <span className={configuracao.rotuloTopo}>Configuração</span>
          <strong className={configuracao.nomeTopo}>Modo Aula</strong>
        </div>

        <span className={configuracao.etapa}>
          4 de 4
        </span>
      </header>

      <div className={configuracao.progresso}>
        <span className={`${configuracao.barra} w-full`} />
      </div>

      <main className="mx-auto grid w-full max-w-[430px] gap-5 px-[22px] pt-[31px] pb-[42px]">
        <span className={`${configuracao.icone} mb-[18px] size-[54px] rounded-[17px]`}>
          <FolderOpen size={29} />
        </span>

        <p className={configuracao.categoria}>
          Seus materiais
        </p>

        <h1 className="max-w-[360px] text-[25px] leading-[1.2]">Onde você quer organizar suas aulas?</h1>

        <p className={`${configuracao.descricao} max-w-[370px]`}>
          Escolha onde suas fotos, informações e gravações de áudio
          ficarão salvas. Você poderá mudar essa opção depois.
        </p>

        <div
          className="mt-6 flex flex-col gap-[11px]"
          role="radiogroup"
          aria-label="Forma de organização dos materiais"
        >
          {opcoesOrganizacao.map((opcao) => {
            const Icone = opcao.icone;
            const selecionada = valor === opcao.id;

            return (
              <button
                key={opcao.id}
                className={`relative grid w-full grid-cols-[43px_1fr_22px] items-start gap-[15px] rounded-2xl border p-4 text-left text-texto-principal transition-[border-color,background-color,transform] duration-150 hover:border-azul-geral hover:bg-fundo-botao active:scale-[0.985] ${selecionada ? "border-azul-geral bg-azul-transparente shadow-[0_0_0_1px_var(--color-azul-foco)]" : "border-borda-principal bg-fundo-input"}`}
                type="button"
                role="radio"
                aria-checked={selecionada}
                onClick={() => onAlterar(opcao.id)}
              >
                {opcao.recomendado && (
                  <span className="absolute -top-[9px] right-[15px] rounded-full bg-azul-geral px-2 py-[3px] text-[8px] font-bold uppercase tracking-[0.6px] text-texto-principal">
                    Recomendado
                  </span>
                )}

                <span className="grid size-[43px] place-items-center rounded-[12px] bg-azul-transparente text-azul-geral">
                  <Icone size={22} />
                </span>

                <span className="flex min-w-0 flex-col gap-[5px] p-[10px]">
                  <strong className="text-[13px]">{opcao.titulo}</strong>
                  <small className="text-[10px] leading-[1.5] text-texto-secundario">{opcao.descricao}</small>

                  {opcao.beneficios && (
                    <span className="mt-[5px] flex flex-col gap-[5px]">
                      {opcao.beneficios.map((beneficio) => (
                        <span className="flex items-center gap-1.5 text-[9px] text-texto-label" key={beneficio}>
                          <Check className="text-azul-geral" size={12} />
                          {beneficio}
                        </span>
                      ))}
                    </span>
                  )}
                </span>

                <span className={`my-[10px] -mx-[5px] grid size-5 place-items-center rounded-full border text-texto-principal ${selecionada ? "border-azul-geral bg-azul-geral" : "border-texto-suave"}`}>
                  {selecionada && <Check size={13} />}
                </span>
              </button>
            );
          })}
        </div>

        <button
          className={`${configuracao.primario} mt-[23px] disabled:cursor-not-allowed disabled:opacity-[0.42] disabled:hover:bg-azul-escuro disabled:hover:shadow-none`}
          type="button"
          onClick={onFinalizar}
          disabled={!valor}
        >
          Ativar Modo Aula
          <ArrowRight size={19} />
        </button>

        <p className="mt-3 text-center text-[9px] text-texto-suave">
          Seus arquivos só serão acessados com a sua permissão.
        </p>
      </main>
    </section>
  );
}

export default Organizar;

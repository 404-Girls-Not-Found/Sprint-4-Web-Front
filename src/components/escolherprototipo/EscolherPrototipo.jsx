import {
  ArrowRight,
  Camera,
  CheckCircle2,
  GraduationCap,
  LayoutGrid,
  LogIn,
  LogOut,
  Sparkles,
} from "lucide-react";

const cartao = "flex min-h-[430px] flex-col items-start rounded-[22px] border border-[#304142] bg-[linear-gradient(145deg,#111b1c,#0a1112)] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.24)] max-[650px]:min-h-[410px]";
const selo = "rounded-[17px] bg-[#50d0e7] px-[10px] py-[5px] text-[8px] font-extrabold uppercase tracking-[0.8px] text-[#071011]";
const descricao = "mt-[10px] text-[11px] leading-[1.65] text-texto-secundario";
const botao = "mt-auto flex min-h-[47px] w-full items-center justify-center gap-2 rounded-[12px] bg-[#4fd0e7] text-[11px] font-extrabold text-[#061011] transition duration-150 hover:-translate-y-px hover:bg-[#77e6f8]";

function EscolherPrototipo({
  autenticado,
  onEntrar,
  onSair,
  onAbrirCamera,
  onAbrirAplicativo,
}) {
  return (
    <main className="grid min-h-screen place-items-center bg-[#071011] bg-[radial-gradient(circle_at_50%_0,rgba(19,143,165,0.24),transparent_38%)] px-5 py-[42px] text-texto-principal max-[650px]:place-items-start_center max-[650px]:px-[17px] max-[650px]:pt-[25px] max-[650px]:pb-[35px]">
      <section className="w-[min(100%,860px)]">
        <header className="flex items-center gap-[11px]">
          <span className="grid size-11 place-items-center rounded-[13px] border border-[rgba(58,203,230,0.38)] bg-[rgba(19,143,165,0.16)] text-[#8cecff]">
            <GraduationCap size={22} />
          </span>
          <div className="flex flex-col gap-0.5">
            <strong className="text-[15px]">Modo Aula</strong>
            <small className="text-[10px] text-texto-secundario">Experiência Interativa</small>
          </div>

          <button
            className="ml-auto flex min-h-9 items-center gap-2 rounded-[10px] border border-[#304142] bg-[#111b1c] px-3 text-[10px] font-bold text-[#c5cecf] transition hover:border-[#4fd0e7] hover:text-white"
            type="button"
            onClick={autenticado ? onSair : onEntrar}
          >
            {autenticado ? <LogOut size={15} /> : <LogIn size={15} />}
            {autenticado ? "Sair" : "Entrar"}
          </button>
        </header>

        <div className="mt-[50px] text-center max-[650px]:mt-[38px] max-[650px]:text-left">
          <p className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#55d5ec]">Escolha uma experiência</p>
          <h1 className="mt-2 text-[clamp(30px,6vw,44px)] leading-[1.1]">Qual deseja abrir?</h1>
          <span className="mx-auto mt-[14px] block max-w-[500px] text-[13px] leading-[1.65] text-texto-secundario max-[650px]:ml-0">
            Os dois protótipos de completam. Você pode conhecê-los na ordem que preferir.
          </span>
        </div>

        <aside className="mx-auto mt-[25px] flex max-w-[650px] items-start gap-[10px] rounded-[13px] border border-[rgba(19,143,165,0.38)] bg-[rgba(19,143,165,0.1)] px-4 py-[13px] text-[#c6f7ff]">
          <CheckCircle2 className="shrink-0" size={19} />
          <p className="text-[11px] leading-[1.55]"><strong>Ordem recomendada:</strong> comece pelo Modo Aula na câmera e depois veja como o aplicativo organiza o conteúdo capturado</p>
        </aside>

        <div className="mt-[27px] grid grid-cols-2 gap-[17px] max-[650px]:grid-cols-1">
          <article className={`${cartao} border-[rgba(35,188,216,0.62)] shadow-[0_18px_50px_rgba(19,143,165,0.12)]`}>
            <div className="flex w-full items-center justify-between">
              <span className="grid size-[25px] place-items-center rounded-lg bg-[rgba(19,143,165,0.17)] text-[10px] font-bold text-[#7be7fa]">1</span>
              <span className={selo}>Principal</span>
            </div>
            <span className="mt-6 mb-[18px] grid size-[57px] place-items-center rounded-[17px] bg-[rgba(19,143,165,0.16)] text-[#66def3]"><Camera size={28} /></span>
            <p className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#55d5ec]">Comece por aqui</p>
            <h2 className="mt-[7px] text-[21px]">Modo Aula na câmera</h2>
            <span className={descricao}>Configure o cronograma e experimente a câmera que identifica a matéria para capturar fotos, documentos e áudios de forma rápida durante a aula</span>
            <ul className="my-[18px] mb-[22px] flex list-none flex-col gap-[7px] p-0 text-[10px] text-[#c5cecf] [&>li]:before:mr-2 [&>li]:before:text-[#4ed3ea] [&>li]:before:content-['-']">
              <li>ExperiÇencia principal do projeto</li>
              <li>Configuração por dia e horário</li>
              <li>Captura no contexto da aula</li>
            </ul>
            <button className={botao} type="button" onClick={onAbrirCamera}>Abrir modo câmera <ArrowRight size={18} /></button>
          </article>

          <article className={cartao}>
            <div className="flex w-full items-center justify-between">
              <span className="grid size-[25px] place-items-center rounded-lg bg-[rgba(19,143,165,0.17)] text-[10px] font-bold text-[#7be7fa]">2</span>
              <span className={`${selo} bg-[#263334] text-[#b9c4c5]`}>Extra</span>
            </div>
            <span className="my-5 grid size-[54px] place-items-center rounded-[17px] bg-[#202b2c] p-[13px] text-[#d6dede]"><LayoutGrid size={28} /></span>
            <p className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#55d5ec]">Experiência complementar</p>
            <h2 className="mt-[7px] text-[21px]">Aplicativo de estudos</h2>
            <span className={descricao}>Veja fotos, audio e documentos organizados automaticamente por matéria, com transcrição e resumos inteligentes.</span>
            <div className="my-[18px] mb-[22px] flex flex-wrap gap-[7px] [&>span]:flex [&>span]:items-center [&>span]:gap-[5px] [&>span]:rounded-lg [&>span]:bg-[#1b2526] [&>span]:px-2 [&>span]:py-1.5 [&>span]:text-[9px] [&>span]:text-[#b9c5c6]">
              <span><Sparkles size={14} />Organização</span>
              <span><Sparkles size={14} />Trascrição</span>
              <span><Sparkles size={14} />Resumos</span>
            </div>
            <button className={`${botao} border border-[#405152] bg-[#1a2526] text-[#eafcfe] hover:border-[#4fd0e7] hover:bg-[#213233]`} type="button" onClick={onAbrirAplicativo}>
              Abrir aplicativo <ArrowRight size={18} />
            </button>
          </article>
        </div>

        <footer className="mt-6 text-center text-[15px] text-[#5e6d6e]">Protótipos demonstrativos desenvolvidos em React</footer>
      </section>
    </main>
  );
}

export default EscolherPrototipo;

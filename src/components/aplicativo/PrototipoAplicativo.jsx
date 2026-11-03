import { useMemo, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  Camera,
  ChevronRight,
  Clock3,
  FileImage,
  FolderOpen,
  GraduationCap,
  Headphones,
  Home,
  LogOut,
  RefreshCw,
  Search,
  Sparkles,
} from "lucide-react";

const CORES = ["azul", "roxo", "laranja", "verde", "rosa"];
const CORES_MATERIA = {
  azul: "bg-[#09383e] text-[#49e1f1]",
  roxo: "bg-[#28203f] text-[#b88cff]",
  laranja: "bg-[#3b2b17] text-[#ffc05c]",
  verde: "bg-[#17392b] text-[#65dda4]",
  rosa: "bg-[#40212c] text-[#ff8fb6]",
};

const pagina = "grid min-h-screen place-items-center bg-[#182424] bg-[radial-gradient(circle_at_top,#334646,transparent_45%)] text-[#f5f8f8]";
const tela = "relative min-h-screen w-[min(100%,510px)] bg-[#071010]";
const topo = "sticky top-0 z-10 grid min-h-20 items-center gap-[14px] border-b border-[#203030] bg-[rgba(7,16,16,0.96)] px-4 py-3 backdrop-blur-[12px] max-[420px]:gap-[9px]";
const botaoIcone = "grid size-12 place-items-center rounded-2xl border border-[#304242] bg-[#101c1c]";
const marca = "flex min-w-0 items-center gap-[11px] max-[420px]:gap-2 [&>div]:grid [&>div]:min-w-0 [&>div]:gap-[3px] [&_strong]:overflow-hidden [&_strong]:text-ellipsis [&_strong]:whitespace-nowrap [&_strong]:text-[17px] [&_small]:overflow-hidden [&_small]:text-ellipsis [&_small]:whitespace-nowrap [&_small]:text-[9px] [&_small]:uppercase [&_small]:tracking-[1px] [&_small]:text-[#7f9494]";
const conteudo = "px-4 pt-8 pb-[104px]";
const saudacao = "text-[12px] font-bold text-[#3fe0f5]";
const tituloPagina = "my-6 mt-[9px] max-w-[430px] text-[clamp(27px,8vw,34px)] leading-[1.08]";
const siglaBase = "grid shrink-0 place-items-center rounded-[17px] text-[13px] font-bold";
const botaoPrimario = "flex items-center gap-[7px] rounded-[13px] border border-[#13a8bc] bg-[#0a3940] px-[13px] py-[11px] text-[11px] font-bold text-white";
const tituloSecao = "flex items-center gap-[9px] [&>svg]:text-[#3ddff3] [&>h2]:text-[17px]";

const sigla = (nome) => nome.trim().split(/\s+/).map((p) => p[0]).join("").slice(0, 2).toUpperCase();

function PrototipoAplicativo({
  curso,
  aulas,
  dicaEstudo,
  carregandoDica,
  erroDica,
  onNovaDica,
  onSair,
  onVoltar,
  onAbrirCamera,
}) {
  const [materiaAberta, setMateriaAberta] = useState(null);
  const [buscaAberta, setBuscaAberta] = useState(false);
  const [busca, setBusca] = useState("");

  const materias = useMemo(() => {
    const nomes = [];
    aulas.forEach(({ materia }) => {
      const nome = materia.trim();
      if (nome && !nomes.includes(nome)) nomes.push(nome);
    });

    return nomes.map((nome, indice) => ({
      nome,
      sigla: sigla(nome),
      cor: CORES[indice % CORES.length],
      horarios: aulas.filter((aula) => aula.materia.trim() === nome),
    }));
  }, [aulas]);

  const materiasFiltradas = materias.filter(({ nome }) => nome.toLowerCase().includes(busca.toLowerCase()));
  const proximaAula = aulas.find((aula) => aula.materia.trim() && aula.dia && aula.horarioInicio && aula.horarioFim);

  if (materiaAberta) {
    return (
      <main className={pagina}>
        <section className={tela}>
          <header className={`${topo} grid-cols-[48px_1fr]`}>
            <button className={botaoIcone} type="button" onClick={() => setMateriaAberta(null)} aria-label="Voltar para matérias"><ArrowLeft size={23} /></button>
            <div className={marca}>
              <span className={`${siglaBase} size-14 ${CORES_MATERIA[materiaAberta.cor]}`}>{materiaAberta.sigla}</span>
              <div><strong>{materiaAberta.nome}</strong><small>{curso || "Modo Aula"}</small></div>
            </div>
          </header>

          <div className={`${conteudo} min-h-[calc(100vh-80px)]`}>
            <p className={saudacao}>CONTEÚDOS DA MATÉRIA</p>
            <h1 className={tituloPagina}>{materiaAberta.nome}</h1>

            <section className="mb-[25px] rounded-[18px] border border-[#293c3c] bg-[#0e1b1b] p-[19px]">
              <div className={`${tituloSecao} mb-[14px]`}><CalendarDays size={20} /><h2>Horários configurados</h2></div>
              {materiaAberta.horarios.map((aula) => (
                <article className="flex items-center gap-3 border-t border-[#233333] py-[13px]" key={aula.id}>
                  <Clock3 className="text-[#43dff3]" size={18} />
                  <div className="grid gap-[3px]"><strong className="text-[12px]">{aula.dia}</strong><span className="text-[10px] text-[#819696]">{aula.horarioInicio} — {aula.horarioFim}</span></div>
                </article>
              ))}
            </section>

            <Totais />
            <section className="grid justify-items-center gap-[10px] rounded-[18px] border border-dashed border-[#314545] px-[22px] py-[30px] text-center text-[#829696]">
              <FolderOpen size={38} />
              <h2 className="text-[15px] text-white">Esta pasta ainda está vazia</h2>
              <p className="max-w-[330px] text-[11px] leading-[1.55]">As fotos, os documentos e os áudios capturados no Modo Aula aparecerão aqui.</p>
              <button className={botaoPrimario} type="button" onClick={onAbrirCamera}><Camera size={18} /> Abrir câmera</button>
            </section>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={pagina}>
      <section className={tela}>
        <header className={`${topo} grid-cols-[48px_1fr_auto]`}>
          <button className={botaoIcone} type="button" onClick={onVoltar} aria-label="Voltar"><ArrowLeft size={23} /></button>
          <div className={marca}>
            <span className="grid size-[43px] shrink-0 place-items-center rounded-[13px] bg-[#062a30] text-[#43dff3] max-[420px]:hidden"><GraduationCap size={22} /></span>
            <div><strong>Modo Aula</strong><small>{curso || "APLICATIVO DE ESTUDOS"}</small></div>
          </div>
          <div className="flex gap-2">
            <button className={botaoIcone} type="button" onClick={() => setBuscaAberta(!buscaAberta)} aria-label="Pesquisar matéria"><Search size={23} /></button>
            <button className={botaoIcone} type="button" onClick={onSair} aria-label="Sair do aplicativo"><LogOut size={21} /></button>
          </div>
        </header>

        <div className={conteudo}>
          {buscaAberta && (
            <label className="mb-[22px] flex h-12 items-center gap-[10px] rounded-[14px] border border-[#24515a] bg-[#0b1a1b] px-[14px] text-[#5ddced]">
              <Search size={18} />
              <input className="w-full border-0 bg-transparent text-white outline-0" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Buscar matéria" autoFocus />
            </label>
          )}

          <p className={saudacao}>Olá! Seus estudos estão em dia.</p>
          <h1 className={tituloPagina}>Materiais organizados para você</h1>
          <aside className="flex gap-[14px] rounded-[17px] border border-[#0c6472] bg-[#082124] p-[17px] text-[#47ddef]">
            <Sparkles className="shrink-0" size={24} />
            <div className="grid gap-[7px]"><strong className="text-[13px] text-[#65e5f3]">Protótipo complementar</strong><p className="text-[11px] leading-[1.55] text-[#9cc5c8]">Os conteúdos capturados no Modo Aula serão organizados automaticamente por matéria.</p></div>
          </aside>

          <section className="mt-4 rounded-[17px] border border-[#304242] bg-[#0e1919] p-[17px]">
            <header className="flex items-center justify-between gap-3">
              <div>
                <span className="text-[8px] font-extrabold uppercase tracking-[1px] text-[#43dff3]">API mockada</span>
                <h2 className="mt-1 text-[14px]">Dica rápida de estudo</h2>
              </div>
              <button
                className="grid size-9 shrink-0 place-items-center rounded-[10px] border border-[#304242] bg-[#101c1c] text-[#43dff3] hover:border-[#43dff3]"
                type="button"
                onClick={onNovaDica}
                aria-label="Carregar próxima dica"
                disabled={carregandoDica || Boolean(erroDica)}
              >
                <RefreshCw size={16} />
              </button>
            </header>

            {carregandoDica && <p className="mt-3 text-[11px] text-[#829696]">Carregando dica...</p>}
            {erroDica && <p className="mt-3 text-[11px] text-red-300">{erroDica}</p>}
            {dicaEstudo && (
              <div className="mt-3">
                <strong className="text-[12px] text-[#65e5f3]">{dicaEstudo.titulo}</strong>
                <p className="mt-1 text-[11px] leading-[1.55] text-[#9cc5c8]">{dicaEstudo.texto}</p>
                <small className="mt-2 block text-[9px] uppercase tracking-[0.8px] text-[#718787]">{dicaEstudo.categoria}</small>
              </div>
            )}
          </section>

          {proximaAula && (
            <article className="mt-6 rounded-[22px] border border-[#356468] bg-[#0d2020] p-5">
              <header className="flex justify-between text-[10px] font-bold tracking-[1.5px] text-[#b7cbcb]"><span>PRÓXIMA AULA</span><small className="text-[10px] tracking-normal text-[#43dff3]">conforme sua agenda</small></header>
              <div className="mt-[18px] grid grid-cols-[55px_1fr_auto] items-center gap-[14px] max-[420px]:grid-cols-[50px_1fr]">
                <span className={`${siglaBase} size-[55px] bg-[#0a3a40] text-[#52e4f4] max-[420px]:size-[50px]`}>{sigla(proximaAula.materia)}</span>
                <div className="grid min-w-0 gap-[5px] [&>strong]:overflow-hidden [&>strong]:text-ellipsis [&>strong]:whitespace-nowrap [&>strong]:text-[14px] [&>span]:flex [&>span]:items-center [&>span]:gap-1.5 [&>span]:text-[10px] [&>span]:text-[#8da4a4]">
                  <strong>{proximaAula.materia}</strong>
                  <span><CalendarDays size={14} />{proximaAula.dia}</span>
                  <span><Clock3 size={14} />{proximaAula.horarioInicio} — {proximaAula.horarioFim}</span>
                </div>
                <button className={`${botaoPrimario} max-[420px]:col-span-full max-[420px]:justify-center`} type="button" onClick={onAbrirCamera}><Camera size={17} /> Abrir câmera</button>
              </div>
            </article>
          )}

          <Totais />
          <section>
            <header className={tituloSecao}><BookOpen size={22} /><h2>Suas matérias</h2><small className="ml-auto text-[9px] text-[#718787]">Organizadas pela agenda</small></header>
            <div className="mt-[14px] grid gap-[11px]">
              {materiasFiltradas.map((materia) => (
                <button className="grid w-full grid-cols-[56px_1fr_auto] items-center gap-[14px] rounded-[18px] border border-[#293a3a] bg-[#0e1919] p-[15px] text-left [&>svg]:text-[#607373]" type="button" key={materia.nome} onClick={() => setMateriaAberta(materia)}>
                  <span className={`${siglaBase} size-14 ${CORES_MATERIA[materia.cor]}`}>{materia.sigla}</span>
                  <span className="grid min-w-0 gap-[5px] [&>strong]:overflow-hidden [&>strong]:text-ellipsis [&>strong]:whitespace-nowrap [&>strong]:text-[14px] [&>small]:overflow-hidden [&>small]:text-ellipsis [&>small]:whitespace-nowrap [&>small]:text-[9px] [&>small]:text-[#799090]">
                    <strong>{materia.nome}</strong>
                    {materia.horarios.map((aula) => <small key={aula.id}>{aula.dia} · {aula.horarioInicio} — {aula.horarioFim}</small>)}
                    <span className="flex items-center gap-1.5 text-[9px] text-[#afc0c0]"><FileImage size={14} /> 0 fotos <Headphones className="ml-1.5" size={14} /> 0 áudios</span>
                  </span>
                  <ChevronRight size={21} />
                </button>
              ))}

              {materias.length === 0 && (
                <div className="grid justify-items-center gap-[10px] rounded-[18px] border border-dashed border-[#314545] px-[22px] py-[30px] text-center text-[#829696]">
                  <BookOpen size={32} />
                  <strong className="text-[15px] text-white">Nenhuma matéria configurada</strong>
                  <p className="max-w-[330px] text-[11px] leading-[1.55]">Configure o Modo Aula na câmera para suas matérias aparecerem aqui.</p>
                  <button className={botaoPrimario} type="button" onClick={onAbrirCamera}>Configurar agora</button>
                </div>
              )}
              {materias.length > 0 && materiasFiltradas.length === 0 && <p className="p-6 text-center text-[#829696]">Nenhuma matéria encontrada.</p>}
            </div>
          </section>
        </div>

        <nav className="fixed bottom-0 left-1/2 z-10 grid h-[76px] w-[min(100%,510px)] -translate-x-1/2 grid-cols-3 border-t border-[#243434] bg-[rgba(7,16,16,0.97)] backdrop-blur-[12px]" aria-label="Navegação do aplicativo">
          <button className="grid place-content-center justify-items-center gap-1 bg-transparent text-[#3ce0f4]" type="button"><Home size={21} /><span className="text-[9px]">Início</span></button>
          <button className="grid place-content-center justify-items-center gap-1 bg-transparent text-[#657777]" type="button"><BookOpen size={21} /><span className="text-[9px]">Materiais</span></button>
          <button className="grid place-content-center justify-items-center gap-1 bg-transparent text-[#657777]" type="button"><Sparkles size={21} /><span className="text-[9px]">Resumos</span></button>
        </nav>
      </section>
    </main>
  );
}

function Totais() {
  const artigo = "grid min-h-[74px] grid-cols-[auto_1fr] items-center gap-x-[10px] rounded-[15px] border border-[#273838] bg-[#0e1818] p-[13px] max-[420px]:gap-x-1.5 max-[420px]:p-[10px] [&>svg]:row-span-2 [&>svg]:text-[#3bdcf0] [&>strong]:text-[16px] [&>span]:text-[9px] [&>span]:text-[#789292]";

  return (
    <div className="mt-4 mb-[30px] grid grid-cols-3 gap-[10px]">
      <article className={artigo}><FileImage size={22} /><strong>0</strong><span>Fotos</span></article>
      <article className={artigo}><Headphones size={22} /><strong>0</strong><span>Áudios</span></article>
      <article className={artigo}><Sparkles size={22} /><strong>0</strong><span>Resumos</span></article>
    </div>
  );
}

export default PrototipoAplicativo;

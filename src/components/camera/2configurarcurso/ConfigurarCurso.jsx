import {
    BookOpen,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { configuracao } from "../../../tailwindStyles";

function ConfigurarCurso ({
    aberto,
    curso,
    onAlterarCurso,
    onVoltar,
    onContinuar,
}) {
    if (!aberto) {
        return null;
    }

    function enviarFormulario (evento) {
        evento.preventDefault();

        if (!curso.trim()) {
            alert("Digite o nome do seu curso.");

            return;
        }

        onContinuar();
    }

    return (
        <section className={`${configuracao.tela} z-30 flex flex-col overflow-hidden`}>
            <header className={configuracao.topoFixo}>

                <button className={configuracao.voltar} type="button" onClick={onVoltar} aria-label="Voltar"><ChevronLeft size={23}/></button>

                <div className={configuracao.titulo}>
                    <span className={configuracao.rotuloTopo}>Configuração</span>
                    <strong className={configuracao.nomeTopo}>Modo Aula</strong>
                </div>

                <span className={configuracao.etapa}>1 de 4</span>
            </header>

            <div className={configuracao.progresso}>    <span className={`${configuracao.barra} w-1/4`}/>
            </div>

            <main className="mx-auto w-full max-w-[380px] flex-1 px-6 pt-[58px] pb-[30px]">
                <span className={`${configuracao.icone} mb-[25px] size-[62px] rounded-[19px]`}><BookOpen size={30}/></span>

                <p className={`${configuracao.categoria} mb-[9px]`}>Seu curso</p>

                <h1 className="max-w-[310px] text-[27px] leading-[1.18] text-texto-principal">Qual curso você está fazendo?</h1>

                <p className={`${configuracao.descricao} max-w-[330px] mt-[13px]`}>Essa informação será usada para organizar suas matérias, fotos, documentos e gravações.</p>

                <form className="mt-[42px]" onSubmit={enviarFormulario}>

                    <label className="mb-[9px] block text-[11px] font-semibold text-texto-label" htmlFor="nome_curso">Nome do curso</label>

                    <input className="h-[52px] w-full rounded-[13px] border border-borda-principal bg-fundo-input px-[15px] text-[13px] text-texto-principal outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-texto-placeholder focus:border-azul-geral focus:shadow-[0_0_0_3px_var(--color-azul-foco)]" id="nome_curso" type="text" value={curso} onChange={(evento) => onAlterarCurso(evento.target.value)}placeholder="Ex: Engenharia de Software" autoComplete="Off" autoFocus/>

                    <small className="m-2 block text-[9px] text-texto-suave">Você poderá alterar essa infomração depois</small>

                    <button className={`${configuracao.primario} mt-[35px]`} type="submit">Continuar <ChevronRight size={20}/></button>
                </form>
            </main>
        </section>
    );
}

export default ConfigurarCurso;

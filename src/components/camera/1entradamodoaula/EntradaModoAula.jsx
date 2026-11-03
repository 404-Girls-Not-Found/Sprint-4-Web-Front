import {
    GraduationCap,
    Lock
} from "lucide-react";

function EntradaModoAula({
    aberto,
    onFechar,
    onConfigurar,
}) {
    if(!aberto) {
        return null;
    }

    return (
        <div className="absolute inset-0 z-20 grid place-items-center p-[22px]" role="dialog" aria-modal="true" aria-labelledby="titulo-modo-aula_fundo" >
            <div className="absolute inset-0 bg-black/[0.72] backdrop-blur-[1px]" onClick={onFechar}></div>

            <section className="relative z-[1] w-[min(100%,320px)] overflow-hidden rounded-[18px] border border-[#202828] bg-[#080c0c] shadow-[0_25px_60px_rgba(0,0,0,0.7)] animate-[abrir-modal_220ms_ease-out]">
                <header className="bg-[#00647b] bg-[radial-gradient(circle_at_top,rgba(0,162,190,0.32),transparent_65%)] px-[22px] pt-[25px] pb-[22px] text-center text-white">
                    <span className="mx-auto mb-[13px] grid size-[62px] place-items-center rounded-full border-2 border-[#00191f] text-[#00191f]"><GraduationCap size={31}/></span>

                    <h2 className="mb-3 text-[16px]" id="titulo-modo-aula">Modo Aula</h2>

                    <p className="text-[11px] leading-[1.55] text-[#a9d8e1]">Sua câmera pode mudar automaticamente para uma interface escolhar simplificada nos horários das aulas</p>
                </header>

                <div className="px-[17px] pt-[18px] pb-[17px]">
                    <div className="flex items-start gap-[9px] rounded-[9px] border border-[#2b3030] bg-[#171b1b] p-3 text-[#c0c6c6]">
                        <Lock className="shrink-0 text-[#d1ae00]" size={17}/>
                    
                        <p className="text-[9px] leading-[1.5]">O Modo Aula permite organização automática. Áudio e fotos só será gravados quando você autorizar.</p>
                    </div>

                    <h3 className="mt-[19px] mb-[15px] text-center text-[12px]">Você gostaria de configurar o Modo Aula?</h3>

                    <div className="grid grid-cols-2 gap-[11px] [&>button]:min-h-[39px] [&>button]:rounded-lg [&>button]:text-[11px] [&>button]:font-bold [&>button]:transition [&>button]:duration-150 [&>button:active]:scale-[0.97]">
                        <button className="border border-[#6b7373] bg-[rgba(42,44,44,0.23)] text-white hover:bg-[#1c2222]" type="button" onClick={onFechar}>Agora não</button>

                        <button className="bg-[#00647b] text-white hover:bg-[#007e98]" type="button" onClick={onConfigurar}>Configurar</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EntradaModoAula;

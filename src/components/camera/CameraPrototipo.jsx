import {
  ChevronUp,
  EyeOff,
  Focus,
  Images,
  Menu,
  MicOff,
  RefreshCw,
  Settings,
  ZapOff,
} from "lucide-react";

import { camera } from "../../tailwindStyles";

const modosCamera = ["Noite", "Retrato", "Foto", "Vídeo", "Microfilme"];

function CameraPrototipo({
  children,
  videoRef,
  modoAulaAtivo = false,
  onAbrirModoAula,
  onVoltar,
}) {
  const interfaceOculta = modoAulaAtivo ? " invisible pointer-events-none" : "";

  return (
    <main className={camera.pagina}>
      <section className={camera.corpo}>
        <header className={`${camera.topo}${interfaceOculta}`}>
          <button className={camera.botaoIcone} type="button" aria-label="Foco"><Focus size={19} /></button>
          <button className={camera.botaoIcone} type="button" aria-label="Flash desligado"><ZapOff size={19} /></button>
          <button className={camera.botaoIcone} type="button" aria-label="Efeitos desligados"><EyeOff size={19} /></button>
          <strong className="text-[13px] tracking-[-0.5px] text-[#f3c900]">ZEISS</strong>
          <button className={camera.botaoIcone} type="button" aria-label="Microfone desligado"><MicOff size={19} /></button>
          <button className={camera.botaoIcone} type="button" onClick={onVoltar} aria-label="Trocar protótipo"><Settings size={19} /></button>
        </header>

        <div className={camera.visualizacao}>
          <video ref={videoRef} className="absolute inset-0 h-full w-full bg-black object-cover" autoPlay playsInline muted />

          {!modoAulaAtivo && (
            <>
              <button
                className="absolute top-[18px] right-[14px] z-[2] rounded-full border border-white/25 bg-black/65 px-[14px] py-[9px] text-[12px] font-semibold backdrop-blur-[8px] hover:bg-black/85"
                type="button"
                onClick={onAbrirModoAula}
              >
                Modo Aula
              </button>

              <div className="absolute bottom-[15px] left-1/2 z-[2] flex -translate-x-1/2 items-center gap-[17px] text-[11px] [&>span]:grid [&>span]:size-[29px] [&>span]:place-items-center [&>span]:rounded-full [&>span]:bg-black/45">
                <span>0,5x</span>
                <span className="!bg-black/85 text-[#f3c900]">1x</span>
                <span>2x</span>
              </div>
            </>
          )}
        </div>

        <section className={`${camera.controles}${interfaceOculta}`}>
          <nav className={camera.modos} aria-label="Modos da câmera">
            {modosCamera.map((modo) => (
              <button key={modo} className={`${camera.modo}${modo === "Foto" ? " !text-[#f3c900]" : ""}`} type="button">
                {modo}
              </button>
            ))}
          </nav>

          <div className={camera.acoes}>
            <button className={camera.botaoRedondo} type="button" aria-label="Abrir galeria"><Images size={23} /></button>
            <button className={camera.capturar} type="button" aria-label="Tirar foto">
              <span className="block h-full w-full rounded-full border-[3px] border-[#e3bd00] bg-black" />
            </button>
            <button className={camera.botaoRedondo} type="button" aria-label="Inverter câmera"><RefreshCw size={24} /></button>
          </div>

          <button className={camera.expandir} type="button" aria-label="Expandir controles"><ChevronUp size={25} /></button>
          <footer className={camera.navegacao}>
            <Menu size={18} />
            <span className="size-[14px] rounded-full border-2 border-[#777]" />
            <ChevronUp className="-rotate-90" size={20} />
          </footer>
        </section>

        {children}
      </section>
    </main>
  );
}

export default CameraPrototipo;

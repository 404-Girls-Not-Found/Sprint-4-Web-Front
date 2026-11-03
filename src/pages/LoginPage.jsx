import { useState } from "react";
import { ArrowLeft, GraduationCap, LogIn, ShieldCheck } from "lucide-react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const { autenticado, entrar } = useAuth();
  const localizacao = useLocation();
  const navegar = useNavigate();

  const destino = localizacao.state?.origem?.pathname || "/aplicativo";

  if (autenticado) {
    return <Navigate to={destino} replace />;
  }

  function enviarFormulario(evento) {
    evento.preventDefault();
    const resultado = entrar(email.trim(), senha);

    if (!resultado.sucesso) {
      setMensagem(resultado.mensagem);
      return;
    }

    navegar(destino, { replace: true });
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#071011] bg-[radial-gradient(circle_at_50%_0,rgba(19,143,165,0.28),transparent_42%)] p-5 text-white">
      <section className="w-[min(100%,420px)] rounded-[24px] border border-[#294344] bg-[#0b1415] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.38)] sm:p-8">
        <button
          className="mb-7 flex items-center gap-2 text-[11px] font-bold text-texto-secundario hover:text-white"
          type="button"
          onClick={() => navegar("/")}
        >
          <ArrowLeft size={17} /> Voltar
        </button>

        <span className="mb-5 grid size-14 place-items-center rounded-[17px] border border-[#2ebbd0]/40 bg-[#138fa5]/15 text-[#66def3]">
          <GraduationCap size={27} />
        </span>

        <p className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#55d5ec]">Área protegida</p>
        <h1 className="mt-2 text-[30px] leading-[1.15]">Acesse o aplicativo</h1>
        <p className="mt-3 text-[12px] leading-[1.6] text-texto-secundario">
          Entre com o usuário de demonstração para acessar o protótipo do aplicativo de estudos.
        </p>

        <form className="mt-8 grid gap-4" onSubmit={enviarFormulario}>
          <label className="grid gap-2 text-[11px] font-semibold text-texto-label">
            E-mail
            <input
              className="h-[50px] rounded-[13px] border border-borda-principal bg-fundo-input px-4 text-[13px] text-white outline-none placeholder:text-texto-placeholder focus:border-azul-geral focus:shadow-[0_0_0_3px_var(--color-azul-foco)]"
              type="email"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
              placeholder="email@sprint.com.br"
              autoComplete="username"
              required
            />
          </label>

          <label className="grid gap-2 text-[11px] font-semibold text-texto-label">
            Senha
            <input
              className="h-[50px] rounded-[13px] border border-borda-principal bg-fundo-input px-4 text-[13px] text-white outline-none placeholder:text-texto-placeholder focus:border-azul-geral focus:shadow-[0_0_0_3px_var(--color-azul-foco)]"
              type="password"
              value={senha}
              onChange={(evento) => setSenha(evento.target.value)}
              placeholder="Digite a senha de teste"
              autoComplete="current-password"
              required
            />
          </label>

          {mensagem && (
            <p className="rounded-[10px] border border-red-400/30 bg-red-400/10 p-3 text-[11px] text-red-200" role="alert">
              {mensagem}
            </p>
          )}

          <button className="mt-2 flex min-h-[50px] items-center justify-center gap-2 rounded-[13px] border border-azul-geral bg-azul-escuro text-[12px] font-bold transition hover:bg-azul-geral" type="submit">
            <LogIn size={18} /> Entrar
          </button>
        </form>

        <aside className="mt-5 flex gap-3 rounded-[13px] border border-[#294344] bg-[#101c1c] p-4 text-[10px] leading-[1.55] text-texto-secundario">
          <ShieldCheck className="shrink-0 text-[#55d5ec]" size={19} />
          <p>Autenticação demonstrativa armazenada somente no navegador. As credenciais estão documentadas no README.</p>
        </aside>
      </section>
    </main>
  );
}

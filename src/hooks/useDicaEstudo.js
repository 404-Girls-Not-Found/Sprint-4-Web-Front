import { useCallback, useEffect, useState } from "react";

export function useDicaEstudo() {
  const [dicas, setDicas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const controlador = new AbortController();

    async function carregarDicas() {
      try {
        const resposta = await fetch("/api/dicas-estudo.json", {
          signal: controlador.signal,
        });

        if (!resposta.ok) {
          throw new Error(`Falha ao carregar API mockada: ${resposta.status}`);
        }

        const dados = await resposta.json();
        setDicas(Array.isArray(dados.dicas) ? dados.dicas : []);
      } catch (erroDaApi) {
        if (erroDaApi.name !== "AbortError") {
          console.error(erroDaApi);
          setErro("Não foi possível carregar a dica de estudo.");
        }
      } finally {
        setCarregando(false);
      }
    }

    carregarDicas();
    return () => controlador.abort();
  }, []);

  const proximaDica = useCallback(() => {
    setIndice((indiceAtual) =>
      dicas.length > 0 ? (indiceAtual + 1) % dicas.length : 0
    );
  }, [dicas.length]);

  return {
    dica: dicas[indice] ?? null,
    carregando,
    erro,
    proximaDica,
  };
}

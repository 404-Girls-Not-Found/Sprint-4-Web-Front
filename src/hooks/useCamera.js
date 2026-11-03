import { useEffect, useRef } from "react";

export function useCamera() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    let ativo = true;
    const elementoVideo = videoRef.current;

    async function iniciarCamera() {
      if (!navigator.mediaDevices?.getUserMedia) return;

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: "environment" } },
          audio: true,
        });

        if (!ativo) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;
        if (elementoVideo) elementoVideo.srcObject = stream;
      } catch (erro) {
        console.error("Erro ao acessar câmera e microfone:", erro);
      }
    }

    iniciarCamera();

    return () => {
      ativo = false;
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;

      if (elementoVideo) elementoVideo.srcObject = null;
    };
  }, []);

  return videoRef;
}

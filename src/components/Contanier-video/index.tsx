import { useEffect, useRef } from "react";
import videoSource from "../../assets/video-virtus.mp4";
import "../../styles/containervideo.scss";

export default function ContainerVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (videoRef.current) {
          videoRef.current.play();
          videoRef.current.muted = false; // Ativa o áudio quando o vídeo está em foco
        }
      } else {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.muted = true; // Desliga o áudio quando o vídeo está fora de foco
        }
      }
    });
  };

  return (
    <div className="container-web container-video">
      <div className="video-container">
        <video ref={videoRef} controls loop playsInline>
          <source src={videoSource} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>
    </div>
  );
}

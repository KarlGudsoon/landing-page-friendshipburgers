import { useRef } from "react";

export default function Video1() {
  const videoRef = useRef(null);

  const goFullscreen = () => {
    videoRef.current.requestFullscreen();
    videoRef.current.play();
  };
  return (
    <main
      onClick={goFullscreen}
      className="w-screen h-screen overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        src="/video/tv1.mp4"
        muted
        loop
        controls={false}
        playsInline
        className="w-full h-full"
      />
    </main>
  );
}

export default function Video1() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-black">
      <video
        src="/video/tv2.mp4"
        muted
        loop
        controls={false}
        playsInline
        autoPlay
        preload="true"
        className="w-full h-full"
      />
    </main>
  );
}

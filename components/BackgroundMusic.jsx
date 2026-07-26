import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  return (
    <audio ref={audioRef} autoPlay loop>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  );
}
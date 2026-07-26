import { useRef, useState } from "react";
import { RiVolumeUpLine, RiVolumeMuteLine } from "react-icons/ri";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        title={playing ? "Pause Music" : "Play Music"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 animate-float"
      >
        {playing ? (
          <RiVolumeUpLine size={24} />
        ) : (
          <RiVolumeMuteLine size={24} />
        )}
      </button>
    </>
  );
}
import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { Music, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AudioPlayerProps {
  onPlayStateChange?: (isPlaying: boolean) => void;
}

export default function AudioPlayer({ onPlayStateChange }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTapToPlay, setShowTapToPlay] = useState(false);
  const soundRef = useRef<Howl | null>(null);
  const hasAttemptedAutoplay = useRef(false);

  useEffect(() => {
    const savedState = localStorage.getItem("clairequest-music");
    const shouldPlay = savedState === "playing";

    soundRef.current = new Howl({
      src: ["/audio/background.mp3"],
      loop: true,
      volume: 0.2,
      html5: true,
      onload: () => {
        if (shouldPlay && !hasAttemptedAutoplay.current) {
          hasAttemptedAutoplay.current = true;
          const playPromise = soundRef.current?.play();
          
          if (playPromise !== undefined) {
            setIsPlaying(true);
            onPlayStateChange?.(true);
          } else {
            setShowTapToPlay(true);
          }
        }
      },
      onloaderror: () => {
        console.log("Audio file not found - this is expected in development");
      }
    });

    return () => {
      soundRef.current?.unload();
    };
  }, [onPlayStateChange]);

  const toggleMusic = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.fade(0.2, 0, 1500);
      setTimeout(() => {
        soundRef.current?.pause();
      }, 1500);
      setIsPlaying(false);
      localStorage.setItem("clairequest-music", "paused");
      onPlayStateChange?.(false);
    } else {
      soundRef.current.play();
      soundRef.current.fade(0, 0.2, 2000);
      setIsPlaying(true);
      setShowTapToPlay(false);
      localStorage.setItem("clairequest-music", "playing");
      onPlayStateChange?.(true);
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMusic}
        className="relative"
        data-testid="button-music-toggle"
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5 text-primary" />
        ) : (
          <VolumeX className="h-5 w-5 text-muted-foreground" />
        )}
      </Button>

      {showTapToPlay && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={toggleMusic}
          data-testid="overlay-tap-to-play"
        >
          <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 p-8 text-center backdrop-blur-md">
            <Music className="mx-auto h-12 w-12 text-primary mb-4" />
            <p className="text-lg font-display font-semibold">Tap to Start Music 🎵</p>
          </div>
        </div>
      )}
    </>
  );
}

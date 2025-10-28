"use client";

import { useEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";
import { Music, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AudioPlayerProps {
  onPlayStateChange?: (isPlaying: boolean) => void;
}

// Dev nicety: keep the pool small so warnings are less likely in StrictMode.
Howler.html5PoolSize = 2;

export default function AudioPlayer({ onPlayStateChange }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTapToPlay, setShowTapToPlay] = useState(false);

  const soundRef = useRef<Howl | null>(null);
  const soundIdRef = useRef<number | null>(null);
  const initializedRef = useRef(false);
  const triedWebAudioFallbackRef = useRef(false);

  // Prefer a static, range-friendly host:
  const SRC = "./audio/background.mp3"; // place file in /public

  useEffect(() => {
    if (initializedRef.current) return; // StrictMode guard
    initializedRef.current = true;

    const saved =
      typeof window !== "undefined"
        ? localStorage.getItem("clairequest-music")
        : null;
    const shouldAutoplay = saved === "playing";

    let destroyed = false;

    const makeHowl = (opts?: Partial<HowlOptions>) => {
      // Default: try HTML5 audio first (great for streaming).
      const sound = new Howl({
        src: [SRC],
        loop: true,
        volume: 0.2,
        html5: true,
        preload: true,
        onload: () => {
          if (destroyed) return;
          if (shouldAutoplay) tryPlayWithFade();
        },
        onplay: () => {
          if (destroyed) return;
          setIsPlaying(true);
          setShowTapToPlay(false);
          onPlayStateChange?.(true);
        },
        onpause: () => {
          if (destroyed) return;
          setIsPlaying(false);
          onPlayStateChange?.(false);
        },
        onend: () => {
          if (destroyed) return;
          setIsPlaying(false);
          onPlayStateChange?.(false);
        },
        onplayerror: () => {
          // Autoplay was blocked — show overlay until user taps.
          if (destroyed) return;
          setShowTapToPlay(true);
        },
        onloaderror: (_id, err) => {
          // If the host can’t handle range requests (416), try WebAudio fallback once.
          console.warn("Audio load error:", err);
          if (!triedWebAudioFallbackRef.current) {
            triedWebAudioFallbackRef.current = true;
            sound.unload();
            soundRef.current = new Howl({
              src: [SRC],
              loop: true,
              volume: 0.2,
              html5: false, // WebAudio path avoids range requests
              preload: true,
              onload: () => {
                if (destroyed) return;
                if (shouldAutoplay) tryPlayWithFade();
              },
              onplay: () => {
                if (destroyed) return;
                setIsPlaying(true);
                setShowTapToPlay(false);
                onPlayStateChange?.(true);
              },
              onplayerror: () => setShowTapToPlay(true),
              onloaderror: (_id2, err2) =>
                console.warn("Fallback load error:", err2),
            });
          }
        },
        ...(opts || {}),
      });
      soundRef.current = sound;
    };

    const tryPlayWithFade = () => {
      const s = soundRef.current;
      if (!s) return;
      const id = s.play();
      soundIdRef.current = id;
      // start silent, then fade in
      s.volume(0, id);
      s.fade(0, 0.2, 1200, id);
    };

    makeHowl();

    return () => {
      destroyed = true;
      try {
        soundRef.current?.stop();
        soundRef.current?.unload();
      } catch {}
      soundRef.current = null;
      soundIdRef.current = null;
    };
  }, [onPlayStateChange]);

  const toggleMusic = () => {
    const s = soundRef.current;
    if (!s) return;

    if (isPlaying) {
      const id = soundIdRef.current ?? (s._sounds[0]?.id as number | undefined);
      if (id != null) {
        s.fade(s.volume(id), 0, 800, id);
        setTimeout(() => s.pause(id), 800);
      } else {
        s.pause();
      }
      setIsPlaying(false);
      localStorage.setItem("clairequest-music", "paused");
      onPlayStateChange?.(false);
    } else {
      const id = s.play();
      soundIdRef.current = id;
      s.volume(0, id);
      s.fade(0, 0.2, 1200, id);
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
            <p className="text-lg font-display font-semibold">
              Tap to Start Music 🎵
            </p>
          </div>
        </div>
      )}
    </>
  );
}

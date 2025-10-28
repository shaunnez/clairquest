import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface HoldTriggerProps {
  onComplete: () => void;
  duration?: number;
}

export default function HoldTrigger({ onComplete, duration = 10000 }: HoldTriggerProps) {
  const [isHolding, setIsHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(10);
  const startTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    if (isHolding) {
      startTimeRef.current = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTimeRef.current;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        const newCountdown = Math.max(0, Math.ceil((duration - elapsed) / 1000));

        setProgress(newProgress);
        setCountdown(newCountdown);

        if (elapsed >= duration) {
          setIsHolding(false);
          onComplete();
        } else {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      setProgress(0);
      setCountdown(10);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHolding, duration, onComplete]);

  const handleStart = () => setIsHolding(true);
  const handleEnd = () => setIsHolding(false);

  return (
    <div className="flex items-center justify-center py-8">
      <motion.div
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        className="relative flex items-center justify-center cursor-pointer select-none"
        whileTap={{ scale: 0.95 }}
        data-testid="trigger-hold"
      >
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="hsl(var(--muted))"
            strokeWidth="4"
            fill="none"
          />
          <motion.circle
            cx="64"
            cy="64"
            r="56"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength: progress / 100,
              strokeDasharray: "1 1",
            }}
            initial={{ pathLength: 0 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--chart-2))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Sparkles className="h-8 w-8 text-primary mb-2" />
          <p className="text-xs text-muted-foreground text-center px-4">
            {isHolding ? `${countdown}s` : "Hold for a surprise..."}
          </p>
        </div>

        {isHolding && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(229, 158, 169, 0.2) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

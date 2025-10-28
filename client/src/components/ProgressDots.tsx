import { motion } from "framer-motion";

interface ProgressDotsProps {
  total: number;
  current: number;
}

export default function ProgressDots({ total, current }: ProgressDotsProps) {
  return (
    <div className="flex items-center gap-1.5" data-testid="progress-dots">
      {Array.from({ length: total }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8 }}
          animate={{
            scale: index <= current ? 1 : 0.8,
            opacity: index <= current ? 1 : 0.3,
          }}
          transition={{ duration: 0.3 }}
          className={`h-1.5 w-1.5 rounded-full ${
            index <= current ? "bg-chart-2" : "bg-muted-foreground"
          }`}
          data-testid={`dot-${index}`}
        />
      ))}
    </div>
  );
}

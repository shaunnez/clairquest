import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const leaves = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    duration: 10 + Math.random() * 10,
    size: 20 + Math.random() * 40,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            top: "-10%",
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(leaf.id) * 100, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: `${leaf.size}px`,
              height: `${leaf.size}px`,
              background: `radial-gradient(circle, ${
                leaf.id % 3 === 0
                  ? "hsl(var(--chart-5))"
                  : leaf.id % 3 === 1
                    ? "hsl(var(--chart-2))"
                    : "hsl(var(--chart-3))"
              }, transparent)`,
              filter: "blur(2px)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

import { motion } from "framer-motion";

interface AnimatedHeadlineProps {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedHeadline({ children, delay = 0 }: AnimatedHeadlineProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4"
      style={{
        textShadow: "0 0 20px rgba(229, 158, 169, 0.3), 0 0 40px rgba(251, 185, 203, 0.2)",
      }}
      data-testid="animated-headline"
    >
      {children}
    </motion.h1>
  );
}

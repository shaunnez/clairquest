import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NextButtonProps {
  onClick: () => void;
  label?: string;
}

export default function NextButton({ onClick, label = "Continue" }: NextButtonProps) {
  return (
    <div className="relative">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute -top-2 -right-2 text-chart-5"
      >
        <Sparkles className="h-4 w-4" />
      </motion.div>
      
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute -bottom-2 -left-2 text-chart-3"
      >
        <Sparkles className="h-3 w-3" />
      </motion.div>

      <Button
        onClick={onClick}
        className="w-full min-h-14 rounded-full bg-gradient-to-r from-primary to-chart-2 text-primary-foreground font-semibold text-lg shadow-lg"
        data-testid="button-next"
      >
        {label}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
}

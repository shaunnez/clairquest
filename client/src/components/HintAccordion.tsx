import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface HintAccordionProps {
  hint: string;
}

export default function HintAccordion({ hint }: HintAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full" data-testid="hint-accordion">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-chart-5/30 backdrop-blur-sm hover-elevate active-elevate-2 transition-colors"
        data-testid="button-hint-toggle"
      >
        <span className="text-sm font-medium text-foreground flex items-center gap-2">
          💡 Need a hint?
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-2 px-4 py-3 rounded-lg bg-chart-5/20 border-l-4 border-primary backdrop-blur-sm">
              <p className="text-sm text-muted-foreground" data-testid="text-hint">
                {hint}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

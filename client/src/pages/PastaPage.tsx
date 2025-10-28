import { motion } from "framer-motion";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import NextButton from "@/components/NextButton";
import HoldTrigger from "@/components/HoldTrigger";
import HintAccordion from "@/components/HintAccordion";

export default function PastaPage() {
  const [, setLocation] = useLocation();

  const handleHoldComplete = () => {
    setTimeout(() => {
      setLocation("/finale");
    }, 500);
  };

  return (
    <PageLayout currentStep={6} totalSteps={8}>
      <div className="space-y-6">
        <AnimatedHeadline>Hands in flour, hearts full 🍝</AnimatedHeadline>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-chart-5/20 p-6 backdrop-blur-md">
            <p className="text-base leading-relaxed text-foreground">
              As an extra little fun thing, we've got a pasta-making class at
              Pasta & Cuore in a few weeks!
            </p>
            <p className="text-base leading-relaxed text-foreground mt-4 font-semibold">
              But there's something else... press and hold for 5 seconds.
            </p>
          </div>

          <HintAccordion hint="Honestly I really love making food with you, and getting messy. What a great combination! ;)" />

          <HoldTrigger onComplete={handleHoldComplete} duration={5000} />
        </motion.div>
      </div>
    </PageLayout>
  );
}

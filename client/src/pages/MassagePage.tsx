import { motion } from "framer-motion";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import NextButton from "@/components/NextButton";
import HintAccordion from "@/components/HintAccordion";

export default function MassagePage() {
  const [, setLocation] = useLocation();

  return (
    <PageLayout
      currentStep={2}
      totalSteps={8}
      bottomBar={<NextButton onClick={() => setLocation("/ugg")} />}
    >
      <div className="space-y-6">
        <AnimatedHeadline>Breathe. Melt. Glow 💆‍♀️</AnimatedHeadline>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-chart-3/20 p-6 backdrop-blur-md">
            <p className="text-base leading-relaxed text-foreground">
              I know you've got a sore neck, so find the massage parlour and
              claim your head & shoulder reset.
            </p>
            <p className="text-base leading-relaxed text-foreground mt-4 font-semibold">
              Open your next card once your there. After your done, click
              continue.
            </p>
          </div>

          <HintAccordion hint="It's down the far end. Helpful I know. Time to relax and unwind!... Once you find it :D" />
        </motion.div>
      </div>
    </PageLayout>
  );
}

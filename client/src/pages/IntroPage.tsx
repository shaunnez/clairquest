import { motion } from "framer-motion";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import NextButton from "@/components/NextButton";

export default function IntroPage() {
  const [, setLocation] = useLocation();

  return (
    <PageLayout 
      currentStep={0} 
      totalSteps={8}
      bottomBar={
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <NextButton onClick={() => setLocation("/starbucks")} label="Begin Quest →" />
        </motion.div>
      }
    >
      <div className="space-y-6">
        <AnimatedHeadline>Hi love. Ready for an adventure? 💌</AnimatedHeadline>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="rounded-2xl bg-gradient-to-br from-chart-5/30 to-chart-2/20 p-6 backdrop-blur-md">
            <p className="text-base leading-relaxed text-foreground">
              You're about to follow a trail of tiny surprises. Don't peek at your vouchers yet — you'll open them as you go.
            </p>
            <p className="text-base leading-relaxed text-foreground mt-4">
              Bring comfy shoes and your silly goose energy.
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}

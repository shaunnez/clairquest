import { motion } from "framer-motion";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import NextButton from "@/components/NextButton";

export default function DinnerPage() {
  const [, setLocation] = useLocation();

  return (
    <PageLayout 
      currentStep={5} 
      totalSteps={8}
      bottomBar={<NextButton onClick={() => setLocation("/pasta")} />}
    >
      <div className="space-y-6">
        <AnimatedHeadline>Tonight, city lights and you 🌆</AnimatedHeadline>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="rounded-2xl bg-gradient-to-br from-chart-3/30 to-chart-2/20 p-6 backdrop-blur-md">
            <p className="text-base leading-relaxed text-foreground">
              Dinner at 5pm. Dress comfy-cute — think "Taylor Swift in love."
            </p>
            <p className="text-base leading-relaxed text-foreground mt-4">
              I'll text you the spot later.
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}

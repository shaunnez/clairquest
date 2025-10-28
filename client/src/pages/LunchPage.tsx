import { motion } from "framer-motion";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import NextButton from "@/components/NextButton";

export default function LunchPage() {
  const [, setLocation] = useLocation();

  return (
    <PageLayout 
      currentStep={4} 
      totalSteps={8}
      bottomBar={<NextButton onClick={() => setLocation("/dinner")} />}
    >
      <div className="space-y-6">
        <AnimatedHeadline>Lunch with your goose 🦢</AnimatedHeadline>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="rounded-2xl bg-gradient-to-br from-chart-5/30 to-primary/20 p-6 backdrop-blur-md">
            <p className="text-base leading-relaxed text-foreground">
              Text me when you're ready — you already have my location, love.
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}

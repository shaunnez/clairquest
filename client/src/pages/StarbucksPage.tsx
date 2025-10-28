import { motion } from "framer-motion";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import NextButton from "@/components/NextButton";
import HintAccordion from "@/components/HintAccordion";

export default function StarbucksPage() {
  const [, setLocation] = useLocation();

  return (
    <PageLayout
      currentStep={1}
      totalSteps={8}
      bottomBar={<NextButton onClick={() => setLocation("/massage")} />}
    >
      <div className="space-y-6">
        <AnimatedHeadline>First sip, happy heart ☕</AnimatedHeadline>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="rounded-2xl bg-gradient-to-br from-chart-3/30 to-chart-5/20 p-6 backdrop-blur-md">
            <p className="text-base leading-relaxed text-foreground">
              Head to Starbucks and grab something cold and yum. And later you
              can have something hot and yum.
            </p>
            <p className="text-base leading-relaxed text-foreground mt-4 font-semibold">
              You can open your first card now.
            </p>
          </div>

          <HintAccordion hint="I know you know where it is... Get your favorite iced drink!" />
        </motion.div>
      </div>
    </PageLayout>
  );
}

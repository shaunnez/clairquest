import { motion } from "framer-motion";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import NextButton from "@/components/NextButton";
import HintAccordion from "@/components/HintAccordion";

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
              Get in your car, find me on the map. Even when I'm not with you,
              we are always connected.
            </p>

            <p className="text-base leading-relaxed text-foreground mt-4">
              Don't worry, it's near your next appointment.
            </p>
          </div>

          <HintAccordion hint="Head to Westfield in newmarket and park up. I love how our relationship continues to build, and I fall more and more in love with you every day. You melted my heart when you gave me those flowers, so, i'm waiting for you where we can get some more together." />
        </motion.div>
      </div>
    </PageLayout>
  );
}

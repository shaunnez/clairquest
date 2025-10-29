import { motion } from "framer-motion";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import NextButton from "@/components/NextButton";
import HintAccordion from "@/components/HintAccordion";

export default function UggPage() {
  const [, setLocation] = useLocation();

  return (
    <PageLayout
      currentStep={3}
      totalSteps={8}
      bottomBar={<NextButton onClick={() => setLocation("/lunch")} />}
    >
      <div className="space-y-6">
        <AnimatedHeadline>Soft steps for our getaway 🧦</AnimatedHeadline>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="rounded-2xl bg-gradient-to-br from-chart-2/30 to-chart-4/20 p-6 backdrop-blur-md">
            <p className="text-base leading-relaxed text-foreground">
              I know the socks are cute, but you deserve more comfortable
              attire. Pick the fluffiest pair that makes you smile.
            </p>
            <p className="text-base leading-relaxed text-foreground mt-4">
              Think of our weekend away, you, me, pure comfort, and lots of
              laughter. I cannot wait.
            </p>
          </div>

          <HintAccordion hint="I'm pretttyyy sure you know where the UGG popup is. Near the food court and jewellery stores. I may have forgot your shoe size, thus the voucher. Bok bok. Chuck them on, and click continue when you've got them" />
        </motion.div>
      </div>
    </PageLayout>
  );
}

import { motion } from "framer-motion";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import NextButton from "@/components/NextButton";
import HintAccordion from "@/components/HintAccordion";

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
              Dinner at 5pm. The fact your as much of a foodie as me...
              absolutely delicious. Just like you.
            </p>
            <p className="text-base leading-relaxed text-foreground mt-4">
              Lets eat, drink, smooch and laugh. I love you. Until then, know
              I'm always thinking of you.
            </p>
          </div>

          <HintAccordion hint="Feel free to click continue, you've been such a good girl. I'm proud of you." />
        </motion.div>
      </div>
    </PageLayout>
  );
}

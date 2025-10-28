import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import PageLayout from "@/components/PageLayout";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import { Heart } from "lucide-react";

export default function FinalePage() {
  useEffect(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const colors = ["#E59EA9", "#FBB9CB", "#A1CBDB", "#BBB3C8"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <PageLayout currentStep={7} totalSteps={8}>
      <div className="space-y-6">
        <AnimatedHeadline>
          My Maverick. My Fish. My Person. My Love ❤️
        </AnimatedHeadline>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="rounded-2xl bg-gradient-to-br from-chart-2/30 to-primary/20 p-8 backdrop-blur-md border border-chart-2/30">
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Heart className="h-12 w-12 text-chart-2 fill-chart-2" />
              </motion.div>
            </div>

            <p className="text-base leading-relaxed text-foreground mb-4">
              Since that first kiss, I never imagined you'd be my Maverick, and
              me your silly goose.
            </p>
            <p className="text-base leading-relaxed text-foreground mb-4">
              You make ordinary days sparkle. You calm my chaos. You are my
              favorite adventure.
            </p>
            <p className="text-base leading-relaxed text-foreground mb-6">
              I love every moment that we spend together, I can't wait for our
              weekend away.
            </p>
            <p className="text-base leading-relaxed text-foreground font-display font-semibold text-center">
              - Your Goose 🦢
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground">
              You found the secret page! ✨
            </p>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
}

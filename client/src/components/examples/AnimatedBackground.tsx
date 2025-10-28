import AnimatedBackground from "../AnimatedBackground";

export default function AnimatedBackgroundExample() {
  return (
    <div className="relative h-screen w-full bg-background">
      <AnimatedBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-2xl font-display">Background Animation Preview</p>
      </div>
    </div>
  );
}

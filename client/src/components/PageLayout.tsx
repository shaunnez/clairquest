import { Heart } from "lucide-react";
import AudioPlayer from "./AudioPlayer";
import AnimatedBackground from "./AnimatedBackground";
import ProgressDots from "./ProgressDots";

interface PageLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  bottomBar?: React.ReactNode;
}

export default function PageLayout({ children, currentStep, totalSteps, bottomBar }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      
      <header className="fixed top-0 left-0 right-0 h-14 backdrop-blur-md bg-background/80 border-b border-border/50 z-40">
        <div className="h-full max-w-md mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-chart-2 animate-pulse" data-testid="icon-heart" />
          </div>
          
          <ProgressDots total={totalSteps} current={currentStep} />
          
          <AudioPlayer />
        </div>
      </header>

      <main className="flex-1 relative z-10 pt-14 pb-24">
        <div className="max-w-md mx-auto px-4 py-8">
          {children}
        </div>
      </main>

      {bottomBar && (
        <footer className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-background/80 border-t border-border/50 z-40">
          <div className="max-w-md mx-auto px-4 py-4">
            {bottomBar}
          </div>
        </footer>
      )}
    </div>
  );
}

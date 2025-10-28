import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import IntroPage from "@/pages/IntroPage";
import StarbucksPage from "@/pages/StarbucksPage";
import MassagePage from "@/pages/MassagePage";
import UggPage from "@/pages/UggPage";
import LunchPage from "@/pages/LunchPage";
import DinnerPage from "@/pages/DinnerPage";
import PastaPage from "@/pages/PastaPage";
import FinalePage from "@/pages/FinalePage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={IntroPage} />
      <Route path="/starbucks" component={StarbucksPage} />
      <Route path="/massage" component={MassagePage} />
      <Route path="/ugg" component={UggPage} />
      <Route path="/lunch" component={LunchPage} />
      <Route path="/dinner" component={DinnerPage} />
      <Route path="/pasta" component={PastaPage} />
      <Route path="/finale" component={FinalePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

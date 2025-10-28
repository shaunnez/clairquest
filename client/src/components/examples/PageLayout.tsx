import PageLayout from "../PageLayout";

export default function PageLayoutExample() {
  return (
    <PageLayout currentStep={2} totalSteps={8}>
      <div className="space-y-6">
        <h1 className="font-display text-4xl font-bold">Sample Quest Page</h1>
        <p className="text-lg">This shows the layout with animated background, top bar, and progress dots.</p>
      </div>
    </PageLayout>
  );
}

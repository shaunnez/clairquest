import HoldTrigger from "../HoldTrigger";

export default function HoldTriggerExample() {
  return (
    <HoldTrigger 
      onComplete={() => console.log("Hold completed!")} 
      duration={10000} 
    />
  );
}

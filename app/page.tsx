import DotPattern from "@/components/ui/dot-pattern";
import PulsatingButton from "@/components/ui/pulsating-button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Portfolio ERP</h1>
      <PulsatingButton
       className="mt-4 bg-red-700"
       pulseColor="red"
       duration="2s"
      >Get Started</PulsatingButton>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
        cr={2}
        cx={5}
        cy={5}
      />
      </div>
  );
}


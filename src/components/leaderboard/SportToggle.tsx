import { Bike, PersonStanding } from "lucide-react";
import { cn } from "@/lib/utils";

export type Sport = "running" | "cycling";

interface SportToggleProps {
  value: Sport;
  onChange: (value: Sport) => void;
}

export function SportToggle({ value, onChange }: SportToggleProps) {
  return (
    <div className="inline-flex rounded-lg bg-slate-800 p-1 border border-slate-700">
      <button
        onClick={() => onChange("running")}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
          value === "running"
            ? "bg-primary text-white shadow-md"
            : "text-slate-200 hover:text-white hover:bg-slate-700"
        )}
      >
        <PersonStanding className="h-4 w-4" />
        <span className="hidden sm:inline">Running</span>
      </button>
      <button
        onClick={() => onChange("cycling")}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
          value === "cycling"
            ? "bg-primary text-white shadow-md"
            : "text-slate-200 hover:text-white hover:bg-slate-700"
        )}
      >
        <Bike className="h-4 w-4" />
        <span className="hidden sm:inline">Cycling</span>
      </button>
    </div>
  );
}

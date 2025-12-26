import { cn } from "@/lib/utils";

export type Gender = "male" | "female";

interface GenderToggleProps {
  value: Gender;
  onChange: (gender: Gender) => void;
}

export function GenderToggle({ value, onChange }: GenderToggleProps) {
  return (
    <div className="inline-flex rounded-lg bg-slate-800 p-1 gap-1 border border-slate-700">
      <button
        onClick={() => onChange("male")}
        className={cn(
          "px-4 py-2 rounded-md font-display text-sm font-semibold uppercase tracking-wide transition-all duration-200",
          value === "male"
            ? "bg-blue-600 text-white shadow-md"
            : "text-slate-200 hover:text-white hover:bg-slate-700"
        )}
      >
        Male
      </button>
      <button
        onClick={() => onChange("female")}
        className={cn(
          "px-4 py-2 rounded-md font-display text-sm font-semibold uppercase tracking-wide transition-all duration-200",
          value === "female"
            ? "bg-pink-600 text-white shadow-md"
            : "text-slate-200 hover:text-white hover:bg-slate-700"
        )}
      >
        Female
      </button>
    </div>
  );
}

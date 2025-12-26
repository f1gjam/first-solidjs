import { cn } from "@/lib/utils";

export type Gender = "male" | "female";

interface GenderToggleProps {
  value: Gender;
  onChange: (gender: Gender) => void;
}

export function GenderToggle({ value, onChange }: GenderToggleProps) {
  return (
    <div className="inline-flex rounded-lg bg-muted p-1 gap-1">
      <button
        onClick={() => onChange("male")}
        className={cn(
          "px-4 py-2 rounded-md font-display text-sm font-semibold uppercase tracking-wide transition-all duration-200",
          value === "male"
            ? "bg-blue-500 text-white shadow-md"
            : "text-muted-foreground hover:text-foreground hover:bg-muted-foreground/10"
        )}
      >
        Male
      </button>
      <button
        onClick={() => onChange("female")}
        className={cn(
          "px-4 py-2 rounded-md font-display text-sm font-semibold uppercase tracking-wide transition-all duration-200",
          value === "female"
            ? "bg-pink-500 text-white shadow-md"
            : "text-muted-foreground hover:text-foreground hover:bg-muted-foreground/10"
        )}
      >
        Female
      </button>
    </div>
  );
}

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { LeaderboardTable } from "@/components/leaderboard/LeaderboardTable";
import { GenderToggle, Gender } from "@/components/leaderboard/GenderToggle";
import { SportToggle, Sport } from "@/components/leaderboard/SportToggle";
import { api, convertAthleteDataToTableFormat } from "@/services/api";
import { Trophy, Loader2, Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Generate month options for the last 12 months
const generateMonthOptions = () => {
  const options = [];
  const now = new Date();
  for (let i = 0; i < 12; i++) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthName = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    options.push({
      value: `${monthName}-${year}`,
      label: `${monthName} ${year}`
    });
  }
  return options;
};

export default function MonthlyLeaderboard() {
  const [gender, setGender] = useState<Gender>("male");
  const [sport, setSport] = useState<Sport>("cycling");
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    const month = now.toLocaleString('en-US', { month: 'long' });
    return `${month}-${now.getFullYear()}`;
  });

  const monthOptions = useMemo(() => generateMonthOptions(), []);

  // Fetch cycling or running data based on sport selection
  const { data: cyclingData, isLoading: cyclingLoading, error: cyclingError } = useQuery({
    queryKey: ["monthlyLeaderboard", "cycling", selectedMonth],
    queryFn: () => api.getMonthlyRiderTotals(selectedMonth),
    enabled: sport === "cycling",
    retry: 1,
  });

  const { data: runningData, isLoading: runningLoading, error: runningError } = useQuery({
    queryKey: ["monthlyLeaderboard", "running", selectedMonth],
    queryFn: () => api.getMonthlyRunnerTotals(selectedMonth),
    enabled: sport === "running",
    retry: 1,
  });

  const data = sport === "cycling" ? cyclingData : runningData;
  const isLoading = sport === "cycling" ? cyclingLoading : runningLoading;
  const error = sport === "cycling" ? cyclingError : runningError;

  const filteredAthletes = useMemo(() => {
    if (!data) {
      console.log("No data received");
      return [];
    }
    
    console.log("Data received:", data.length, "athletes");
    
    // Filter by gender directly from the array
    const athletes = data.filter(athlete => 
      gender === "male" ? athlete.AthleteSex === "M" : athlete.AthleteSex === "F"
    );
    
    console.log("Filtered athletes:", athletes.length);
    
    const formatted = convertAthleteDataToTableFormat(athletes, sport);
    console.log("Formatted athletes:", formatted.length);
    
    return formatted;
  }, [data, gender, sport]);

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Page Header */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-orange-400 text-white">
                <Trophy className="h-7 w-7" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold uppercase">
                  Monthly Leaderboard
                </h1>
                <p className="text-muted-foreground">
                  Best performers this month • Updated weekly
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[180px] bg-slate-800 border-slate-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {monthOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <SportToggle value={sport} onChange={setSport} />
            <GenderToggle value={gender} onChange={setGender} />
          </div>
        </div>

        {/* Leaderboard Table */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="rounded-xl border border-destructive/50 bg-destructive/10 p-6 text-center">
            <p className="text-destructive">Failed to load leaderboard data. Please try again later.</p>
            <p className="text-sm text-muted-foreground mt-2">Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
          </div>
        ) : filteredAthletes.length === 0 ? (
          <div className="rounded-xl border border-border bg-muted/50 p-6 text-center">
            <p className="text-muted-foreground">No athletes found for the selected criteria.</p>
          </div>
        ) : (
          <LeaderboardTable data={filteredAthletes} title="This Month's Rankings" />
        )}
      </div>
    </Layout>
  );
}

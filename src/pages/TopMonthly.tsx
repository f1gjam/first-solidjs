import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { GenderToggle, Gender } from "@/components/leaderboard/GenderToggle";
import { SportToggle, Sport } from "@/components/leaderboard/SportToggle";
import { api } from "@/services/api";
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

export default function TopMonthly() {
  const [gender, setGender] = useState<Gender>("male");
  const [sport, setSport] = useState<Sport>("cycling");
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    const month = now.toLocaleString('en-US', { month: 'long' });
    return `${month}-${now.getFullYear()}`;
  });

  const monthOptions = useMemo(() => generateMonthOptions(), []);

  const { data: cyclingData, isLoading: cyclingLoading } = useQuery({
    queryKey: ["topMonthly", "cycling", selectedMonth],
    queryFn: () => api.getMonthlyRiderTotals(selectedMonth),
    enabled: sport === "cycling",
  });

  const { data: runningData, isLoading: runningLoading } = useQuery({
    queryKey: ["topMonthly", "running", selectedMonth],
    queryFn: () => api.getMonthlyRunnerTotals(selectedMonth),
    enabled: sport === "running",
  });

  const data = sport === "cycling" ? cyclingData : runningData;
  const isLoading = sport === "cycling" ? cyclingLoading : runningLoading;

  const topAthletes = useMemo(() => {
    if (!data) return null;

    const filtered = data.filter(athlete => 
      gender === "male" ? athlete.AthleteSex === "M" : athlete.AthleteSex === "F"
    );

    if (filtered.length === 0) return null;

    // Safe reduce with proper null/undefined handling
    const safeReduce = (field: keyof AthleteData) => {
      return filtered.reduce((max, a) => {
        const maxVal = (max[field] as number) || 0;
        const aVal = (a[field] as number) || 0;
        return aVal > maxVal ? a : max;
      });
    };

    return {
      totalDistance: safeReduce('TotalDistance'),
      totalOutdoorDistance: safeReduce('TotalOutdoorDistance'),
      totalIndoorDistance: safeReduce('TotalIndoorDistance'),
      totalElevation: safeReduce('TotalElevation'),
      totalOutdoorElevation: safeReduce('TotalOutdoorElevation'),
      totalIndoorElevation: safeReduce('TotalIndoorElevation'),
      longestOutdoorRide: safeReduce('LongestOutdoorRide'),
      longestIndoorRide: safeReduce('LongestIndoorRide'),
      highestOutdoorElevation: safeReduce('HighestOutdoorElevation'),
      highestIndoorElevation: safeReduce('HighestIndoorElevation'),
    };
  }, [data, gender]);

  const StatCard = ({ title, athlete, value, unit }: any) => (
    <div className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">{title}</h3>
      <p className="text-2xl font-bold text-foreground mb-1">{athlete.AthleteName}</p>
      <p className="text-3xl font-display font-bold text-primary">
        {value.toFixed(1)} {unit}
      </p>
    </div>
  );

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
                <Trophy className="h-7 w-7" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold uppercase">
                  Top Monthly Performers
                </h1>
                <p className="text-muted-foreground">
                  Best achievements this month • Category leaders
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

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : !topAthletes ? (
          <div className="rounded-xl border border-border bg-muted/50 p-6 text-center">
            <p className="text-muted-foreground">No data available for selected criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatCard title="Total Distance" athlete={topAthletes.totalDistance} value={topAthletes.totalDistance.TotalDistance || 0} unit="mi" />
            <StatCard title="Total Outdoor Distance" athlete={topAthletes.totalOutdoorDistance} value={topAthletes.totalOutdoorDistance.TotalOutdoorDistance || 0} unit="mi" />
            <StatCard title="Total Indoor Distance" athlete={topAthletes.totalIndoorDistance} value={topAthletes.totalIndoorDistance.TotalIndoorDistance || 0} unit="mi" />
            <StatCard title="Total Elevation" athlete={topAthletes.totalElevation} value={topAthletes.totalElevation.TotalElevation || 0} unit="m" />
            <StatCard title="Total Outdoor Elevation" athlete={topAthletes.totalOutdoorElevation} value={topAthletes.totalOutdoorElevation.TotalOutdoorElevation || 0} unit="m" />
            <StatCard title="Total Indoor Elevation" athlete={topAthletes.totalIndoorElevation} value={topAthletes.totalIndoorElevation.TotalIndoorElevation || 0} unit="m" />
            <StatCard title={`Longest Outdoor ${sport === 'cycling' ? 'Ride' : 'Run'}`} athlete={topAthletes.longestOutdoorRide} value={topAthletes.longestOutdoorRide.LongestOutdoorRide || 0} unit="mi" />
            <StatCard title={`Longest Indoor ${sport === 'cycling' ? 'Ride' : 'Run'}`} athlete={topAthletes.longestIndoorRide} value={topAthletes.longestIndoorRide.LongestIndoorRide || 0} unit="mi" />
            <StatCard title="Highest Outdoor Elevation" athlete={topAthletes.highestOutdoorElevation} value={topAthletes.highestOutdoorElevation.HighestOutdoorElevation || 0} unit="m" />
            <StatCard title="Highest Indoor Elevation" athlete={topAthletes.highestIndoorElevation} value={topAthletes.highestIndoorElevation.HighestIndoorElevation || 0} unit="m" />
          </div>
        )}
      </div>
    </Layout>
  );
}

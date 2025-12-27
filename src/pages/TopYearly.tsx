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

// Generate year options (last 5 years)
const generateYearOptions = () => {
  const options = [];
  const currentYear = new Date().getFullYear();
  for (let i = 0; i < 5; i++) {
    const year = currentYear - i;
    options.push({
      value: `January-${year}`,
      label: `${year}`
    });
  }
  return options;
};

export default function TopYearly() {
  const [gender, setGender] = useState<Gender>("male");
  const [sport, setSport] = useState<Sport>("cycling");
  const [selectedYear, setSelectedYear] = useState(() => {
    const year = new Date().getFullYear();
    return `January-${year}`;
  });

  const yearOptions = useMemo(() => generateYearOptions(), []);

  const { data, isLoading } = useQuery({
    queryKey: ["topYearly", "cycling", selectedYear],
    queryFn: () => api.getYearlyRiderTotals(selectedYear),
  });

  const topAthletes = useMemo(() => {
    if (!data) return null;

    const filtered = data.filter(athlete => 
      gender === "male" ? athlete.AthleteSex === "M" : athlete.AthleteSex === "F"
    );

    if (filtered.length === 0) return null;

    return {
      totalDistance: filtered.reduce((max, a) => a.TotalDistance > max.TotalDistance ? a : max),
      totalOutdoorDistance: filtered.reduce((max, a) => a.TotalOutdoorDistance > max.TotalOutdoorDistance ? a : max),
      totalIndoorDistance: filtered.reduce((max, a) => a.TotalIndoorDistance > max.TotalIndoorDistance ? a : max),
      totalElevation: filtered.reduce((max, a) => a.TotalElevation > max.TotalElevation ? a : max),
      totalOutdoorElevation: filtered.reduce((max, a) => a.TotalOutdoorElevation > max.TotalOutdoorElevation ? a : max),
      totalIndoorElevation: filtered.reduce((max, a) => a.TotalIndoorElevation > max.TotalIndoorElevation ? a : max),
      longestOutdoorRide: filtered.reduce((max, a) => a.LongestOutdoorRide > max.LongestOutdoorRide ? a : max),
      longestIndoorRide: filtered.reduce((max, a) => a.LongestIndoorRide > max.LongestIndoorRide ? a : max),
      highestOutdoorElevation: filtered.reduce((max, a) => a.HighestOutdoorElevation > max.HighestOutdoorElevation ? a : max),
      highestIndoorElevation: filtered.reduce((max, a) => a.HighestIndoorElevation > max.HighestIndoorElevation ? a : max),
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
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <Trophy className="h-7 w-7" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold uppercase">
                  Top Yearly Performers
                </h1>
                <p className="text-muted-foreground">
                  Best achievements this year • Category leaders
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[180px] bg-slate-800 border-slate-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {yearOptions.map(option => (
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
            <StatCard title="Total Distance" athlete={topAthletes.totalDistance} value={topAthletes.totalDistance.TotalDistance} unit="mi" />
            <StatCard title="Total Outdoor Distance" athlete={topAthletes.totalOutdoorDistance} value={topAthletes.totalOutdoorDistance.TotalOutdoorDistance} unit="mi" />
            <StatCard title="Total Indoor Distance" athlete={topAthletes.totalIndoorDistance} value={topAthletes.totalIndoorDistance.TotalIndoorDistance} unit="mi" />
            <StatCard title="Total Elevation" athlete={topAthletes.totalElevation} value={topAthletes.totalElevation.TotalElevation} unit="m" />
            <StatCard title="Total Outdoor Elevation" athlete={topAthletes.totalOutdoorElevation} value={topAthletes.totalOutdoorElevation.TotalOutdoorElevation} unit="m" />
            <StatCard title="Total Indoor Elevation" athlete={topAthletes.totalIndoorElevation} value={topAthletes.totalIndoorElevation.TotalIndoorElevation} unit="m" />
            <StatCard title="Longest Outdoor Ride" athlete={topAthletes.longestOutdoorRide} value={topAthletes.longestOutdoorRide.LongestOutdoorRide} unit="mi" />
            <StatCard title="Longest Indoor Ride" athlete={topAthletes.longestIndoorRide} value={topAthletes.longestIndoorRide.LongestIndoorRide} unit="mi" />
            <StatCard title="Highest Outdoor Elevation" athlete={topAthletes.highestOutdoorElevation} value={topAthletes.highestOutdoorElevation.HighestOutdoorElevation} unit="m" />
            <StatCard title="Highest Indoor Elevation" athlete={topAthletes.highestIndoorElevation} value={topAthletes.highestIndoorElevation.HighestIndoorElevation} unit="m" />
          </div>
        )}
      </div>
    </Layout>
  );
}

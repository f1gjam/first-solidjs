import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { LeaderboardTable } from "@/components/leaderboard/LeaderboardTable";
import { GenderToggle, Gender } from "@/components/leaderboard/GenderToggle";
import { SportToggle, Sport } from "@/components/leaderboard/SportToggle";
import { api, convertAthleteDataToTableFormat } from "@/services/api";
import { Calendar, Loader2 } from "lucide-react";

export default function WeeklyLeaderboard() {
  const [gender, setGender] = useState<Gender>("male");
  const [sport, setSport] = useState<Sport>("cycling");

  const { data, isLoading, error } = useQuery({
    queryKey: ["weeklyLeaderboard"],
    queryFn: api.getWeeklyLeaderboard,
  });

  const filteredAthletes = useMemo(() => {
    if (!data) return [];
    
    const athletes = gender === "male" 
      ? (data.MaleSorted || data.Male?.MaleSorted || [])
      : (data.FemaleSorted || data.Female?.FemaleSorted || []);
    
    return convertAthleteDataToTableFormat(athletes, sport);
  }, [data, gender, sport]);

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Page Header */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <Calendar className="h-7 w-7" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold uppercase">
                  Weekly Leaderboard
                </h1>
                <p className="text-muted-foreground">
                  Top performers this week • Updated daily
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
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
          </div>
        ) : (
          <LeaderboardTable data={filteredAthletes} title="This Week's Rankings" />
        )}
      </div>
    </Layout>
  );
}

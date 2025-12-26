import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { LeaderboardTable } from "@/components/leaderboard/LeaderboardTable";
import { GenderToggle, Gender } from "@/components/leaderboard/GenderToggle";
import { SportToggle, Sport } from "@/components/leaderboard/SportToggle";
import { api, convertAthleteDataToTableFormat } from "@/services/api";
import { Trophy, Loader2 } from "lucide-react";

export default function YearlyLeaderboard() {
  const [gender, setGender] = useState<Gender>("male");
  const [sport, setSport] = useState<Sport>("cycling");

  // Note: Running data for all-time not available from backend yet
  // Backend only has rider_yearly_totals (cycling), no runner_yearly_totals
  const { data, isLoading, error } = useQuery({
    queryKey: ["yearlyLeaderboard"],
    queryFn: api.getYearlyLeaderboard,
  });

  const filteredAthletes = useMemo(() => {
    if (!data) return [];
    
    // Filter by gender directly from the array
    const athletes = data.filter(athlete => 
      gender === "male" ? athlete.AthleteSex === "M" : athlete.AthleteSex === "F"
    );
    
    return convertAthleteDataToTableFormat(athletes, sport);
  }, [data, gender, sport]);

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Page Header */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <Trophy className="h-7 w-7" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold uppercase">
                  Yearly Leaderboard
                </h1>
                <p className="text-muted-foreground">
                  Top performers this year • Updated daily
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
          <LeaderboardTable data={filteredAthletes} title="This Year's Rankings" />
        )}
      </div>
    </Layout>
  );
}

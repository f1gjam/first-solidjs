import { Layout } from "@/components/layout/Layout";
import { LeaderboardTable } from "@/components/leaderboard/LeaderboardTable";

export default function WomensLeaderboard() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold uppercase mb-2">
            Women's Cycling Leaderboard
          </h1>
          <p className="text-muted-foreground">
            Top performing female cyclists in the club
          </p>
        </div>
        <LeaderboardTable 
          apiEndpoint={`${import.meta.env.VITE_API_BASE_URL || 'https://api.unixcraft.dev'}/api/v1/womensleaderboard`}
          title="Women's Cycling"
        />
      </div>
    </Layout>
  );
}

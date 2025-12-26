import { Layout } from "@/components/layout/Layout";
import { LeaderboardTable } from "@/components/leaderboard/LeaderboardTable";

export default function MensRunningLeaderboard() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold uppercase mb-2">
            Men's Running Leaderboard
          </h1>
          <p className="text-muted-foreground">
            Top performing male runners in the club
          </p>
        </div>
        <LeaderboardTable 
          apiEndpoint={`${import.meta.env.VITE_API_BASE_URL || 'https://api.unixcraft.dev'}/api/v1/mensrunningleaderboard`}
          title="Men's Running"
        />
      </div>
    </Layout>
  );
}

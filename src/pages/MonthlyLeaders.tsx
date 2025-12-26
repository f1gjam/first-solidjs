import { Layout } from "@/components/layout/Layout";
import { LeaderboardTable } from "@/components/leaderboard/LeaderboardTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MonthlyLeaders() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold uppercase mb-2">
            Monthly Leaders
          </h1>
          <p className="text-muted-foreground">
            Top performers this month across all categories
          </p>
        </div>
        
        <Tabs defaultValue="mens-cycling" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="mens-cycling">Men's Cycling</TabsTrigger>
            <TabsTrigger value="womens-cycling">Women's Cycling</TabsTrigger>
            <TabsTrigger value="mens-running">Men's Running</TabsTrigger>
            <TabsTrigger value="womens-running">Women's Running</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mens-cycling">
            <LeaderboardTable 
              apiEndpoint={`${import.meta.env.VITE_API_BASE_URL || 'https://api.unixcraft.dev'}/api/v1/mensleaderboardmonthly`}
              title="Men's Cycling Monthly"
            />
          </TabsContent>
          
          <TabsContent value="womens-cycling">
            <LeaderboardTable 
              apiEndpoint={`${import.meta.env.VITE_API_BASE_URL || 'https://api.unixcraft.dev'}/api/v1/womensleaderboardmonthly`}
              title="Women's Cycling Monthly"
            />
          </TabsContent>
          
          <TabsContent value="mens-running">
            <LeaderboardTable 
              apiEndpoint={`${import.meta.env.VITE_API_BASE_URL || 'https://api.unixcraft.dev'}/api/v1/mensrunningleaderboardmonthly`}
              title="Men's Running Monthly"
            />
          </TabsContent>
          
          <TabsContent value="womens-running">
            <LeaderboardTable 
              apiEndpoint={`${import.meta.env.VITE_API_BASE_URL || 'https://api.unixcraft.dev'}/api/v1/womensrunningleaderboardmonthly`}
              title="Women's Running Monthly"
            />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

import { Link } from "react-router-dom";
import { Calendar, Bike, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const monthlyLeaderboards = [
  {
    title: "Men's Cycling",
    description: "Top male cyclists this month",
    href: "/mens_monthly_leaderboard",
    icon: Bike,
    color: "from-blue-500 to-cyan-500",
    gender: "Men",
    sport: "Cycling",
  },
  {
    title: "Women's Cycling",
    description: "Top female cyclists this month",
    href: "/womens_monthly_leaderboard",
    icon: Bike,
    color: "from-pink-500 to-rose-500",
    gender: "Women",
    sport: "Cycling",
  },
  {
    title: "Men's Running",
    description: "Top male runners this month",
    href: "/mens_running_monthly_leaderboard",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    gender: "Men",
    sport: "Running",
  },
  {
    title: "Women's Running",
    description: "Top female runners this month",
    href: "/womens_running_monthly_leaderboard",
    icon: TrendingUp,
    color: "from-purple-500 to-violet-500",
    gender: "Women",
    sport: "Running",
  },
];

export default function MonthlyLeaders() {
  const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="container py-12">
      {/* Page Header */}
      <div className="flex flex-col gap-4 mb-12 text-center">
        <div className="flex items-center justify-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-orange-400 text-white">
            <Calendar className="h-8 w-8" />
          </div>
        </div>
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-2">
            Monthly Leaders
          </h1>
          <p className="text-muted-foreground text-lg">
            {currentMonth} • Top performers across all categories
          </p>
        </div>
      </div>

      {/* Description Card */}
      <Card className="mb-12 max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="font-display text-xl uppercase text-center">
            Monthly Challenge
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            Monthly leaderboards track your performance throughout the entire month. 
            Compete against club members in cycling and running categories to earn your spot 
            at the top. Leaderboards reset at the beginning of each month.
          </p>
        </CardContent>
      </Card>

      {/* Leaderboard Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {monthlyLeaderboards.map((board, index) => (
          <Link
            key={board.href}
            to={board.href}
            className="group block animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
              <div className="relative">
                {/* Gradient overlay */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${board.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                
                <CardHeader>
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${board.color} text-white`}>
                      <board.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <CardTitle className="font-display text-2xl uppercase mb-1">
                        {board.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {board.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                      {board.gender}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                      {board.sport}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Monthly
                    </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-12 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-lg uppercase">
              How Monthly Leaderboards Work
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">Track Your Activities</h4>
                <p className="text-sm text-muted-foreground">
                  All your Strava activities are automatically synced and counted towards the monthly totals.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">Compete With Others</h4>
                <p className="text-sm text-muted-foreground">
                  See how you stack up against other club members in distance, elevation, and activities.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">Fresh Start Each Month</h4>
                <p className="text-sm text-muted-foreground">
                  Leaderboards reset on the 1st of each month, giving everyone a fair chance to compete.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

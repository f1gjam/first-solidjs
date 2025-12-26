import { Link } from "react-router-dom";
import { Medal, Bike, TrendingUp, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const yearlyLeaderboards = [
  {
    title: "Men's Cycling",
    description: "Top male cyclists this year",
    href: "/mens_yearly_leaderboard",
    icon: Bike,
    color: "from-blue-500 to-cyan-500",
    gender: "Men",
    sport: "Cycling",
  },
  {
    title: "Women's Cycling",
    description: "Top female cyclists this year",
    href: "/womens_yearly_leaderboard",
    icon: Bike,
    color: "from-pink-500 to-rose-500",
    gender: "Women",
    sport: "Cycling",
  },
  {
    title: "Men's Running",
    description: "Top male runners this year",
    href: "/mens_running_yearly_leaderboard",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    gender: "Men",
    sport: "Running",
  },
  {
    title: "Women's Running",
    description: "Top female runners this year",
    href: "/womens_running_yearly_leaderboard",
    icon: TrendingUp,
    color: "from-purple-500 to-violet-500",
    gender: "Women",
    sport: "Running",
  },
];

export default function YearlyLeaders() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container py-12">
      {/* Page Header */}
      <div className="flex flex-col gap-4 mb-12 text-center">
        <div className="flex items-center justify-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 text-white">
            <Medal className="h-8 w-8" />
          </div>
        </div>
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-2">
            Yearly Leaders
          </h1>
          <p className="text-muted-foreground text-lg">
            {currentYear} • Champions across all categories
          </p>
        </div>
      </div>

      {/* Description Card */}
      <Card className="mb-12 max-w-3xl mx-auto border-yellow-500/20">
        <CardHeader>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            <CardTitle className="font-display text-xl uppercase text-center">
              Annual Champions
            </CardTitle>
            <Trophy className="h-6 w-6 text-yellow-500" />
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            Yearly leaderboards showcase the most dedicated athletes who have consistently 
            performed throughout the entire year. These are the true champions who have shown 
            remarkable commitment and endurance. Leaderboards reset at the beginning of each year.
          </p>
        </CardContent>
      </Card>

      {/* Leaderboard Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {yearlyLeaderboards.map((board, index) => (
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
                    <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-sm font-medium">
                      Yearly
                    </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Stats Explanation */}
      <div className="mt-12 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-lg uppercase">
              How Yearly Leaderboards Work
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">Year-Long Tracking</h4>
                <p className="text-sm text-muted-foreground">
                  All activities from January 1st through December 31st are accumulated for the yearly totals.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">Ultimate Challenge</h4>
                <p className="text-sm text-muted-foreground">
                  Competing for a yearly podium position requires dedication and consistency throughout the entire year.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">Hall of Fame</h4>
                <p className="text-sm text-muted-foreground">
                  Top yearly performers earn their place in the club's hall of fame and bragging rights for the year!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Motivation Section */}
      <div className="mt-8 max-w-3xl mx-auto">
        <Card className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border-yellow-500/20">
          <CardContent className="pt-6 text-center">
            <Medal className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold uppercase mb-2">
              Ready to Become a Champion?
            </h3>
            <p className="text-muted-foreground">
              Every ride counts, every run matters. Start logging your activities today and work 
              your way to the top of the leaderboard!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

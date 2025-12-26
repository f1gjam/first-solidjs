import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, TrendingUp, Activity, Bike, Medal } from "lucide-react";

const stats = [
  { label: "Active Athletes", value: "2,456", icon: Users },
  { label: "Total Distance", value: "1.2M km", icon: TrendingUp },
  { label: "Activities Logged", value: "48,392", icon: Activity },
  { label: "Weekly Challenges", value: "156", icon: Trophy },
];

const leaderboards = [
  {
    title: "Men's Cycling",
    description: "Weekly cycling leaderboard",
    href: "/mens_leaderboard",
    icon: Bike,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Women's Cycling",
    description: "Weekly cycling leaderboard",
    href: "/womens_leaderboard",
    icon: Bike,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Men's Running",
    description: "Weekly running leaderboard",
    href: "/mens_running_leaderboard",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Women's Running",
    description: "Weekly running leaderboard",
    href: "/womens_running_leaderboard",
    icon: TrendingUp,
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Monthly Leaders",
    description: "Top performers this month",
    href: "/monthly_leaders",
    icon: Calendar,
    color: "from-primary to-orange-400",
  },
  {
    title: "Yearly Leaders",
    description: "Champions of the year",
    href: "/yearly_leaders",
    icon: Medal,
    color: "from-yellow-500 to-amber-500",
  },
];

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-strava-dark to-strava-darker py-16 md:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6 animate-fade-in">
              <Activity className="h-4 w-4" />
              <span className="text-sm font-medium">UnixCraft Community</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Strava Club{" "}
              <span className="gradient-text">Stats</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              Track your club's performance, compete on leaderboards, and celebrate achievements together.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Link to="/mens_leaderboard">
                <Button variant="hero" size="xl">
                  View Leaderboards
                </Button>
              </Link>
              <Link to="/documentation">
                <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="font-display text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboards Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-4">
              Leaderboards
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a leaderboard to see how athletes are performing across different categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {leaderboards.map((board, index) => (
              <Link
                key={board.href}
                to={board.href}
                className="group block animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${board.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                  
                  <div className={`inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br ${board.color} text-white mb-4`}>
                    <board.icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold uppercase mb-2">
                    {board.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {board.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Strava Attribution */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://developers.strava.com/images/api_logo_pwrdBy_strava_stack_gray.svg"
              alt="Powered by Strava"
              className="h-16 opacity-60"
            />
            <p className="text-sm text-muted-foreground text-center max-w-md">
              All activity data is synced from Strava. Join the UnixCraft community to start tracking.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

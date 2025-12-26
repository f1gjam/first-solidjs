import { Layout } from "@/components/layout/Layout";
import { clubs } from "@/data/mockAthletes";
import { Users, MapPin, TrendingUp } from "lucide-react";

export default function Clubs() {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Page Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white">
            <Users className="h-7 w-7" />
          </div>
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold uppercase">
              Clubs
            </h1>
            <p className="text-muted-foreground">
              Explore cycling clubs and their stats
            </p>
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <div
              key={club.id}
              className="rounded-2xl border border-border bg-card p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  #{index + 1}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold mb-2">{club.name}</h3>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                {club.location}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-2xl font-bold text-primary">{club.members}</p>
                  <p className="text-xs text-muted-foreground">Members</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{(club.totalDistance / 1000).toFixed(0)}k</p>
                  <p className="text-xs text-muted-foreground">Total km</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{club.avgDistance.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Avg km</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

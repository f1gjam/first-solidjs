import React, { useEffect, useState } from 'react';
import { Award, TrendingUp, Mountain, Activity } from 'lucide-react';

interface TopAthlete {
  Name: string;
  Value: number;
}

interface YearlyLeaderData {
  Male: {
    TopAthleteTotalOutdoorDistance: TopAthlete;
    TopAthleteTotalIndoorDistance: TopAthlete;
    TopAthleteTotalDistance: TopAthlete;
    TopAthleteTotalOutdoorElevation: TopAthlete;
    TopAthleteTotalIndoorElevation: TopAthlete;
    TopAthleteTotalElevation: TopAthlete;
    TopAthleteSingleOutdoorRide: TopAthlete;
    TopAthleteSingleIndoorRide: TopAthlete;
    TopAthleteSingleIndoorElevation: TopAthlete;
    TopAthleteSingleOutdoorElevation: TopAthlete;
  };
}

const MensYearlyLeaderboard: React.FC = () => {
  const [leaderData, setLeaderData] = useState<YearlyLeaderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.unixcraft.dev/dataapi/rider_yearly_totals');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setLeaderData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!leaderData) return null;

  const { Male } = leaderData;

  const LeaderCard = ({ title, athlete, icon: Icon }: { title: string; athlete: TopAthlete; icon: any }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-orange-500 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="border-t pt-4">
        <p className="text-gray-600 text-sm mb-2">Leader</p>
        <p className="font-bold text-gray-900 mb-2">{athlete.Name}</p>
        <p className="text-2xl font-bold text-orange-500">
          {athlete.Value.toLocaleString('en-US', { maximumFractionDigits: 2 })}
          <span className="text-sm text-gray-500 ml-2">
            {title.includes('Distance') ? 'km' : title.includes('Elevation') ? 'm' : ''}
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Men's Yearly Leaders</h1>
          <p className="text-gray-600">Top performers of the year</p>
        </div>

        {/* Distance Leaders */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-orange-500" />
            Distance Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LeaderCard
              title="Total Distance"
              athlete={Male.TopAthleteTotalDistance}
              icon={TrendingUp}
            />
            <LeaderCard
              title="Outdoor Distance"
              athlete={Male.TopAthleteTotalOutdoorDistance}
              icon={Activity}
            />
            <LeaderCard
              title="Indoor Distance"
              athlete={Male.TopAthleteTotalIndoorDistance}
              icon={Activity}
            />
          </div>
        </div>

        {/* Elevation Leaders */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Mountain className="w-6 h-6 mr-2 text-orange-500" />
            Elevation Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LeaderCard
              title="Total Elevation"
              athlete={Male.TopAthleteTotalElevation}
              icon={Mountain}
            />
            <LeaderCard
              title="Outdoor Elevation"
              athlete={Male.TopAthleteTotalOutdoorElevation}
              icon={Mountain}
            />
            <LeaderCard
              title="Indoor Elevation"
              athlete={Male.TopAthleteTotalIndoorElevation}
              icon={Mountain}
            />
          </div>
        </div>

        {/* Single Activity Leaders */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Award className="w-6 h-6 mr-2 text-orange-500" />
            Single Activity Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LeaderCard
              title="Longest Outdoor Ride"
              athlete={Male.TopAthleteSingleOutdoorRide}
              icon={Award}
            />
            <LeaderCard
              title="Longest Indoor Ride"
              athlete={Male.TopAthleteSingleIndoorRide}
              icon={Award}
            />
            <LeaderCard
              title="Highest Outdoor Climb"
              athlete={Male.TopAthleteSingleOutdoorElevation}
              icon={Award}
            />
            <LeaderCard
              title="Highest Indoor Climb"
              athlete={Male.TopAthleteSingleIndoorElevation}
              icon={Award}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensYearlyLeaderboard;

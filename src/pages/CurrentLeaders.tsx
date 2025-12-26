import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface TopAthlete {
  Name: string;
  Value: string;
}

interface LeaderData {
  TopAthleteTotalDistance: TopAthlete;
  TopAthleteTotalOutdoorDistance: TopAthlete;
  TopAthleteTotalIndoorDistance: TopAthlete;
  TopAthleteTotalElevation: TopAthlete;
  TopAthleteTotalOutdoorElevation: TopAthlete;
  TopAthleteTotalIndoorElevation: TopAthlete;
  TopSingleOutdoorRide: TopAthlete;
  TopSingleIndoorRide: TopAthlete;
  TopSingleOutdoorElevation: TopAthlete;
  TopSingleIndoorElevation: TopAthlete;
}

interface ApiResponse {
  Male: LeaderData;
  Female: LeaderData;
  MaleRunning: LeaderData;
  FemaleRunning: LeaderData;
}

const CurrentLeaders: React.FC = () => {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState('');
  const [mensData, setMensData] = useState<LeaderData | null>(null);
  const [womensData, setWomensData] = useState<LeaderData | null>(null);
  const [mensRunningData, setMensRunningData] = useState<LeaderData | null>(null);
  const [womensRunningData, setWomensRunningData] = useState<LeaderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const monthName = now.toLocaleString('default', { month: 'long', year: 'numeric' });
    setCurrentMonth(monthName);
    fetchLeaderData();
  }, []);

  const fetchLeaderData = async () => {
    try {
      setLoading(true);
      const apiUrl = process.env.REACT_APP_API_URL || 'https://www.unixcraft.dev';
      const response = await fetch(`${apiUrl}/dataapi/rider_totals`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch leader data');
      }

      const data: ApiResponse = await response.json();
      setMensData(data.Male);
      setWomensData(data.Female);
      setMensRunningData(data.MaleRunning);
      setWomensRunningData(data.FemaleRunning);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const LeaderCard: React.FC<{ title: string; athlete: TopAthlete }> = ({ title, athlete }) => (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-sm font-semibold text-gray-600 mb-2">{title}</h3>
      <p className="text-lg font-bold text-blue-600">{athlete?.Name || 'N/A'}</p>
      <p className="text-gray-700">{athlete?.Value || 'N/A'}</p>
    </div>
  );

  const LeaderSection: React.FC<{ title: string; data: LeaderData | null; categoryType: string }> = ({ 
    title, 
    data,
    categoryType 
  }) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
        {title}
      </h2>
      
      {data && (
        <>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Distance Leaders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <LeaderCard title="Total Distance" athlete={data.TopAthleteTotalDistance} />
            <LeaderCard title="Total Outdoor Distance" athlete={data.TopAthleteTotalOutdoorDistance} />
            <LeaderCard title="Total Indoor Distance" athlete={data.TopAthleteTotalIndoorDistance} />
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-4">Elevation Leaders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <LeaderCard title="Total Elevation" athlete={data.TopAthleteTotalElevation} />
            <LeaderCard title="Total Outdoor Elevation" athlete={data.TopAthleteTotalOutdoorElevation} />
            <LeaderCard title="Total Indoor Elevation" athlete={data.TopAthleteTotalIndoorElevation} />
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-4">Single Activity Leaders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <LeaderCard title="Single Outdoor Ride" athlete={data.TopSingleOutdoorRide} />
            <LeaderCard title="Single Indoor Ride" athlete={data.TopSingleIndoorRide} />
            <LeaderCard title="Single Outdoor Elevation" athlete={data.TopSingleOutdoorElevation} />
            <LeaderCard title="Single Indoor Elevation" athlete={data.TopSingleIndoorElevation} />
          </div>
        </>
      )}
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading current leaders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-xl font-bold text-red-800 mb-2">Error</h2>
          <p className="text-red-600">{error}</p>
          <button 
            onClick={fetchLeaderData}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold mb-2">Current Month Leaders</h1>
          <p className="text-blue-100 text-lg">{currentMonth}</p>
          <p className="text-blue-200 mt-2">
            Top performers across all categories for the current month
          </p>
        </div>

        {/* Mens Cycling */}
        <LeaderSection 
          title="🚴‍♂️ Men's Cycling Leaders" 
          data={mensData} 
          categoryType="cycling"
        />

        {/* Womens Cycling */}
        <LeaderSection 
          title="🚴‍♀️ Women's Cycling Leaders" 
          data={womensData} 
          categoryType="cycling"
        />

        {/* Mens Running */}
        <LeaderSection 
          title="🏃‍♂️ Men's Running Leaders" 
          data={mensRunningData} 
          categoryType="running"
        />

        {/* Womens Running */}
        <LeaderSection 
          title="🏃‍♀️ Women's Running Leaders" 
          data={womensRunningData} 
          categoryType="running"
        />

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            ← Back to Leaderboards
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentLeaders;

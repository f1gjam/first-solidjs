import React from 'react';
import TopAthleteTable from './TopAthleteTable';

const WomensRunningMonthlyLeaderboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Women's Monthly Running Leaders</h1>
      <TopAthleteTable 
        apiEndpoint={`${process.env.REACT_APP_API_URL || 'https://www.unixcraft.dev'}/api/female_running_monthly_summary`}
        title="Monthly Running Leaders"
      />
    </div>
  );
};

export default WomensRunningMonthlyLeaderboard;

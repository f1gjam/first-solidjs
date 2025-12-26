import React from 'react';
import FemaleRunningTable from './femaleRunningTable';

const WomensRunningLeaderboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Women's Running Leaderboard</h1>
      <FemaleRunningTable />
    </div>
  );
};

export default WomensRunningLeaderboard;

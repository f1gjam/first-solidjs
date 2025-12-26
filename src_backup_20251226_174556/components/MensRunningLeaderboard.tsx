import React from 'react';
import MaleRunningTable from './maleRunningTable';

const MensRunningLeaderboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Men's Running Leaderboard</h1>
      <MaleRunningTable />
    </div>
  );
};

export default MensRunningLeaderboard;

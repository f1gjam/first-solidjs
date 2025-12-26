import React from 'react';
import MaleTable from './maleTable';

const MensLeaderboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Men's Cycling Leaderboard</h1>
      <MaleTable />
    </div>
  );
};

export default MensLeaderboard;

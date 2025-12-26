import React from 'react';
import FemaleTable from './femaleTable';

const WomensLeaderboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Women's Cycling Leaderboard</h1>
      <FemaleTable />
    </div>
  );
};

export default WomensLeaderboard;

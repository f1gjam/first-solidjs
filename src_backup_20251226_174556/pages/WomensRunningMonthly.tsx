import React from 'react';
import { FemaleRunningTable } from '../components/femaleRunningTable';

export const WomensRunningMonthly: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-pink-600 to-pink-800 rounded-lg shadow-lg p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold mb-2">🏃‍♀️ Women's Running - Monthly Leaderboard</h1>
          <p className="text-pink-100 text-lg">Track monthly running achievements and compete with fellow runners</p>
        </div>
        <FemaleRunningTable />
      </div>
    </div>
  );
};

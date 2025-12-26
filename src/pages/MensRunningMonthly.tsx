import React from 'react';
import { MaleRunningTable } from '../components/maleRunningTable';

export const MensRunningMonthly: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-lg p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold mb-2">🏃‍♂️ Men's Running - Monthly Leaderboard</h1>
          <p className="text-green-100 text-lg">Track monthly running achievements and compete with fellow runners</p>
        </div>
        <MaleRunningTable />
      </div>
    </div>
  );
};

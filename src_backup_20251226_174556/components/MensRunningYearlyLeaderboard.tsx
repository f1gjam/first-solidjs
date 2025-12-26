import React from 'react';
import LeaderboardTable from './LeaderboardTable';

const MensRunningYearlyLeaderboard: React.FC = () => {
  return <LeaderboardTable endpoint="/api/yearly_mens_running_leaders" title="Men's Yearly Running Leaders" />;
};

export default MensRunningYearlyLeaderboard;

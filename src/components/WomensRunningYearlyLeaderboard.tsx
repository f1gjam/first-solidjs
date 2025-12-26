import React from 'react';
import LeaderboardTable from './LeaderboardTable';

const WomensRunningYearlyLeaderboard: React.FC = () => {
  return <LeaderboardTable endpoint="/api/yearly_womens_running_leaders" title="Women's Yearly Running Leaders" />;
};

export default WomensRunningYearlyLeaderboard;

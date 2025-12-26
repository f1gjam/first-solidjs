import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://www.unixcraft.dev';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface AthleteData {
  AthleteID: number;
  AthleteName: string;
  AthleteSex: string;
  OutdoorDistances?: number[];
  IndoorDistances?: number[];
  OutdoorRideTimeInSeconds?: number[];
  IndoorRideTimeInSeconds?: number[];
  OutdoorElapsedTimeInSeconds?: number[];
  IndoorElapsedTimeInSeconds?: number[];
  TotalOutdoorRideTimeInSeconds: number;
  TotalIndoorRideTimeInSeconds: number;
  TotalOutdoorElapsedTimeInSeconds: number;
  TotalIndoorElapsedTimeInSeconds: number;
  TotalOutdoorDistance: number;
  TotalIndoorDistance: number;
  TotalDistance: number;
  OutdoorElevations?: number[];
  IndoorElevations?: number[];
  TotalOutdoorElevation: number;
  TotalIndoorElevation: number;
  TotalElevation: number;
  PercentIndoor: number;
  TopOutdoorRide: number;
  TopIndoorRide: number;
  TopIndoorElevation: number;
  TopOutdoorElevation: number;
  LongestOutdoorRide: number;
  LongestIndoorRide: number;
  HighestOutdoorElevation: number;
  HighestIndoorElevation: number;
}

export const api = {
  // Get yearly/all-time leaderboard data (this is the main endpoint)
  getYearlyLeaderboard: async (): Promise<AthleteData[]> => {
    const response = await apiClient.get('/dataapi/rider_yearly_totals');
    return response.data;
  },

  // Weekly and monthly use the same yearly data for now
  // TODO: Update when backend has separate weekly/monthly endpoints
  getWeeklyLeaderboard: async (): Promise<AthleteData[]> => {
    const response = await apiClient.get('/dataapi/rider_yearly_totals');
    return response.data;
  },

  getMonthlyLeaderboard: async (): Promise<AthleteData[]> => {
    const response = await apiClient.get('/dataapi/rider_yearly_totals');
    return response.data;
  },
};

export const convertAthleteDataToTableFormat = (athletes: AthleteData[], sport: 'cycling' | 'running' = 'cycling') => {
  return athletes.map((athlete, index) => {
    const totalTime = athlete.TotalOutdoorRideTimeInSeconds + athlete.TotalIndoorRideTimeInSeconds;
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const avgSpeed = totalTime > 0 ? (athlete.TotalDistance / (totalTime / 3600)) : 0;
    
    return {
      rank: index + 1,
      name: athlete.AthleteName,
      gender: athlete.AthleteSex === 'M' ? 'male' as const : 'female' as const,
      sport,
      distance: Math.round(athlete.TotalDistance),
      elevation: Math.round(athlete.TotalElevation),
      time: `${hours}h ${minutes}m`,
      activities: (athlete.OutdoorDistances?.length || 0) + (athlete.IndoorDistances?.length || 0),
      avgSpeed: parseFloat(avgSpeed.toFixed(1)),
      longestRide: Math.round(Math.max(athlete.LongestOutdoorRide, athlete.LongestIndoorRide)),
    };
  });
};

export default api;

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

export interface LeaderboardResponse {
  Male?: {
    MaleSorted?: AthleteData[];
  };
  Female?: {
    FemaleSorted?: AthleteData[];
  };
  MaleSorted?: AthleteData[];
  FemaleSorted?: AthleteData[];
}

export const api = {
  getWeeklyLeaderboard: async (): Promise<LeaderboardResponse> => {
    const response = await apiClient.get('/api/weekly');
    return response.data;
  },

  getMonthlyLeaderboard: async (): Promise<LeaderboardResponse> => {
    const response = await apiClient.get('/api/monthly');
    return response.data;
  },

  getYearlyLeaderboard: async (): Promise<LeaderboardResponse> => {
    const response = await apiClient.get('/api/yearly');
    return response.data;
  },

  getCustomLeaderboard: async (startDate: string, endDate: string): Promise<LeaderboardResponse> => {
    const response = await apiClient.get('/api/custom', {
      params: { startDate, endDate },
    });
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

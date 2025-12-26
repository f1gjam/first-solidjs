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

// Helper to get current month in "January-2025" format
const getCurrentMonth = () => {
  const date = new Date();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  return `${month}-${year}`;
};

// Helper to get current year in "January-2025" format
const getCurrentYear = () => {
  const year = new Date().getFullYear();
  return `January-${year}`;
};

export interface LeaderboardResponse {
  Male?: any;
  MaleSorted?: AthleteData[];
  Female?: any;
  FemaleSorted?: AthleteData[];
}

export const api = {
  // Get monthly rider totals (cycling)
  // monthSelected format: "December-2025" (optional, defaults to current month)
  getMonthlyRiderTotals: async (monthSelected?: string): Promise<AthleteData[]> => {
    const params = monthSelected ? { monthSelected } : { monthSelected: getCurrentMonth() };
    const response = await apiClient.get<LeaderboardResponse>('/dataapi/rider_totals', { params });
    
    // Combine male and female athletes from the response
    const maleAthletes = response.data.MaleSorted || [];
    const femaleAthletes = response.data.FemaleSorted || [];
    return [...maleAthletes, ...femaleAthletes];
  },

  // Get yearly rider totals (cycling) 
  // monthSelected format: "January-2025" (optional, defaults to current year)
  getYearlyRiderTotals: async (monthSelected?: string): Promise<AthleteData[]> => {
    const params = monthSelected ? { monthSelected } : { monthSelected: getCurrentYear() };
    const response = await apiClient.get<LeaderboardResponse>('/dataapi/rider_yearly_totals', { params });
    
    // Combine male and female athletes from the response
    const maleAthletes = response.data.MaleSorted || [];
    const femaleAthletes = response.data.FemaleSorted || [];
    return [...maleAthletes, ...femaleAthletes];
  },

  // Get monthly runner totals (running)
  // Backend GetRunnerTotals uses default month if not provided
  getMonthlyRunnerTotals: async (monthSelected?: string): Promise<AthleteData[]> => {
    const params = monthSelected ? { monthSelected } : {};
    const response = await apiClient.get<LeaderboardResponse>('/dataapi/runner_totals', { params });
    
    // Combine male and female athletes from the response
    const maleAthletes = response.data.MaleSorted || [];
    const femaleAthletes = response.data.FemaleSorted || [];
    return [...maleAthletes, ...femaleAthletes];
  },

  // Get yearly runner totals (running)
  getYearlyRunnerTotals: async (monthSelected?: string): Promise<AthleteData[]> => {
    const params = monthSelected ? { monthSelected } : { monthSelected: getCurrentYear() };
    const response = await apiClient.get<LeaderboardResponse>('/dataapi/runner_yearly_totals', { params });
    
    // Combine male and female athletes from the response
    const maleAthletes = response.data.MaleSorted || [];
    const femaleAthletes = response.data.FemaleSorted || [];
    return [...maleAthletes, ...femaleAthletes];
  },

  // Weekly leaderboard - use current month data
  getWeeklyLeaderboard: async (): Promise<AthleteData[]> => {
    return api.getMonthlyRiderTotals();
  },

  // Monthly leaderboard
  getMonthlyLeaderboard: async (): Promise<AthleteData[]> => {
    return api.getMonthlyRiderTotals();
  },

  // Yearly/All-time leaderboard
  getYearlyLeaderboard: async (): Promise<AthleteData[]> => {
    return api.getYearlyRiderTotals();
  },
};

export const convertAthleteDataToTableFormat = (athletes: AthleteData[], sport: 'cycling' | 'running' = 'cycling') => {
  return athletes.map((athlete, index) => {
    const totalTime = athlete.TotalOutdoorRideTimeInSeconds + athlete.TotalIndoorRideTimeInSeconds;
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    
    // Convert km to miles (1 km = 0.621371 miles)
    const totalDistanceMiles = athlete.TotalDistance * 0.621371;
    const avgSpeed = totalTime > 0 ? (totalDistanceMiles / (totalTime / 3600)) : 0;
    const longestRideMiles = Math.max(athlete.LongestOutdoorRide, athlete.LongestIndoorRide) * 0.621371;
    
    return {
      rank: index + 1,
      name: athlete.AthleteName,
      gender: athlete.AthleteSex === 'M' ? 'male' as const : 'female' as const,
      sport,
      distance: Math.round(totalDistanceMiles),
      elevation: Math.round(athlete.TotalElevation),
      time: `${hours}h ${minutes}m`,
      activities: (athlete.OutdoorDistances?.length || 0) + (athlete.IndoorDistances?.length || 0),
      avgSpeed: parseFloat(avgSpeed.toFixed(1)),
      longestRide: Math.round(longestRideMiles),
    };
  });
};

export default api;

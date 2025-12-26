import { Athlete } from "@/components/leaderboard/LeaderboardTable";

export const weeklyAthletes: Athlete[] = [
  // Male Cycling
  { rank: 1, name: "Marcus Johnson", gender: "male", sport: "cycling", distance: 412, elevation: 5840, time: "18h 32m", activities: 12, avgSpeed: 28.4, longestRide: 85 },
  { rank: 2, name: "James Rodriguez", gender: "male", sport: "cycling", distance: 358, elevation: 6120, time: "15h 20m", activities: 8, avgSpeed: 26.5, longestRide: 95 },
  { rank: 3, name: "David Kim", gender: "male", sport: "cycling", distance: 318, elevation: 4200, time: "13h 40m", activities: 9, avgSpeed: 27.1, longestRide: 78 },
  { rank: 4, name: "Michael Brown", gender: "male", sport: "cycling", distance: 278, elevation: 3200, time: "11h 50m", activities: 7, avgSpeed: 25.9, longestRide: 68 },
  { rank: 5, name: "Chris Wilson", gender: "male", sport: "cycling", distance: 234, elevation: 2750, time: "9h 45m", activities: 6, avgSpeed: 24.8, longestRide: 72 },
  { rank: 6, name: "Robert Taylor", gender: "male", sport: "cycling", distance: 195, elevation: 2150, time: "8h 20m", activities: 5, avgSpeed: 25.2, longestRide: 58 },
  // Female Cycling
  { rank: 1, name: "Sarah Chen", gender: "female", sport: "cycling", distance: 385, elevation: 4920, time: "16h 45m", activities: 10, avgSpeed: 27.8, longestRide: 72 },
  { rank: 2, name: "Emily Watson", gender: "female", sport: "cycling", distance: 342, elevation: 3850, time: "14h 55m", activities: 11, avgSpeed: 29.2, longestRide: 62 },
  { rank: 3, name: "Lisa Thompson", gender: "female", sport: "cycling", distance: 295, elevation: 3650, time: "12h 15m", activities: 8, avgSpeed: 26.8, longestRide: 55 },
  { rank: 4, name: "Anna Martinez", gender: "female", sport: "cycling", distance: 256, elevation: 2980, time: "10h 30m", activities: 9, avgSpeed: 28.1, longestRide: 48 },
  { rank: 5, name: "Jessica Lee", gender: "female", sport: "cycling", distance: 218, elevation: 2400, time: "9h 10m", activities: 8, avgSpeed: 27.5, longestRide: 45 },
  { rank: 6, name: "Amanda Garcia", gender: "female", sport: "cycling", distance: 178, elevation: 1980, time: "7h 40m", activities: 6, avgSpeed: 26.4, longestRide: 42 },
  // Male Running
  { rank: 1, name: "Tom Harris", gender: "male", sport: "running", distance: 85, elevation: 1240, time: "8h 15m", activities: 14, avgSpeed: 10.3, longestRide: 21 },
  { rank: 2, name: "Kevin Moore", gender: "male", sport: "running", distance: 72, elevation: 980, time: "6h 50m", activities: 12, avgSpeed: 10.5, longestRide: 18 },
  { rank: 3, name: "Brian Clark", gender: "male", sport: "running", distance: 65, elevation: 720, time: "6h 10m", activities: 10, avgSpeed: 10.6, longestRide: 15 },
  { rank: 4, name: "Andrew White", gender: "male", sport: "running", distance: 58, elevation: 650, time: "5h 30m", activities: 9, avgSpeed: 10.4, longestRide: 14 },
  { rank: 5, name: "Daniel Lewis", gender: "male", sport: "running", distance: 52, elevation: 580, time: "5h 05m", activities: 8, avgSpeed: 10.2, longestRide: 13 },
  // Female Running
  { rank: 1, name: "Rachel Adams", gender: "female", sport: "running", distance: 78, elevation: 1050, time: "7h 45m", activities: 13, avgSpeed: 10.1, longestRide: 19 },
  { rank: 2, name: "Michelle Scott", gender: "female", sport: "running", distance: 68, elevation: 890, time: "6h 30m", activities: 11, avgSpeed: 10.4, longestRide: 17 },
  { rank: 3, name: "Karen Young", gender: "female", sport: "running", distance: 62, elevation: 780, time: "6h 00m", activities: 10, avgSpeed: 10.3, longestRide: 15 },
  { rank: 4, name: "Laura King", gender: "female", sport: "running", distance: 55, elevation: 620, time: "5h 20m", activities: 9, avgSpeed: 10.2, longestRide: 14 },
  { rank: 5, name: "Nicole Wright", gender: "female", sport: "running", distance: 48, elevation: 540, time: "4h 45m", activities: 8, avgSpeed: 10.1, longestRide: 12 },
];

export const monthlyAthletes: Athlete[] = [
  // Male Cycling
  { rank: 1, name: "Marcus Johnson", gender: "male", sport: "cycling", distance: 1856, elevation: 24500, time: "78h 15m", activities: 48, avgSpeed: 28.2, longestRide: 142 },
  { rank: 2, name: "James Rodriguez", gender: "male", sport: "cycling", distance: 1724, elevation: 28400, time: "72h 30m", activities: 42, avgSpeed: 26.8, longestRide: 165 },
  { rank: 3, name: "David Kim", gender: "male", sport: "cycling", distance: 1520, elevation: 19800, time: "62h 20m", activities: 38, avgSpeed: 27.0, longestRide: 118 },
  { rank: 4, name: "Michael Brown", gender: "male", sport: "cycling", distance: 1320, elevation: 15200, time: "54h 10m", activities: 35, avgSpeed: 26.2, longestRide: 108 },
  { rank: 5, name: "Chris Wilson", gender: "male", sport: "cycling", distance: 1180, elevation: 13500, time: "48h 15m", activities: 32, avgSpeed: 25.5, longestRide: 102 },
  // Female Cycling
  { rank: 1, name: "Sarah Chen", gender: "female", sport: "cycling", distance: 1645, elevation: 21200, time: "68h 45m", activities: 45, avgSpeed: 27.5, longestRide: 128 },
  { rank: 2, name: "Emily Watson", gender: "female", sport: "cycling", distance: 1485, elevation: 16500, time: "58h 55m", activities: 44, avgSpeed: 29.0, longestRide: 95 },
  { rank: 3, name: "Lisa Thompson", gender: "female", sport: "cycling", distance: 1245, elevation: 14800, time: "50h 25m", activities: 36, avgSpeed: 26.5, longestRide: 88 },
  { rank: 4, name: "Anna Martinez", gender: "female", sport: "cycling", distance: 1095, elevation: 12200, time: "44h 30m", activities: 38, avgSpeed: 27.8, longestRide: 75 },
  { rank: 5, name: "Jessica Lee", gender: "female", sport: "cycling", distance: 985, elevation: 10800, time: "40h 45m", activities: 34, avgSpeed: 27.2, longestRide: 82 },
  // Male Running
  { rank: 1, name: "Tom Harris", gender: "male", sport: "running", distance: 320, elevation: 4850, time: "32h 00m", activities: 52, avgSpeed: 10.0, longestRide: 42 },
  { rank: 2, name: "Kevin Moore", gender: "male", sport: "running", distance: 285, elevation: 3920, time: "28h 15m", activities: 45, avgSpeed: 10.2, longestRide: 38 },
  { rank: 3, name: "Brian Clark", gender: "male", sport: "running", distance: 255, elevation: 3200, time: "25h 30m", activities: 40, avgSpeed: 10.1, longestRide: 35 },
  { rank: 4, name: "Andrew White", gender: "male", sport: "running", distance: 228, elevation: 2850, time: "22h 45m", activities: 36, avgSpeed: 10.0, longestRide: 32 },
  // Female Running
  { rank: 1, name: "Rachel Adams", gender: "female", sport: "running", distance: 295, elevation: 4200, time: "29h 30m", activities: 48, avgSpeed: 10.0, longestRide: 40 },
  { rank: 2, name: "Michelle Scott", gender: "female", sport: "running", distance: 268, elevation: 3650, time: "26h 45m", activities: 44, avgSpeed: 10.1, longestRide: 36 },
  { rank: 3, name: "Karen Young", gender: "female", sport: "running", distance: 235, elevation: 3100, time: "23h 30m", activities: 38, avgSpeed: 10.0, longestRide: 33 },
  { rank: 4, name: "Laura King", gender: "female", sport: "running", distance: 205, elevation: 2650, time: "20h 30m", activities: 34, avgSpeed: 10.0, longestRide: 30 },
];

export const allTimeAthletes: Athlete[] = [
  // Male Cycling
  { rank: 1, name: "Marcus Johnson", gender: "male", sport: "cycling", distance: 28450, elevation: 385000, time: "1,245h", activities: 856, avgSpeed: 27.8, longestRide: 285 },
  { rank: 2, name: "James Rodriguez", gender: "male", sport: "cycling", distance: 26800, elevation: 420000, time: "1,180h", activities: 724, avgSpeed: 26.5, longestRide: 312 },
  { rank: 3, name: "David Kim", gender: "male", sport: "cycling", distance: 22800, elevation: 295000, time: "985h", activities: 685, avgSpeed: 26.8, longestRide: 228 },
  { rank: 4, name: "Michael Brown", gender: "male", sport: "cycling", distance: 21200, elevation: 268000, time: "920h", activities: 642, avgSpeed: 26.0, longestRide: 195 },
  { rank: 5, name: "Chris Wilson", gender: "male", sport: "cycling", distance: 17200, elevation: 198000, time: "725h", activities: 548, avgSpeed: 25.8, longestRide: 188 },
  { rank: 6, name: "Robert Taylor", gender: "male", sport: "cycling", distance: 14500, elevation: 162000, time: "608h", activities: 485, avgSpeed: 25.5, longestRide: 158 },
  // Female Cycling
  { rank: 1, name: "Sarah Chen", gender: "female", sport: "cycling", distance: 24500, elevation: 312000, time: "1,050h", activities: 812, avgSpeed: 27.2, longestRide: 245 },
  { rank: 2, name: "Emily Watson", gender: "female", sport: "cycling", distance: 19800, elevation: 225000, time: "845h", activities: 728, avgSpeed: 28.5, longestRide: 178 },
  { rank: 3, name: "Lisa Thompson", gender: "female", sport: "cycling", distance: 18500, elevation: 218000, time: "785h", activities: 612, avgSpeed: 26.2, longestRide: 165 },
  { rank: 4, name: "Anna Martinez", gender: "female", sport: "cycling", distance: 15800, elevation: 175000, time: "658h", activities: 592, avgSpeed: 27.5, longestRide: 145 },
  // Male Running
  { rank: 1, name: "Tom Harris", gender: "male", sport: "running", distance: 8500, elevation: 98000, time: "850h", activities: 1245, avgSpeed: 10.0, longestRide: 85 },
  { rank: 2, name: "Kevin Moore", gender: "male", sport: "running", distance: 7200, elevation: 82000, time: "720h", activities: 1050, avgSpeed: 10.1, longestRide: 78 },
  { rank: 3, name: "Brian Clark", gender: "male", sport: "running", distance: 6500, elevation: 72000, time: "650h", activities: 945, avgSpeed: 10.0, longestRide: 72 },
  { rank: 4, name: "Andrew White", gender: "male", sport: "running", distance: 5800, elevation: 65000, time: "580h", activities: 865, avgSpeed: 10.0, longestRide: 68 },
  // Female Running
  { rank: 1, name: "Rachel Adams", gender: "female", sport: "running", distance: 7800, elevation: 89000, time: "780h", activities: 1180, avgSpeed: 10.0, longestRide: 80 },
  { rank: 2, name: "Michelle Scott", gender: "female", sport: "running", distance: 6800, elevation: 78000, time: "680h", activities: 1020, avgSpeed: 10.0, longestRide: 75 },
  { rank: 3, name: "Karen Young", gender: "female", sport: "running", distance: 6100, elevation: 68000, time: "610h", activities: 920, avgSpeed: 10.0, longestRide: 70 },
  { rank: 4, name: "Laura King", gender: "female", sport: "running", distance: 5400, elevation: 60000, time: "540h", activities: 820, avgSpeed: 10.0, longestRide: 65 },
];

export const clubs = [
  { id: 1, name: "Mountain Crushers", members: 245, totalDistance: 458000, avgDistance: 1870, location: "Colorado, USA" },
  { id: 2, name: "Coastal Riders", members: 189, totalDistance: 385000, avgDistance: 2037, location: "California, USA" },
  { id: 3, name: "Alpine Warriors", members: 156, totalDistance: 312000, avgDistance: 2000, location: "Swiss Alps" },
  { id: 4, name: "City Sprinters", members: 312, totalDistance: 425000, avgDistance: 1362, location: "New York, USA" },
  { id: 5, name: "Desert Hawks", members: 98, totalDistance: 198000, avgDistance: 2020, location: "Arizona, USA" },
  { id: 6, name: "Nordic Cyclists", members: 134, totalDistance: 278000, avgDistance: 2074, location: "Oslo, Norway" },
];

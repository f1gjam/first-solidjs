import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Activity {
  id: number;
  athlete_name: string;
  activity_name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  average_speed: number;
  max_speed: number;
  start_date: string;
  type: string;
}

const SingleActivity: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || 'https://www.unixcraft.dev';
        const response = await axios.get(`${apiUrl}/api/activities`);
        setActivities(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load activities');
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) return <div className="text-center py-8">Loading activities...</div>;
  if (error) return <div className="text-center py-8 text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Recent Activities</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Athlete</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance (km)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activities.map((activity) => (
                <tr key={activity.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{activity.athlete_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.activity_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{(activity.distance / 1000).toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(activity.start_date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SingleActivity;

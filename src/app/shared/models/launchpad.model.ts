export interface LaunchpadModel {
  name: string;
  full_name: string;
  status: string;
  locality: string;
  region: string;
  timezone: string;
  latitude: number;
  longitude: number;
  launch_attempts: number;
  launch_successes: number;
  rockets: string;
  launches: string;
}

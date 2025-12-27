import { Layout } from "@/components/layout/Layout";
import { BookOpen, ExternalLink, HelpCircle, UserPlus, UserMinus, Activity, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <Layout>
      <div className="container py-8 md:py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">
            Strava Club Stats
          </h1>
          <p className="text-xl text-muted-foreground">
            Track your cycling and running activities • Compete with club members • View leaderboards
          </p>
        </div>

        {/* App Overview */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            About This App
          </h2>
          <p className="text-muted-foreground mb-4">
            This web application automatically fetches your cycling and running activities from Strava and displays them on various leaderboards. 
            You can view monthly, yearly, and all-time statistics, compare your performance with other club members, and track your progress over time.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Leaderboards Available
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Monthly Rankings (Cycling & Running)</li>
                <li>• Yearly Rankings (Cycling & Running)</li>
                <li>• Top Monthly Performers by Category</li>
                <li>• Top Yearly Performers by Category</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-500" />
                Tracked Statistics
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Total Distance (Indoor & Outdoor)</li>
                <li>• Total Elevation Gain</li>
                <li>• Longest Rides/Runs</li>
                <li>• Activity Counts & Time</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link
            to="/register"
            className="group block p-6 rounded-xl border border-border bg-card hover:border-primary transition-all hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center">
                <UserPlus className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Register Now</h3>
                <p className="text-muted-foreground text-sm">
                  Connect your Strava account to join the leaderboard and start tracking your stats
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="/"
            className="group block p-6 rounded-xl border border-border bg-card hover:border-primary transition-all hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">View Leaderboards</h3>
                <p className="text-muted-foreground text-sm">
                  Check out the latest rankings and see how you compare to other athletes
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-6">
          {/* How to Register */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="p-6 border-b border-border bg-gradient-to-r from-green-500/10 to-emerald-500/10">
              <div className="flex items-center gap-3">
                <UserPlus className="h-6 w-6 text-green-500" />
                <h2 className="text-2xl font-bold">How to Register</h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="mb-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <p className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 mb-2">⚠️ Important Prerequisites</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Your Strava profile <strong className="text-foreground">MUST</strong> have gender set to Male or Female</li>
                  <li>• You must be a member of the Strava club</li>
                  <li>• You need to grant <strong className="text-foreground">ALL permissions</strong> during authorization</li>
                </ul>
              </div>

              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Visit the Registration Page</span>
                  <p className="ml-6 mt-1 text-sm">Navigate to the Register page by clicking the "Register" button in the menu</p>
                  <div className="ml-6 mt-2 p-3 rounded bg-muted/50 text-sm">
                    <img src="/help-images/register-button.png" alt="Register Button" className="rounded border border-border max-w-md" />
                  </div>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Check Your Strava Profile</span>
                  <p className="ml-6 mt-1 text-sm">Verify your gender is set to Male or Female in Strava settings (Settings → My Account → Gender)</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Click "Connect with Strava"</span>
                  <p className="ml-6 mt-1 text-sm">Click the orange "Connect with Strava" button on the registration page</p>
                  <div className="ml-6 mt-2 p-3 rounded bg-muted/50 text-sm">
                    <img src="/help-images/connect-button.png" alt="Connect Button" className="rounded border border-border max-w-md" />
                  </div>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-red-400">⚠️ Grant ALL Permissions (CRITICAL!)</span>
                  <p className="ml-6 mt-1 text-sm text-red-400">
                    On Strava's authorization page, you <strong>MUST tick ALL permission checkboxes</strong>. 
                    The app needs full access to read your activities. Without all permissions, registration will fail!
                  </p>
                  <div className="ml-6 mt-2 p-3 rounded bg-muted/50 text-sm">
                    <img src="/help-images/permissions.png" alt="Permissions" className="rounded border border-border max-w-md" />
                  </div>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Click "Authorize"</span>
                  <p className="ml-6 mt-1 text-sm">After checking all permissions, click the orange "Authorize" button</p>
                  <div className="ml-6 mt-2 p-3 rounded bg-muted/50 text-sm">
                    <img src="/help-images/authorize.png" alt="Authorize" className="rounded border border-border max-w-md" />
                  </div>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-red-400">⏱️ Wait ~30 Seconds</span>
                  <p className="ml-6 mt-1 text-sm text-red-400">
                    <strong>DO NOT click the register button multiple times!</strong> The registration process takes approximately 30 seconds. 
                    Please be patient while your data is being fetched from Strava.
                  </p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Check for Success Message</span>
                  <p className="ml-6 mt-1 text-sm">
                    You'll see a success page if registration worked. If there's an error, read the message carefully for troubleshooting steps.
                  </p>
                  <div className="ml-6 mt-2 p-3 rounded bg-muted/50 text-sm">
                    <img src="/help-images/success.png" alt="Success" className="rounded border border-border max-w-md" />
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* How to Deregister */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="p-6 border-b border-border bg-gradient-to-r from-red-500/10 to-orange-500/10">
              <div className="flex items-center gap-3">
                <UserMinus className="h-6 w-6 text-red-500" />
                <h2 className="text-2xl font-bold">How to Deregister</h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Go to Strava Settings</span>
                  <p className="ml-6 mt-1 text-sm">Log in to Strava.com and click on your profile picture in the top right</p>
                  <div className="ml-6 mt-2 p-3 rounded bg-muted/50 text-sm">
                    <img src="/help-images/settings.png" alt="Settings" className="rounded border border-border max-w-md" />
                  </div>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Navigate to "My Apps"</span>
                  <p className="ml-6 mt-1 text-sm">In the dropdown menu, select "Settings", then click on the "My Apps" tab</p>
                  <div className="ml-6 mt-2 p-3 rounded bg-muted/50 text-sm">
                    <img src="/help-images/my-apps.png" alt="My Apps" className="rounded border border-border max-w-md" />
                  </div>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Find "Strava Club Stats"</span>
                  <p className="ml-6 mt-1 text-sm">Scroll down to find "Strava Club Stats" in your list of authorized applications</p>
                  <div className="ml-6 mt-2 p-3 rounded bg-muted/50 text-sm">
                    <img src="/help-images/find-app.png" alt="Find App" className="rounded border border-border max-w-md" />
                  </div>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Click "Revoke Access"</span>
                  <p className="ml-6 mt-1 text-sm">Click the red "Revoke Access" button next to "Strava Club Stats"</p>
                  <div className="ml-6 mt-2 p-3 rounded bg-muted/50 text-sm">
                    <img src="/help-images/revoke.png" alt="Revoke" className="rounded border border-border max-w-md" />
                  </div>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Confirm Removal</span>
                  <p className="ml-6 mt-1 text-sm">Confirm that you want to remove the app's access to your Strava data</p>
                </li>
              </ol>
              <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> After deregistering, your data will no longer appear on the leaderboards and won't be updated. 
                  You can re-register at any time by following the registration process again.
                </p>
              </div>
            </div>
          </div>

          {/* Understanding the App */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="p-6 border-b border-border bg-gradient-to-r from-purple-500/10 to-blue-500/10">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-purple-500" />
                <h2 className="text-2xl font-bold">Understanding the Statistics</h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Activity Types</h3>
                <ul className="ml-4 text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Cycling:</strong> All bike rides (road, mountain, gravel, etc.)</li>
                  <li>• <strong>Running:</strong> All runs (outdoor and treadmill)</li>
                  <li>• <strong>Indoor vs Outdoor:</strong> Activities are automatically categorized based on GPS data</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Leaderboard Types</h3>
                <ul className="ml-4 text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Monthly:</strong> Rankings based on current month's activities</li>
                  <li>• <strong>Yearly:</strong> Rankings based on current year's activities (January to December)</li>
                  <li>• <strong>Top Monthly/Yearly:</strong> Category leaders (longest ride, most elevation, etc.)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Update Frequency</h3>
                <p className="ml-4 text-sm text-muted-foreground">
                  The leaderboards are updated automatically every few hours. New activities typically appear within 24 hours of completion.
                </p>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="rounded-xl border border-destructive/50 bg-destructive/10 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-destructive" />
              Troubleshooting Common Issues
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">❌ Registration Failed?</p>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li>• <strong>Check gender setting:</strong> Your Strava profile MUST have gender set to Male or Female</li>
                  <li>• <strong>Verify permissions:</strong> You must grant ALL permissions during authorization</li>
                  <li>• <strong>Wait before retrying:</strong> If registration fails, wait at least 60 seconds before trying again</li>
                  <li>• <strong>Clear app access:</strong> Try deregistering from Strava's "My Apps" page, then re-register</li>
                  <li>• <strong>Check club membership:</strong> Make sure you're a member of the Strava club</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground">🔍 Activities Not Showing Up?</p>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li>• <strong>Wait for sync:</strong> New activities can take up to 24 hours to appear</li>
                  <li>• <strong>Check visibility:</strong> Activities must be visible to "Everyone" in Strava privacy settings</li>
                  <li>• <strong>Verify activity type:</strong> Only cycling and running activities are tracked</li>
                  <li>• <strong>Re-register:</strong> If activities never appear, try deregistering and re-registering</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground">📊 Statistics Look Wrong?</p>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li>• <strong>Data freshness:</strong> The leaderboards update every few hours</li>
                  <li>• <strong>Indoor vs Outdoor:</strong> Activities are categorized automatically based on GPS data</li>
                  <li>• <strong>Distance units:</strong> All distances are shown in miles, elevation in meters</li>
                  <li>• <strong>Time zones:</strong> Monthly/yearly calculations use UTC time</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground">🆘 Still Having Problems?</p>
                <p className="ml-4 mt-1 text-sm">
                  If you've tried all the above steps and still experiencing issues, the problem might be on Strava's side. 
                  Wait 24 hours and try again. You can also check the screenshots above for visual guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

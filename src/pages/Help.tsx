import { Layout } from "@/components/layout/Layout";
import { BookOpen, ExternalLink, HelpCircle, UserPlus, UserMinus } from "lucide-react";
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
            Help & Documentation
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about joining and using the leaderboard
          </p>
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
                  Connect your Strava account to join the leaderboard
                </p>
              </div>
            </div>
          </Link>

          <a
            href="https://docs.google.com/document/d/1_Y2q3Xva_S-7F6f55BjQpjzcsw153PiSmCpJOsmgoTc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-xl border border-border bg-card hover:border-primary transition-all hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <ExternalLink className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  View Full Documentation
                  <ExternalLink className="h-4 w-4" />
                </h3>
                <p className="text-muted-foreground text-sm">
                  Open the complete guide in Google Docs
                </p>
              </div>
            </div>
          </a>
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
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Visit the Registration Page</span>
                  <p className="ml-6 mt-1 text-sm">Click the "Register" link in the navigation or visit /register</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Check Your Strava Profile</span>
                  <p className="ml-6 mt-1 text-sm">Make sure your gender is set to Male or Female in your Strava settings</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Click "Connect with Strava"</span>
                  <p className="ml-6 mt-1 text-sm">You'll be redirected to Strava's authorization page</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground text-red-400">Grant ALL Permissions (Critical!)</span>
                  <p className="ml-6 mt-1 text-sm text-red-400">You MUST tick ALL permission boxes. Without full permissions, registration will fail!</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Click "Authorize"</span>
                  <p className="ml-6 mt-1 text-sm">On Strava's page, click the orange "Authorize" button</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground text-red-400">Wait 30 Seconds</span>
                  <p className="ml-6 mt-1 text-sm text-red-400">DO NOT click register multiple times! The page takes ~30 seconds to process</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Check for Success Message</span>
                  <p className="ml-6 mt-1 text-sm">You'll see a success page if registration worked, or an error message if something went wrong</p>
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
                  <p className="ml-6 mt-1 text-sm">Log in to Strava.com and click on your profile picture</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Navigate to "My Apps"</span>
                  <p className="ml-6 mt-1 text-sm">In the dropdown menu, select "Settings", then click "My Apps"</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Find "Strava Club Stats"</span>
                  <p className="ml-6 mt-1 text-sm">Look for the app in your list of authorized applications</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Click "Revoke Access"</span>
                  <p className="ml-6 mt-1 text-sm">Click the "Revoke Access" button next to the app name</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Confirm Removal</span>
                  <p className="ml-6 mt-1 text-sm">Confirm that you want to remove the app's access to your data</p>
                </li>
              </ol>
              <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> After deregistering, your data will no longer appear on the leaderboards. 
                  You can re-register at any time by following the registration steps again.
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Documentation */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="p-6 border-b border-border bg-gradient-to-r from-blue-500/10 to-purple-500/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                  <h2 className="text-2xl font-bold">Complete Guide with Screenshots</h2>
                </div>
                <a
                  href="https://docs.google.com/document/d/1_Y2q3Xva_S-7F6f55BjQpjzcsw153PiSmCpJOsmgoTc/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open Full Screen
                </a>
              </div>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '141.42%' }}>
              <iframe
                src="https://docs.google.com/document/d/1_Y2q3Xva_S-7F6f55BjQpjzcsw153PiSmCpJOsmgoTc/preview"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 'none' }}
                title="Registration Documentation with Screenshots"
              />
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="rounded-xl border border-destructive/50 bg-destructive/10 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-destructive" />
              Troubleshooting
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Registration Failed?</p>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li>• Check that your Strava profile has gender set</li>
                  <li>• Make sure you granted ALL permissions</li>
                  <li>• Wait at least 1 minute before trying again</li>
                  <li>• Try deregistering first, then re-register</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground">Not Seeing Your Activities?</p>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li>• Activities can take up to 24 hours to appear</li>
                  <li>• Make sure your activities are set to "Everyone" visibility</li>
                  <li>• Check that you're in the correct club</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground">Still Having Issues?</p>
                <p className="ml-4 mt-1 text-sm">Check the full documentation above for detailed troubleshooting steps with screenshots.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

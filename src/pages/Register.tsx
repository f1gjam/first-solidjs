import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, ArrowRight, ExternalLink } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Register() {
  const handleStravaConnect = () => {
    window.location.href = 'https://www.unixcraft.dev/auth';
  };

  return (
    <Layout>
      <div className="container py-8 md:py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">
            Join the Leaderboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Connect your Strava account to track your stats
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Important Notice */}
          <Alert className="border-primary/50 bg-primary/10">
            <AlertCircle className="h-4 w-4 text-primary" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>
              Please read all requirements below before connecting your Strava account
            </AlertDescription>
          </Alert>

          {/* Requirements */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Gender Set in Profile</h3>
                    <p className="text-muted-foreground">
                      Your Strava profile must have gender (Male/Female) set. This determines which leaderboard category you appear in.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Grant All Permissions</h3>
                    <p className="text-muted-foreground text-red-400 font-medium">
                      CRITICAL: You MUST tick ALL permission boxes during authorization. Without full permissions, registration will fail!
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Be Patient</h3>
                    <p className="text-muted-foreground text-red-400 font-medium">
                      WAIT 30 seconds after clicking "Authorize" for the page to load. DO NOT click register multiple times!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documentation Link */}
            <div className="pt-6 border-t border-border">
              <a
                href="https://docs.google.com/document/d/1_Y2q3Xva_S-7F6f55BjQpjzcsw153PiSmCpJOsmgoTc/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="font-semibold">View Full Documentation</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Step-by-step guide with screenshots on how to register and deregister
              </p>
            </div>
          </div>

          {/* Connect Button */}
          <div className="flex flex-col items-center gap-4 py-8">
            <Button
              onClick={handleStravaConnect}
              size="xl"
              className="bg-[#FC4C02] hover:bg-[#E34402] text-white font-bold text-lg px-8 py-6 h-auto"
            >
              <img 
                src="https://developers.strava.com/images/btn_strava_connectwith_orange.png" 
                alt="Connect with Strava"
                className="h-12"
              />
            </Button>
            <p className="text-sm text-muted-foreground text-center max-w-md">
              By connecting, you authorize this app to access your Strava activity data
            </p>
          </div>

          {/* What Happens Next */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-2xl font-bold mb-4">What Happens Next?</h2>
            <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
              <li>You'll be redirected to Strava's authorization page</li>
              <li>Review and accept ALL permissions (critical!)</li>
              <li>Click "Authorize" on Strava's page</li>
              <li>Wait ~30 seconds for processing</li>
              <li>You'll be redirected back with a success or error message</li>
              <li>Your activities will start appearing on the leaderboards</li>
            </ol>
          </div>

          {/* Help Section */}
          <div className="rounded-xl border border-destructive/50 bg-destructive/10 p-6">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Need Help?
            </h2>
            <p className="text-muted-foreground mb-3">
              If you encounter any issues during registration:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li>• Make sure your Strava profile has gender set</li>
              <li>• Ensure you granted ALL permissions</li>
              <li>• Try registering again (wait at least 1 minute between attempts)</li>
              <li>• Check the documentation for troubleshooting steps</li>
              <li>• Contact support if problems persist</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

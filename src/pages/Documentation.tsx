import { Layout } from "@/components/layout/Layout";
import { ExternalLink } from "lucide-react";

export default function Documentation() {
  return (
    <Layout>
      <div className="container py-8 md:py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground">
            How to register and deregister from the leaderboard
          </p>
        </div>

        {/* Google Docs Embed */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="p-4 border-b border-border bg-muted/50 flex items-center justify-between">
            <h2 className="font-semibold">Registration & Deregistration Guide</h2>
            <a
              href="https://docs.google.com/document/d/1_Y2q3Xva_S-7F6f55BjQpjzcsw153PiSmCpJOsmgoTc/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Open in Google Docs
            </a>
          </div>
          <div className="relative w-full" style={{ paddingBottom: '141.42%' }}>
            <iframe
              src="https://docs.google.com/document/d/1_Y2q3Xva_S-7F6f55BjQpjzcsw153PiSmCpJOsmgoTc/preview"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 'none' }}
              title="Registration Documentation"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <a
            href="/register"
            className="block p-6 rounded-xl border border-border bg-card hover:border-primary transition-colors"
          >
            <h3 className="font-bold text-lg mb-2">Register Now</h3>
            <p className="text-muted-foreground text-sm">
              Connect your Strava account to join the leaderboard
            </p>
          </a>
          <a
            href="https://docs.google.com/document/d/1_Y2q3Xva_S-7F6f55BjQpjzcsw153PiSmCpJOsmgoTc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-xl border border-border bg-card hover:border-primary transition-colors"
          >
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              View Full Doc
              <ExternalLink className="h-4 w-4" />
            </h3>
            <p className="text-muted-foreground text-sm">
              Open the complete documentation in Google Docs
            </p>
          </a>
        </div>
      </div>
    </Layout>
  );
}

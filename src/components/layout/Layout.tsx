import { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t border-border/50 bg-card/50">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/unixcraft-logo.png"
              alt="Unixcraft"
              className="h-8 w-auto opacity-70"
            />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Unixcraft. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/api_logo_pwrdBy_strava_stack_gray.png"
              alt="Powered by Strava"
              className="h-10 w-auto opacity-70"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

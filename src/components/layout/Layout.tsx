import { ReactNode } from "react";
import { Link } from "react-router-dom";
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
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/Unixcraft logo2.png" 
                  alt="UnixCraft Logo" 
                  className="h-8 w-8 rounded"
                />
                <span className="font-display text-lg font-bold uppercase">Strava Club Stats</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Track your club's performance, compete on leaderboards, and celebrate achievements together.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-display font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/documentation" className="text-muted-foreground hover:text-primary transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Powered by Strava */}
            <div>
              <h3 className="font-display font-semibold mb-3">Powered By</h3>
              <img
                src="https://developers.strava.com/images/api_logo_pwrdBy_strava_stack_gray.svg"
                alt="Powered by Strava"
                className="h-12 opacity-70"
              />
            </div>
          </div>
          
          <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} UnixCraft. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with ❤️ for the cycling community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

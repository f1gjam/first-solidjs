import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Activity, Trophy, Users, Calendar, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Weekly", href: "/weekly", icon: Calendar },
  { label: "Monthly", href: "/monthly", icon: Trophy },
  { label: "All Time", href: "/all-time", icon: Trophy },
  { label: "Clubs", href: "/clubs", icon: Users },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <Activity className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold uppercase tracking-wide leading-none">
              Strava Club
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              Stats
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link key={item.href} to={item.href}>
                <Button
                  variant={isActive ? "navActive" : "nav"}
                  className="px-4"
                >
                  <item.icon className="h-4 w-4 mr-1.5" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border/50",
          isOpen ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <nav className="container py-4 flex flex-col gap-2">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  "animate-slide-in-left",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-muted hover:text-foreground"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

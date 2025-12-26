import { Trophy, Users, TrendingUp, Award, Heart, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Trophy,
    title: "Compete & Win",
    description: "Challenge yourself against club members and climb the leaderboards.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a supportive community of cyclists and runners who share your passion.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your performance over time with detailed statistics and insights.",
  },
  {
    icon: Award,
    title: "Achievements",
    description: "Earn recognition for your hard work and dedication to training.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We're driven by our love for cycling, running, and outdoor activities.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for continuous improvement in everything we do.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of community to motivate and inspire.",
  },
];

export default function About() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">
          About{" "}
          <span className="gradient-text">UnixCraft</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Building a community of athletes who push their limits and inspire each other to achieve greatness.
        </p>
      </div>

      {/* Mission Section */}
      <Card className="mb-12 border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="font-display text-2xl uppercase">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground text-lg">
            To create an engaging platform that brings together cyclists and runners from all levels, 
            fostering friendly competition while tracking performance and celebrating achievements. 
            We believe in the power of data to motivate and the strength of community to inspire.
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="font-display text-3xl font-bold uppercase text-center mb-8">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="font-display text-3xl font-bold uppercase text-center mb-8">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-orange-400 text-white mb-4">
                  <value.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technology Section */}
      <Card className="bg-gradient-to-br from-strava-dark to-strava-darker text-white">
        <CardHeader className="text-center">
          <CardTitle className="font-display text-2xl uppercase">Built with Modern Technology</CardTitle>
        </CardHeader>
        <CardContent className="text-center max-w-2xl mx-auto">
          <p className="text-white/80 mb-6">
            Our platform is built using cutting-edge technologies to provide you with a fast, 
            reliable, and beautiful experience. We integrate seamlessly with Strava's API to sync 
            your activities and provide real-time leaderboards and statistics.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
              React + TypeScript
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
              Tailwind CSS
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
              Strava API
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
              Go Backend
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Join CTA */}
      <div className="text-center mt-16">
        <h2 className="font-display text-3xl font-bold uppercase mb-4">
          Join Our Community
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Ready to start competing? Connect your Strava account and join the UnixCraft club today!
        </p>
        <img
          src="https://developers.strava.com/images/api_logo_pwrdBy_strava_stack_gray.svg"
          alt="Powered by Strava"
          className="h-16 opacity-60 mx-auto"
        />
      </div>
    </div>
  );
}

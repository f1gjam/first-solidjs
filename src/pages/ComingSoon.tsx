import { Layout } from "@/components/layout/Layout";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-6">
            <Construction className="h-10 w-10" />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">
            Coming Soon
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            This feature is currently under development and will be available soon.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="default" size="lg">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link to="/monthly">
              <Button variant="outline" size="lg">
                View Leaderboards
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

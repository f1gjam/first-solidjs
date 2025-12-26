import { Mail, MessageCircle, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">
          Get In Touch
        </h1>
        <p className="text-muted-foreground text-lg">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover-lift">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <CardTitle>Email</CardTitle>
            </div>
            <CardDescription>
              Send us an email and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => window.location.href = 'mailto:info@unixcraft.dev'}
            >
              <Mail className="mr-2 h-4 w-4" />
              info@unixcraft.dev
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageCircle className="h-6 w-6" />
              </div>
              <CardTitle>Strava Club</CardTitle>
            </div>
            <CardDescription>
              Join our Strava club to connect with the community.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open('https://www.strava.com/clubs/unixcraft', '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Join on Strava
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Github className="h-6 w-6" />
              </div>
              <CardTitle>GitHub</CardTitle>
            </div>
            <CardDescription>
              Check out our open-source projects and contribute.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open('https://gitlab.com/unixcraft', '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitLab
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Twitter className="h-6 w-6" />
              </div>
              <CardTitle>Social Media</CardTitle>
            </div>
            <CardDescription>
              Follow us on social media for updates and news.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open('https://twitter.com/unixcraft', '_blank')}
            >
              <Twitter className="mr-2 h-4 w-4" />
              @unixcraft
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>About UnixCraft</CardTitle>
          <CardDescription>
            UnixCraft is a community of passionate cyclists and runners who love to track their progress and compete in friendly challenges.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This platform is built and maintained by the UnixCraft community. We use Strava's API to sync activities and provide detailed statistics and leaderboards for our members. Whether you're a competitive athlete or just enjoy staying active, we welcome you to join our community!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

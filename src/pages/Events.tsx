import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const upcomingEvents = [
    {
      title: "AI in Medical Imaging Summit 2025",
      date: "March 15-17, 2025",
      location: "Mumbai, India",
      type: "Conference",
      description: "Join us at India's premier conference on AI applications in medical imaging. Imaging Insightz will present groundbreaking research on radiogenomics and organ transplant prediction."
    },
    {
      title: "Transplant Innovation Webinar Series",
      date: "April 5, 2025",
      location: "Online",
      type: "Webinar",
      description: "Monthly webinar series featuring expert discussions on the latest advances in transplant medicine and AI-powered clinical decision support."
    },
    {
      title: "Healthcare Technology Expo",
      date: "May 22-24, 2025",
      location: "Bangalore, India",
      type: "Exhibition",
      description: "Visit our booth to experience live demonstrations of Liver Insightz, Kidney Insightz, and Radio-Genomes platforms."
    },
    {
      title: "Precision Medicine Workshop",
      date: "June 10, 2025",
      location: "Delhi, India",
      type: "Workshop",
      description: "Hands-on workshop for clinicians on implementing radiogenomics in clinical practice. Limited seats available."
    },
  ];

  const pastEvents = [
    {
      title: "National Radiology Conference 2024",
      date: "November 2024",
      location: "Chennai, India"
    },
    {
      title: "AI Healthcare Innovation Forum",
      date: "September 2024",
      location: "Hyderabad, India"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              Events & Conferences
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Join us at upcoming conferences, webinars, and workshops to explore the future of 
              AI-powered medical imaging and precision medicine
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="container mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="font-heading text-xl">{event.title}</CardTitle>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {event.type}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {event.location === "Online" ? (
                        <Video className="h-4 w-4 text-accent" />
                      ) : (
                        <MapPin className="h-4 w-4 text-accent" />
                      )}
                      <span>{event.location}</span>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth">
                      Register Interest
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h2 className="font-heading text-3xl font-bold mb-4">Partnership Opportunities</h2>
              <p className="text-muted-foreground mb-8">
                We collaborate with healthcare institutions, research organizations, and industry 
                partners to advance medical imaging and precision medicine. Interested in partnering 
                with us for conferences, research initiatives, or clinical trials?
              </p>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-smooth">
                Explore Partnerships
              </Button>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8">Past Events</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <Card key={index} className="gradient-card border-none shadow-md">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-heading font-semibold text-lg">{event.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;

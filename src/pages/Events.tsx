import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, ScanEye, Brain, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {

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
              Join us as we continue to shape the future of AI-powered medical imaging, 
              radiogenomics, and predictive healthcare intelligence.
            </p>
          </div>
        </section>

        {/* ***** NEW SECTION: OUR INNOVATION PLATFORMS ***** */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="container mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Our Innovation Platforms
            </h2>

            <p className="text-center max-w-2xl mx-auto text-muted-foreground mb-10">
              Imaging Insight AI builds next-generation medical imaging solutions that combine 
              radiomics, genomics, and deep learning to support clinicians with precision insights.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Platform 1 - Liver Insightz */}
              <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth">
                <CardHeader className="flex items-center gap-3">
                  <Cpu className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl font-heading">Liver Insightz</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    AI-powered prediction platform for liver transplant success, early graft failure 
                    detection, and clinical decision support.
                  </p>
                  <Button className="w-full bg-primary text-primary-foreground">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Platform 2 - Kidney Insightz */}
              <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth">
                <CardHeader className="flex items-center gap-3">
                  <ScanEye className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl font-heading">Kidney Insightz</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Deep-learning kidney segmentation, rejection scoring, and post-transplant 
                    risk prediction for enhanced patient outcomes.
                  </p>
                  <Button className="w-full bg-primary text-primary-foreground">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Platform 3 - Radio-Genomes */}
              <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth">
                <CardHeader className="flex items-center gap-3">
                  <Brain className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl font-heading">Radio-Genomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete radiogenomic intelligence platform linking imaging features to gene 
                    expression for personalized treatment pathways.
                  </p>
                  <Button className="w-full bg-primary text-primary-foreground">
                    Explore Platform
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold mb-4">Partnership Opportunities</h2>
              <p className="text-muted-foreground mb-8">
                We collaborate with hospitals, universities, and research institutes to accelerate 
                breakthroughs in AI-powered medical imaging and precision medicine.
              </p>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
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
                    <div className="text-sm text-muted-foreground">{event.date}</div>
                    <div className="text-sm text-muted-foreground">{event.location}</div>
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

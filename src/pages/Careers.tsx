import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, Lightbulb, Users, MapPin, Clock } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior AI/ML Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Lead the development of deep learning models for medical image analysis and radiogenomics."
    },
    {
      title: "Clinical Research Scientist",
      department: "Research",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Design and execute clinical validation studies for our AI-powered diagnostic platforms."
    },
    {
      title: "Medical Imaging Specialist",
      department: "Product",
      location: "Delhi, India",
      type: "Full-time",
      description: "Work with radiologists to refine AI algorithms and ensure clinical accuracy."
    },
    {
      title: "Product Manager - Healthcare AI",
      department: "Product",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Drive product strategy and roadmap for our transplant analytics solutions."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain scalable, HIPAA-compliant cloud infrastructure."
    },
    {
      title: "Clinical Partnerships Manager",
      department: "Business Development",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Establish partnerships with hospitals and research institutions across India."
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support"
    },
    {
      icon: Lightbulb,
      title: "Learning & Growth",
      description: "Conference attendance, courses, and continuous learning opportunities"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with world-class talent in AI, medicine, and healthcare innovation"
    },
    {
      icon: Briefcase,
      title: "Impact",
      description: "Contribute to technology that saves lives and transforms healthcare"
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
              Join Our Mission
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Be part of the team revolutionizing medical imaging and precision medicine in India
            </p>
          </div>
        </section>

        {/* Culture Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">Why Imaging Insightz?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="gradient-card border-none shadow-lg">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

          {/* Open Positions
          <section className="px-4 sm:px-6 lg:px-8 py-16">
            <div className="container mx-auto">
              <h2 className="font-heading text-3xl font-bold mb-8 text-center">Open Positions</h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {openPositions.map((position, index) => (
                  <Card key={index} className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="font-heading text-xl">{position.title}</CardTitle>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {position.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {position.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {position.type}
                            </span>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium whitespace-nowrap">
                          Open
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{position.description}</p>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth">
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section> */}

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="container mx-auto">
            <div className="gradient-accent rounded-3xl p-8 sm:p-12 text-center shadow-xl max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl font-bold mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-lg mb-8">
                We're always looking for talented individuals passionate about healthcare innovation. 
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 transition-smooth">
                Send Your Resume
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;

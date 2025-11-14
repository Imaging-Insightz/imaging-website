import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Brain, LineChart, Users, ArrowRight } from "lucide-react";
import liverIcon from "@/assets/liver-icon.jpg";

const LiverInsightz = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  Organ Transplant Insightz
                </div>
                <h1 className="font-heading text-4xl sm:text-5xl font-bold leading-tight">
                  Liver Insightz
                </h1>
                <p className="text-xl text-muted-foreground">
                  Advanced AI-based analysis and predictive models for liver transplant 
                  readiness and donor-recipient compatibility assessment
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/demo">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth">
                      Request Demo
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-smooth">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative animate-float">
                <img
                  src={liverIcon}
                  alt="Liver Insightz AI Analysis"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">AI-Powered Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Deep learning models trained on thousands of liver imaging datasets
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Readiness Scoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive transplant readiness assessment with confidence metrics
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Compatibility Matching</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced algorithms for optimal donor-recipient pairing
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Outcome Prediction</h3>
                  <p className="text-sm text-muted-foreground">
                    Predictive analytics for post-transplant success rates
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">Platform Capabilities</h2>
            <div className="space-y-4">
              {[
                "Automated liver function analysis from CT, MRI, and ultrasound imaging",
                "Real-time assessment of hepatic health markers and disease progression",
                "Transplant readiness scoring with multi-parameter evaluation",
                "Donor liver quality assessment and viability prediction",
                "Donor-recipient compatibility matching using AI algorithms",
                "Post-transplant monitoring with early rejection detection",
                "Integration with hospital PACS and EMR systems",
                "Comprehensive reporting and visualization dashboards",
                "Continuous model updates with latest clinical research",
              ].map((capability, index) => (
                <Card key={index} className="gradient-card border-none shadow-sm hover:shadow-md transition-smooth">
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{capability}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="container mx-auto">
            <div className="gradient-accent rounded-3xl p-8 sm:p-12 text-center shadow-xl max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl font-bold mb-4">
                Transform Your Liver Transplant Program
              </h2>
              <p className="text-lg mb-8">
                See how Liver Insightz can improve outcomes and streamline your clinical workflow
              </p>
              <Link to="/demo">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 transition-smooth">
                  Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LiverInsightz;

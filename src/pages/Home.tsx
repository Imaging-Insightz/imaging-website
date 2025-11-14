import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Activity, Dna, CheckCircle2, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-medical-ai.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transforming Healthcare with{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  AI-Powered Medical Imaging
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Imaging Insight AI pioneers intelligent healthcare solutions — from predicting organ transplant success to unlocking radiogenomic patterns for truly personalized medicine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/products">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth">
                    Explore Our Solutions
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 transition-smooth">
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="AI-powered medical imaging analysis"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Innovative Healthcare Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining cutting-edge AI with medical expertise to transform organ transplant outcomes and accelerate precision medicine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl">AI-Powered Intelligence</h3>
                <p className="text-muted-foreground">
                  Advanced deep learning algorithms analyze complex medical imaging data with unprecedented accuracy
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl">Transplant Insights</h3>
                <p className="text-muted-foreground">
                  Comprehensive liver and kidney transplant readiness evaluation with intelligent compatibility matching
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-xl">Real-Time Assessment</h3>
                <p className="text-muted-foreground">
                  Continuous organ health monitoring with intelligent alerts for critical changes requiring attention
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-blush/20 flex items-center justify-center">
                  <Dna className="h-6 w-6 text-blush" />
                </div>
                <h3 className="font-heading font-semibold text-xl">Radiogenomics</h3>
                <p className="text-muted-foreground">
                  India's pioneering integration of radiology and genomics for comprehensive precision medicine
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12 text-center">
              Why Healthcare Providers Trust Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Clinically validated AI models trained on diverse datasets",
                "Seamless integration with existing PACS and EMR systems",
                "HIPAA compliant with enterprise-grade security",
                "Continuous learning from real-world clinical outcomes",
                "Dedicated support from medical imaging experts",
                "Transparent AI decisions with explainable insights"
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join leading medical institutions worldwide in delivering smarter, faster, and more personalized patient care
          </p>
          <Link to="/demo">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth">
              Schedule Your Demo Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

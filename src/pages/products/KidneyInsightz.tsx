import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Activity, TrendingUp, Shield, ArrowRight } from "lucide-react";
import kidneyIcon from "@/assets/kidney-icon.jpg";

const KidneyInsightz = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-2">
                  Organ Transplant Insightz
                </div>
                <h1 className="font-heading text-4xl sm:text-5xl font-bold leading-tight">
                  Kidney Insightz (Renel)
                </h1>
                <p className="text-xl text-muted-foreground">
                  Intelligent kidney health monitoring and renal transplant outcome predictions 
                  powered by advanced machine learning algorithms
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/demo">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-smooth">
                      Request Demo
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 transition-smooth">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative animate-float">
                <img
                  src={kidneyIcon}
                  alt="Kidney Insightz (Renel) AI Analysis"
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
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Activity className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Real-Time Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuous assessment of kidney function and health markers
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Viability Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive renal transplant viability and readiness evaluation
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Rejection Prediction</h3>
                  <p className="text-sm text-muted-foreground">
                    AI-powered early detection of transplant rejection risks
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Outcome Forecasting</h3>
                  <p className="text-sm text-muted-foreground">
                    Long-term transplant success prediction and patient prognosis
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clinical Applications */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">Clinical Applications</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-heading font-semibold text-xl text-accent">Pre-Transplant Assessment</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Donor kidney quality evaluation from imaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Recipient readiness scoring and risk stratification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Optimal donor-recipient matching algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Pre-operative complication risk assessment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-heading font-semibold text-xl text-accent">Post-Transplant Care</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Continuous graft function monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Early rejection detection with AI alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Long-term outcome prediction models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Personalized treatment optimization recommendations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">Advanced Technology Stack</h2>
            <div className="space-y-4">
              {[
                "Multi-modal imaging analysis (CT, MRI, ultrasound, nuclear medicine)",
                "Deep learning models for renal parenchyma segmentation and analysis",
                "Automated GFR estimation and kidney function assessment",
                "Vascular anatomy analysis for transplant planning",
                "Rejection biomarker detection from imaging patterns",
                "Longitudinal tracking of transplant graft performance",
                "Integration with lab values and clinical data for comprehensive analysis",
                "Real-time alert system for critical changes",
                "HIPAA-compliant cloud infrastructure with enterprise security",
              ].map((tech, index) => (
                <Card key={index} className="gradient-card border-none shadow-sm hover:shadow-md transition-smooth">
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{tech}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto">
            <div className="gradient-accent rounded-3xl p-8 sm:p-12 text-center shadow-xl max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl font-bold mb-4">
                Elevate Your Renal Transplant Program
              </h2>
              <p className="text-lg mb-8">
                Discover how Kidney Insightz (Renel) can enhance patient outcomes and clinical efficiency
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

export default KidneyInsightz;

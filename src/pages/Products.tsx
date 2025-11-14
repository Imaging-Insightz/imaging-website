import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Dna } from "lucide-react";
import liverIcon from "@/assets/liver-icon.jpg";
import kidneyIcon from "@/assets/kidney-icon.jpg";
import radiogenomicsImage from "@/assets/radiogenomics.jpg";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
                Our Products
              </h1>
              <p className="text-xl text-muted-foreground">
                Advanced AI-powered solutions for organ transplant prediction and precision medicine
              </p>
            </div>

            {/* Organ Transplant Insightz Section */}
            <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                <Activity className="h-8 w-8 text-primary" />
                <h2 className="font-heading text-3xl font-bold">Organ Transplant Insight</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth group">
                  <CardHeader>
                    <div className="mb-4 rounded-xl overflow-hidden">
                      <img
                        src={liverIcon}
                        alt="Liver Insightz"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                      />
                    </div>
                    <CardTitle className="font-heading text-2xl">Liver Insight</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Advanced AI-based analysis and predictive models for liver transplant readiness 
                      and donor-recipient compatibility assessment.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Automated liver function analysis from imaging data
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Transplant readiness scoring and predictions
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Donor-recipient compatibility matching
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Post-transplant outcome monitoring
                      </li>
                    </ul>
                    <Link to="/products/liver">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth group">
                  <CardHeader>
                    <div className="mb-4 rounded-xl overflow-hidden">
                      <img
                        src={kidneyIcon}
                        alt="Kidney Insightz (Renel)"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                      />
                    </div>
                    <CardTitle className="font-heading text-2xl">Kidney Insight (Renel)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Intelligent kidney health monitoring and renal transplant outcome predictions 
                      powered by advanced machine learning algorithms.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Real-time kidney function assessment
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Renal transplant viability analysis
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Rejection risk prediction models
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Long-term outcome forecasting
                      </li>
                    </ul>
                    <Link to="/products/kidney">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-smooth">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Radio-Genomes Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Dna className="h-8 w-8 text-secondary" />
                <h2 className="font-heading text-3xl font-bold">Radio-Genomes Insight</h2>
              </div>

              <Card className="gradient-card border-none shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={radiogenomicsImage}
                      alt="Radio-Genomes - Radiogenomics"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4 w-fit">
                      India's First Radiogenomics Platform
                    </div>
                    <h3 className="font-heading text-3xl font-bold mb-4">
                      Combining Radiology & Genomics for Precision Medicine
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Imaging Insightz is proud to be the first company in India to integrate 
                      radiological imaging with genomic data analysis. Our Radio-Genomes platform 
                      uses cutting-edge AI to map imaging patterns with genetic markers, enabling 
                      unprecedented insights into disease progression, treatment response, and 
                      personalized medicine strategies.
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      By bridging the gap between what we see in medical images and what's encoded 
                      in our DNA, we're opening new frontiers in diagnostic accuracy and therapeutic 
                      targeting.
                    </p>
                    <Link to="/products/radiogenomics">
                      <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-smooth">
                        Discover Radio-Genomes <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Ready to Experience Our Solutions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a personalized demo to see how our AI-powered platforms can 
              transform your clinical practice.
            </p>
            <Link to="/demo">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth">
                Request a Demo
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;

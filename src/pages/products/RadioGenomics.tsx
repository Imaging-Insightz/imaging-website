import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Dna, Microscope, Target, Sparkles, ArrowRight } from "lucide-react";
import radiogenomicsImage from "@/assets/radiogenomics.jpg";

const RadioGenomics = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12 animate-fade-in">
              <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                India's First Radiogenomics Platform
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Radio-Genomes
              </h1>
              <p className="text-xl text-muted-foreground">
                The pioneering convergence of radiology and genomics for true precision medicine
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 animate-fade-in">
              <img
                src={radiogenomicsImage}
                alt="Radio-Genomes - Combining Radiology and Genomics"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-bold mb-6 text-center">A Revolutionary Approach</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Imaging Insightz proudly stands as <strong className="text-foreground">India's first company</strong> to 
                integrate radiological imaging with genomic data analysis, creating a new paradigm in 
                personalized medicine. Our Radio-Genomes platform bridges the gap between what we visualize 
                in medical images and the molecular blueprints encoded in our DNA.
              </p>
              <p>
                Traditional radiology reveals anatomical and functional information, while genomics uncovers 
                the genetic factors driving disease. By combining these two powerful modalities through 
                advanced artificial intelligence, we unlock insights that neither can provide alone — enabling 
                unprecedented diagnostic precision and personalized treatment strategies.
              </p>
              <p>
                This integration allows clinicians to understand not just what a tumor or organ looks like, 
                but also its genetic characteristics, potential behavior, treatment response predictions, and 
                prognosis — all from non-invasive imaging combined with genomic profiling.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">How Radio-Genomes Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                    <Microscope className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">Step 1: Imaging Analysis</h3>
                  <p className="text-muted-foreground">
                    Advanced AI extracts quantitative features from medical imaging (CT, MRI, PET) 
                    including texture, shape, and functional patterns
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                    <Dna className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">Step 2: Genomic Integration</h3>
                  <p className="text-muted-foreground">
                    Genetic data from sequencing or panels is mapped to imaging phenotypes, 
                    identifying correlations between visual patterns and molecular signatures
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                    <Target className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">Step 3: Precision Insights</h3>
                  <p className="text-muted-foreground">
                    Machine learning models deliver actionable insights for diagnosis, prognosis, 
                    and personalized treatment recommendations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clinical Applications */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">Clinical Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="h-6 w-6 text-secondary" />
                    <h3 className="font-heading font-semibold text-lg">Oncology</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Tumor genetic profiling from imaging alone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Treatment response prediction based on imaging-genomic signatures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Identification of actionable mutations without biopsy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="h-6 w-6 text-secondary" />
                    <h3 className="font-heading font-semibold text-lg">Transplant Medicine</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Genetic compatibility assessment for donor-recipient matching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Rejection risk prediction based on imaging-genetic markers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Personalized immunosuppression strategies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="h-6 w-6 text-secondary" />
                    <h3 className="font-heading font-semibold text-lg">Neurology</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Early detection of genetic brain disorders from MRI patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Alzheimer's genetic risk assessment from brain imaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Personalized treatment for neurological conditions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="h-6 w-6 text-secondary" />
                    <h3 className="font-heading font-semibold text-lg">Cardiology</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Genetic cardiomyopathy identification from cardiac imaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Risk stratification for inherited heart diseases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Tailored cardiovascular treatment plans</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">Key Benefits</h2>
            <div className="space-y-4">
              {[
                "Non-invasive genetic profiling reduces need for biopsies",
                "Earlier and more accurate disease diagnosis",
                "Personalized treatment selection based on imaging-genomic biomarkers",
                "Improved prediction of treatment response and patient outcomes",
                "Cost-effective precision medicine at scale",
                "Seamless integration with existing clinical workflows",
                "Continuous learning from multi-institutional data",
                "Compliance with international data privacy and security standards",
              ].map((benefit, index) => (
                <Card key={index} className="gradient-card border-none shadow-sm hover:shadow-md transition-smooth">
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
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
                Pioneer Precision Medicine in India
              </h2>
              <p className="text-lg mb-8">
                Be among the first to integrate radiogenomics into your clinical practice
              </p>
              <Link to="/demo">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 transition-smooth">
                  Explore Radio-Genomes <ArrowRight className="ml-2 h-5 w-5" />
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

export default RadioGenomics;

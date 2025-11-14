import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Users, Award, Globe } from "lucide-react";
import aboutImage from "@/assets/about-lab.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
                About Imaging Insight AI
              </h1>
              <p className="text-xl text-muted-foreground">
                Redefining medical imaging through artificial intelligence, clinical expertise, and a commitment to saving lives
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl mb-16 animate-fade-in">
              <img
                src={aboutImage}
                alt="Imaging Insight AI research laboratory"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To revolutionize organ transplant medicine and precision healthcare through advanced AI-powered imaging analytics, making life-saving insights accessible to healthcare providers worldwide and improving patient outcomes at every stage of care.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Eye className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the global leader in AI-driven medical imaging and radiogenomics, creating a future where every transplant decision and treatment plan is supported by intelligent, data-driven insights that enhance clinical judgment and save lives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">Our Innovation Journey</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Imaging Insight AI was founded by a multidisciplinary team of medical imaging specialists, AI researchers, transplant surgeons, and data scientists who shared a unified vision: to harness the transformative power of artificial intelligence to revolutionize organ transplant outcomes and precision medicine.
              </p>
              <p>
                Recognizing the critical gap between available imaging data and actionable clinical insights, we developed cutting-edge solutions that bridge radiology, molecular medicine, and clinical decision-making. Our technology transforms complex medical images into clear, actionable intelligence that clinicians can trust.
              </p>
              <p>
                Today, we stand as India's pioneering company to integrate radiogenomics into clinical practice, offering healthcare providers unprecedented insights into patient care. Our solutions are trusted by leading medical institutions, helping clinicians make more informed decisions, reduce transplant complications, and ultimately save more lives.
              </p>
              <p>
                Located in Pune's thriving innovation ecosystem, we continue to push the boundaries of what's possible when medical expertise meets artificial intelligence. Every algorithm we develop, every insight we generate, is driven by one simple goal: better outcomes for patients who need them most.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="container mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">Innovation</h3>
                  <p className="text-muted-foreground">
                    Continuously advancing the frontiers of medical AI through rigorous research and clinical collaboration
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">Patient First</h3>
                  <p className="text-muted-foreground">
                    Every decision, every algorithm, and every feature is designed with patient outcomes at the forefront
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">Clinical Excellence</h3>
                  <p className="text-muted-foreground">
                    Maintaining the highest standards of accuracy, reliability, and clinical validation in everything we deliver
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blush/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-blush" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">Transparency</h3>
                  <p className="text-muted-foreground">
                    Providing explainable AI insights that clinicians can understand, trust, and act upon with confidence
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">Collaboration</h3>
                  <p className="text-muted-foreground">
                    Working hand-in-hand with healthcare professionals to ensure our technology meets real-world needs
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">Global Impact</h3>
                  <p className="text-muted-foreground">
                    Committed to making advanced medical AI accessible to healthcare providers across all regions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Our Expert Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Imaging Insight AI brings together world-class talent from medicine, artificial intelligence, software engineering, and data science. Our multidisciplinary team combines deep clinical expertise with cutting-edge technical skills to build solutions that truly make a difference in patient care.
            </p>
            <p className="text-muted-foreground">
              With collective experience spanning top medical institutions, leading AI research labs, and healthcare technology companies, we're uniquely positioned to solve some of healthcare's most challenging problems.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

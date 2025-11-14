import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle, Calendar, Video, Building } from "lucide-react";

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    product: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demo request submitted! Our team will contact you shortly.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organization: "",
      role: "",
      product: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const demoFeatures = [
    "Personalized product walkthrough with our specialists",
    "Live demonstration of AI analysis capabilities",
    "Discussion of your specific clinical needs",
    "Integration and implementation guidance",
    "Q&A session with our technical team"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              Request a Demo
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Experience the power of AI-driven medical imaging and precision medicine firsthand
            </p>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <Card className="gradient-card border-none shadow-xl">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization *</Label>
                        <Input
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          required
                          className="bg-background"
                          placeholder="Hospital, Research Institution, etc."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role">Role *</Label>
                        <Select
                          value={formData.role}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="physician">Physician/Doctor</SelectItem>
                            <SelectItem value="radiologist">Radiologist</SelectItem>
                            <SelectItem value="surgeon">Transplant Surgeon</SelectItem>
                            <SelectItem value="researcher">Researcher</SelectItem>
                            <SelectItem value="administrator">Healthcare Administrator</SelectItem>
                            <SelectItem value="it">IT/Technology</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="product">Product of Interest *</Label>
                        <Select
                          value={formData.product}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, product: value }))}
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select a product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="liver">Liver Insightz</SelectItem>
                            <SelectItem value="kidney">Kidney Insightz (Renel)</SelectItem>
                            <SelectItem value="radiogenomics">Radio-Genomes</SelectItem>
                            <SelectItem value="all">All Products</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Information</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="bg-background min-h-[100px]"
                          placeholder="Tell us about your specific needs and use cases..."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth">
                        Schedule Demo
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our Privacy Policy and Terms of Service
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-6">
                <Card className="gradient-card border-none shadow-lg">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold mb-4">What to Expect</h3>
                      <ul className="space-y-3">
                        {demoFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gradient-card border-none shadow-lg">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-6 w-6 text-accent flex-shrink-0" />
                      <div>
                        <h4 className="font-heading font-semibold mb-1">Flexible Scheduling</h4>
                        <p className="text-sm text-muted-foreground">
                          We work around your schedule to find the perfect time for your demo
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Video className="h-6 w-6 text-secondary flex-shrink-0" />
                      <div>
                        <h4 className="font-heading font-semibold mb-1">Virtual or In-Person</h4>
                        <p className="text-sm text-muted-foreground">
                          Choose between convenient online demos or in-person presentations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Building className="h-6 w-6 text-blush flex-shrink-0" />
                      <div>
                        <h4 className="font-heading font-semibold mb-1">Tailored to Your Needs</h4>
                        <p className="text-sm text-muted-foreground">
                          Every demo is customized to your institution's specific requirements
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent/10 border-accent/20">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Need immediate assistance?</strong><br />
                      Call us at <a href="tel:+911234567890" className="text-accent hover:underline">+91 123 456 7890</a> or 
                      email <a href="mailto:contact@imaginginsightz.com" className="text-accent hover:underline">contact@imaginginsightz.com</a>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestDemo;

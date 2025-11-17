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
import emailjs from "emailjs-com";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization,
      role: formData.role,
      product: formData.product,
      message: formData.message || "No message provided",
      submittedAt: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_gs91hue", // 🔥 REPLACE
        "template_0ws6qke", // 🔥 REPLACE
        payload,
        "exCqklCuzPp6sZVz8" // 🔥 REPLACE
      )
      .then(() => {
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
      })
      .catch((error) => {
        toast.error("Failed to submit request. Try again!");
        console.error("EmailJS Error:", error);
      });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const demoFeatures = [
    "Personalized product walkthrough with our specialists",
    "Live demonstration of AI analysis capabilities",
    "Discussion of your specific clinical needs",
    "Integration and implementation guidance",
    "Q&A session with our technical team",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
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
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization *</Label>
                        <Input
                          id="organization"
                          name="organization"
                          required
                          value={formData.organization}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Role *</Label>
                        <Select value={formData.role} onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, role: value }))
                        }>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Physician">Physician</SelectItem>
                            <SelectItem value="Radiologist">Radiologist</SelectItem>
                            <SelectItem value="Transplant Surgeon">Transplant Surgeon</SelectItem>
                            <SelectItem value="Researcher">Researcher</SelectItem>
                            <SelectItem value="Administrator">Administrator</SelectItem>
                            <SelectItem value="IT">IT</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Product *</Label>
                        <Select value={formData.product} onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, product: value }))
                        }>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Liver Insightz">Liver Insightz</SelectItem>
                            <SelectItem value="Kidney Insightz">Kidney Insightz</SelectItem>
                            <SelectItem value="Radio-Genomes">Radio-Genomes</SelectItem>
                            <SelectItem value="All Products">All Products</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="min-h-[100px]"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90"
                      >
                        Schedule Demo
                      </Button>

                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="gradient-card border-none shadow-lg">
                  <CardContent className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold">What to Expect</h3>
                    <ul className="space-y-3">
                      {demoFeatures.map((f, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
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


                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold">Need immediate assistance?</h3>
                    <p className="text-sm">
                      Call Us: <a href="tel:+919923030250" className="text-primary">+91 99230 30250</a>
                      <br />
                      Email Us: <a href="mailto:info@imaginginsightz.com" className="text-primary">
                        info@imaginginsightz.com
                      </a>
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

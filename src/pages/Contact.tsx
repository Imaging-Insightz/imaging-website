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
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Get in touch with our team. We're here to answer your questions and discuss 
              how we can support your healthcare innovation needs.
            </p>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="gradient-card border-none shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="font-heading text-2xl font-bold mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
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
                        <Label htmlFor="subject">Subject *</Label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="product">Product Information</SelectItem>
                            <SelectItem value="demo">Demo Request</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="careers">Career Opportunities</SelectItem>
                            <SelectItem value="press">Press & Media</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="bg-background min-h-[150px]"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="gradient-card border-none shadow-lg">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold mb-6">Get in Touch</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-heading font-semibold mb-1">Email</h4>
                            <a 
                              href="mailto:contact@imaginginsightz.com" 
                              className="text-muted-foreground hover:text-primary transition-smooth"
                            >
                              contact@imaginginsightz.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Phone className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-heading font-semibold mb-1">Phone</h4>
                            <a 
                              href="tel:+911234567890" 
                              className="text-muted-foreground hover:text-accent transition-smooth"
                            >
                              +91 123 456 7890
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-heading font-semibold mb-1">Address</h4>
                            <p className="text-muted-foreground">
                              Imaging Insight AI<br />
                              Office No. 659, Gera's Imperium Gateway<br />
                              Near Bhosari Metro Station<br />
                              Nashik Phata Flyover, Pune – 411034
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-blush/20 flex items-center justify-center flex-shrink-0">
                            <Clock className="h-5 w-5 text-blush" />
                          </div>
                          <div>
                            <h4 className="font-heading font-semibold mb-1">Business Hours</h4>
                            <p className="text-muted-foreground">
                              Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                              Saturday: 10:00 AM - 2:00 PM IST<br />
                              Sunday: Closed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-accent border-none shadow-lg">
                  <CardContent className="p-8 text-center space-y-4">
                    <h3 className="font-heading text-xl font-bold">Prefer a Live Demo?</h3>
                    <p className="text-muted-foreground">
                      Experience our AI-powered platforms firsthand with a personalized demonstration
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-background text-foreground hover:bg-background/90 transition-smooth"
                      onClick={() => window.location.href = '/demo'}
                    >
                      Request a Demo
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section (Optional) */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 mt-16 bg-muted/30">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="font-heading text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground mb-8">
              We welcome hospital administrators, healthcare professionals, and research partners 
              to visit our offices. Please schedule an appointment in advance.
            </p>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-smooth">
              Schedule a Visit
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Twitter } from "lucide-react";
import Logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Replace with your actual logo file in /public or /assets */}
              <img
                src={Logo}
                alt="Imaging Insight AI Logo"
                className="w-8 h-8 object-contain rounded-md"
              />
              <span className="font-heading font-bold text-lg">Imaging Insight AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Pioneering AI-powered medical imaging and radiogenomic intelligence for precision medicine.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/liver" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Liver Insight
                </Link>
              </li>
              <li>
                <Link to="/products/kidney" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Kidney Insight (Renel)
                </Link>
              </li>
              <li>
                <Link to="/products/radiogenomics" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Radio-Genomes
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@imaginginsightai.com"
                className="flex items-start space-x-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@imaginginsightai.com</span>
              </a>
              <a
                href="tel:+919999999999"
                className="flex items-start space-x-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+91 99999 99999</span>
              </a>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Office No. 659, Gera's Imperium Gateway, near Bhosari Metro Station, Nashik Phata Flyover, Pune – 411034</span>
              </div>
              <div className="flex space-x-3 pt-2">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-smooth"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-smooth"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Imaging Insight AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

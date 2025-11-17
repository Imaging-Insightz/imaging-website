import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50 transition-smooth">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            {/* Replace with your actual logo file in /public or /assets */}
            <img
              src={Logo}
              alt="Imaging Insight AI Logo"
              className="w-20 h-20 object-contain rounded-md"
            />
            <span className="font-heading font-bold text-xl">Imaging Insight AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant={isActive("/") ? "secondary" : "ghost"} className="transition-smooth">
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button variant={isActive("/about") ? "secondary" : "ghost"} className="transition-smooth">
                About
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={location.pathname.includes("/products") ? "secondary" : "ghost"} className="transition-smooth">
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <Link to="/products">
                  <DropdownMenuItem className="cursor-pointer">
                    <span className="font-medium">All Products</span>
                  </DropdownMenuItem>
                </Link>
                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Organ Transplant Insight
                </div>
                <Link to="/products/liver">
                  <DropdownMenuItem className="cursor-pointer">
                    Liver Insight
                  </DropdownMenuItem>
                </Link>
                <Link to="/products/kidney">
                  <DropdownMenuItem className="cursor-pointer">
                    Kidney Insight (Renel)
                  </DropdownMenuItem>
                </Link>
                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground mt-2">
                  Precision Medicine
                </div>
                <Link to="/products/radiogenomics">
                  <DropdownMenuItem className="cursor-pointer">
                    Radio-Genomes
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/events">
              <Button variant={isActive("/events") ? "secondary" : "ghost"} className="transition-smooth">
                Events
              </Button>
            </Link>
            <Link to="/careers">
              <Button variant={isActive("/careers") ? "secondary" : "ghost"} className="transition-smooth">
                Careers
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant={isActive("/contact") ? "secondary" : "ghost"} className="transition-smooth">
                Contact
              </Button>
            </Link>
            <Link to="/demo">
              <Button className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <Button variant={isActive("/") ? "secondary" : "ghost"} className="w-full justify-start">
                  Home
                </Button>
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                <Button variant={isActive("/about") ? "secondary" : "ghost"} className="w-full justify-start">
                  About
                </Button>
              </Link>
              <Link to="/products" onClick={() => setIsOpen(false)}>
                <Button variant={isActive("/products") ? "secondary" : "ghost"} className="w-full justify-start">
                  Products
                </Button>
              </Link>
              <div className="pl-4 flex flex-col space-y-1">
                <Link to="/products/liver" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                    Liver Insight
                  </Button>
                </Link>
                <Link to="/products/kidney" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                    Kidney Insight
                  </Button>
                </Link>
                <Link to="/products/radiogenomics" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                    Radio-Genomes
                  </Button>
                </Link>
              </div>
              <Link to="/events" onClick={() => setIsOpen(false)}>
                <Button variant={isActive("/events") ? "secondary" : "ghost"} className="w-full justify-start">
                  Events
                </Button>
              </Link>
              <Link to="/careers" onClick={() => setIsOpen(false)}>
                <Button variant={isActive("/careers") ? "secondary" : "ghost"} className="w-full justify-start">
                  Careers
                </Button>
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant={isActive("/contact") ? "secondary" : "ghost"} className="w-full justify-start">
                  Contact
                </Button>
              </Link>
              <Link to="/demo" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

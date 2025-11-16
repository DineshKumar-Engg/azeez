import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/azeez-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Azeez International" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-muted-foreground transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-muted-foreground transition-colors">
              Products
            </Link>
            <Link to="/services" className="text-foreground hover:text-muted-foreground transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-foreground hover:text-muted-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-muted-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="text-foreground hover:text-muted-foreground transition-colors">
                        <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 text-foreground hover:bg-muted rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-foreground hover:bg-muted rounded-md"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-foreground hover:bg-muted rounded-md"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-foreground hover:bg-muted rounded-md"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-foreground hover:bg-muted rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

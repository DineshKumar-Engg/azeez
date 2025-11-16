import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductCarousel from "@/components/ProductCarousel";
import CurvedBanner from "@/components/CurvedBanner";

import heroImage from "@/assets/hero-students.jpg";
import bannerSchoolGirl from "@/assets/banner-school-girl.png";
import schoolUniform from "@/assets/school-uniform-1.jpg";
import sportsJersey from "@/assets/sports-jersey-1.jpg";
import casualTshirt from "@/assets/casual-tshirt-1.jpg";
import jerseyRed from "@/assets/jersey-red.jpg";
import jerseyBlue from "@/assets/jersey-blue.jpg";
import jerseyGreen from "@/assets/jersey-green.jpg";
import tshirtBlack from "@/assets/tshirt-black.jpg";
import tshirtWhite from "@/assets/tshirt-white.jpg";
import uniformComplete from "@/assets/uniform-complete.jpg";

const Home = () => {
  const jerseyImages = [
    { src: jerseyRed, alt: "Red Sports Jersey" },
    { src: jerseyBlue, alt: "Blue Sports Jersey" },
    { src: jerseyGreen, alt: "Green Sports Jersey" },
    { src: sportsJersey, alt: "Striped Sports Jersey" },
    { src: jerseyRed, alt: "Red Jersey Design" },
  ];

  const casualImages = [
    { src: tshirtBlack, alt: "Black Casual T-Shirt" },
    { src: tshirtWhite, alt: "White Casual T-Shirt" },
    { src: casualTshirt, alt: "Casual Black Tee" },
    { src: tshirtBlack, alt: "Minimalist Black Shirt" },
    { src: tshirtWhite, alt: "Simple White Tee" },
  ];

  const uniformImages = [
    { src: schoolUniform, alt: "School Uniform Set 1" },
    { src: uniformComplete, alt: "Complete School Uniform" },
    { src: schoolUniform, alt: "School Uniform Set 2" },
    { src: uniformComplete, alt: "Full Uniform Kit" },
    { src: schoolUniform, alt: "School Uniform Set 3" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Curved Banner */}
      {/* <CurvedBanner
        title="Customize Your Dream School Uniform"
        description="Design premium quality uniforms tailored to your school's identity. Start creating your perfect uniform today with our easy-to-use customization tools."
        buttonText="Start Designing"
        buttonLink="/products"
        image={bannerSchoolGirl}
        imageAlt="School girl in uniform"
        bgColorClass="bg-banner-yellow"
        waveColor1="hsl(var(--banner-pink))"
        waveColor2="hsl(var(--banner-pink) / 0.7)"
      /> */}

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Students in uniforms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-white mb-6 leading-tight">
              Customize Your Sport & School Uniforms
            </h1>
            <p className="text-xl text-white/90 mb-8 font-roboto">
              Premium quality uniforms, jerseys, and casual wear tailored to your needs. 
              Design, customize, and order with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg">
                            <Link to="/contact" className="transition-colors">Start Designing</Link>

                
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
               <Link to="/products" className="transition-colors">
                             <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                View Products
              </Button>
               </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-poppins mb-4">Why Choose UniformPro?</h2>
            <p className="text-xl text-muted-foreground">Not the usual uniform experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                High-quality fabrics and expert craftsmanship in every piece we create.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-3">Custom Designs</h3>
              <p className="text-muted-foreground">
                Fully customizable designs to match your team's identity and style.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-3">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick turnaround times without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-poppins mb-4">Best-Selling Products</h2>
            <p className="text-xl text-muted-foreground">Discover our most popular items</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              image={schoolUniform}
              title="Classic School Uniform"
              category="School Uniforms"
            />
            <ProductCard
              image={sportsJersey}
              title="Pro Sports Jersey"
              category="Sports Jerseys"
            />
            <ProductCard
              image={casualTshirt}
              title="Casual Black Tee"
              category="Casual Wear"
            />
          </div>

          <div className="text-center mt-10">
            <Link to="/products">
              <Button size="lg" variant="outline">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Carousels */}
      <ProductCarousel images={uniformImages} title="School Uniforms Collection" />
      <ProductCarousel images={jerseyImages} title="Sports Jerseys Collection" />
      <ProductCarousel images={casualImages} title="Casual Wear Collection" />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-poppins mb-4">Ready to Create Your Custom Uniform?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of satisfied customers who trust us for their uniform needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link to="/contact">
                         <Button size="lg" variant="secondary">
              Get Started Now
            </Button>
             </Link>

            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

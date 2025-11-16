import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurvedBanner from "@/components/CurvedBanner";
import { Award, Users, TrendingUp, Heart } from "lucide-react";

import schoolUniform from "@/assets/school-uniform-1.jpg";
import bannerTshirt from "@/assets/casual-tshirt-1.png";
import sportsJersey from "@/assets/sports-jersey-1.jpg";
import casualTshirt from "@/assets/casual-tshirt-1.jpg";
import jerseyRed from "@/assets/jersey-red.jpg";
import jerseyBlue from "@/assets/jersey-blue.jpg";
import jerseyGreen from "@/assets/jersey-green.jpg";
import tshirtBlack from "@/assets/tshirt-black.jpg";
import tshirtWhite from "@/assets/tshirt-white.jpg";
import uniformComplete from "@/assets/uniform-complete.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Curved Banner */}
      <CurvedBanner
        title="Quality Uniforms, Crafted with Care"
        description="Discover the story behind our passion for creating exceptional uniforms. We combine traditional craftsmanship with modern design to deliver the best."
        buttonText="Learn More"
        buttonLink="/products"
        image={bannerTshirt}
        imageAlt="Premium casual t-shirt"
        bgColorClass="bg-banner-cyan"
        waveColor1="hsl(var(--banner-purple))"
        waveColor2="hsl(var(--banner-purple) / 0.7)"
      />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold font-poppins mb-6">About UniformPro</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're passionate about creating high-quality uniforms that empower schools, 
              sports teams, and individuals to look and feel their best.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20">
            <div className="bg-muted rounded-2xl p-12">
              <h2 className="text-3xl font-bold font-poppins mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-center max-w-3xl mx-auto">
                To provide exceptional custom uniforms and apparel that combine quality, 
                style, and affordability. We believe that everyone deserves to wear clothing 
                that makes them feel confident and proud.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold font-poppins mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality and always strive for perfection.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Building lasting relationships with our customers and partners.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Constantly improving our designs and production processes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  We love what we do and it shows in every product we create.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-12">
            <h2 className="text-3xl font-bold font-poppins mb-12 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold font-poppins mb-2">500+</div>
                <p className="text-lg">Schools Served</p>
              </div>
              <div>
                <div className="text-5xl font-bold font-poppins mb-2">10k+</div>
                <p className="text-lg">Happy Customers</p>
              </div>
              <div>
                <div className="text-5xl font-bold font-poppins mb-2">25+</div>
                <p className="text-lg">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Image Gallery Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold font-poppins mb-12 text-center">Our Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img 
                    src={schoolUniform} 
                    alt="School Uniforms" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold font-poppins text-center">School Uniforms</h3>
                <p className="text-muted-foreground text-center text-sm">
                  Premium quality uniforms for educational institutions
                </p>
              </div>

              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img 
                    src={sportsJersey} 
                    alt="Sports Jerseys" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold font-poppins text-center">Sports Jerseys</h3>
                <p className="text-muted-foreground text-center text-sm">
                  Custom athletic wear for teams and individuals
                </p>
              </div>

              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img 
                    src={casualTshirt} 
                    alt="Casual Wear" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold font-poppins text-center">Casual Wear</h3>
                <p className="text-muted-foreground text-center text-sm">
                  Comfortable everyday apparel for everyone
                </p>
              </div>
            </div>
          </div>

          {/* Multi-Image Showcase */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold font-poppins mb-12 text-center">Quality in Every Stitch</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[jerseyRed, jerseyBlue, jerseyGreen, tshirtBlack, tshirtWhite, uniformComplete, schoolUniform, casualTshirt].map((img, idx) => (
                <div key={idx} className="aspect-square overflow-hidden rounded-lg bg-muted">
                  <img 
                    src={img} 
                    alt={`Product ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

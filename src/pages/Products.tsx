import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CurvedBanner from "@/components/CurvedBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import schoolUniform from "@/assets/school-uniform-1.jpg";
import bannerSchoolDress from "@/assets/uniform-complete.png";
import sportsJersey from "@/assets/sports-jersey-1.jpg";
import casualTshirt from "@/assets/casual-tshirt-1.jpg";
import jerseyRed from "@/assets/jersey-red.jpg";
import jerseyBlue from "@/assets/jersey-blue.jpg";
import jerseyGreen from "@/assets/jersey-green.jpg";
import tshirtBlack from "@/assets/tshirt-black.jpg";
import tshirtWhite from "@/assets/tshirt-white.jpg";
import uniformComplete from "@/assets/uniform-complete.png";

const Products = () => {
  const schoolUniforms = [
    { image: schoolUniform, title: "Classic School Uniform", category: "School Uniforms" },
    { image: uniformComplete, title: "Complete Uniform Set", category: "School Uniforms" },
    { image: schoolUniform, title: "Premium School Shirt", category: "School Uniforms" },
    { image: uniformComplete, title: "Full Uniform Kit", category: "School Uniforms" },
  ];

  const sportsJerseys = [
    { image: jerseyRed, title: "Red Team Jersey", category: "Sports Jerseys" },
    { image: jerseyBlue, title: "Blue Athletic Jersey", category: "Sports Jerseys" },
    { image: jerseyGreen, title: "Green Sports Jersey", category: "Sports Jerseys" },
    { image: sportsJersey, title: "Striped Team Jersey", category: "Sports Jerseys" },
  ];

  const casualWear = [
    { image: tshirtBlack, title: "Black Casual Tee", category: "Casual Wear" },
    { image: tshirtWhite, title: "White Basic Tee", category: "Casual Wear" },
    { image: casualTshirt, title: "Minimalist Black Shirt", category: "Casual Wear" },
    { image: tshirtWhite, title: "Classic White Tee", category: "Casual Wear" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Curved Banner */}
      <CurvedBanner
        title="Browse Our Premium Collection"
        description="Explore our extensive range of high-quality uniforms, jerseys, and casual wear. Find the perfect style for your team or school."
        buttonText="Shop Now"
        buttonLink="/products"
        image={bannerSchoolDress}
        imageAlt="School uniform dress"
        bgColorClass="bg-banner-magenta"
        waveColor1="hsl(var(--banner-yellow))"
        waveColor2="hsl(var(--banner-yellow) / 0.7)"
      />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold font-poppins mb-4">Our Products</h1>
            <p className="text-xl text-muted-foreground">
              Browse our collection of premium uniforms and apparel
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="school">School</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="casual">Casual</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...schoolUniforms.slice(0, 2), ...sportsJerseys.slice(0, 2), ...casualWear.slice(0, 2)].map(
                  (product, index) => (
                    <ProductCard key={index} {...product} />
                  )
                )}
              </div>
            </TabsContent>

            <TabsContent value="school">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {schoolUniforms.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sports">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sportsJerseys.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="casual">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {casualWear.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Featured Image Sections */}
          <div className="mt-20 space-y-16">
            {/* School Uniforms Banner */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src={uniformComplete} 
                alt="School Uniforms Collection" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="max-w-2xl px-12">
                  <h2 className="text-4xl font-bold font-poppins text-white mb-4">School Uniforms</h2>
                  <p className="text-white/90 text-lg">
                    Professional attire designed for educational excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Sports Grid */}
            <div>
              <h2 className="text-3xl font-bold font-poppins mb-8">Sports Collection</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img src={jerseyRed} alt="Red Jersey" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img src={jerseyBlue} alt="Blue Jersey" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img src={jerseyGreen} alt="Green Jersey" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Casual Wear Banner */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src={casualTshirt} 
                alt="Casual Wear Collection" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent flex items-center justify-end">
                <div className="max-w-2xl px-12 text-right">
                  <h2 className="text-4xl font-bold font-poppins text-white mb-4">Casual Wear</h2>
                  <p className="text-white/90 text-lg">
                    Comfortable everyday apparel for any occasion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;

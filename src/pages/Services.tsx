import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurvedBanner from "@/components/CurvedBanner";
import { Button } from "@/components/ui/button";
import { Infinity, Beaker, MapPin } from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";
import football from "@/assets/sports/football.jpg";
import basketball from "@/assets/sports/basketball.jpg";
import volleyball from "@/assets/sports/volleyball.jpg";
import tennis from "@/assets/sports/tennis.jpg";
import cycling from "@/assets/sports/cycling.jpg";
import running from "@/assets/sports/running.jpg";
import rugby from "@/assets/sports/rugby.jpg";
import training from "@/assets/sports/training.jpg";
import beachVolleyball from "@/assets/sports/beach-volleyball.jpg";
import extraProducts from "@/assets/sports/extra-products.jpg";
import sportsJersey from "@/assets/sports-jersey-1.png";

const Services = () => {
  const sportsCategories = [
    { name: "Football", image: football },
    { name: "Basketball", image: basketball },
    { name: "Volleyball", image: volleyball },
    { name: "Tennis", image: tennis },
    { name: "Cycling & MTB", image: cycling },
    { name: "Running", image: running },
    { name: "Rugby", image: rugby },
    { name: "Training", image: training },
    { name: "Beach Volleyball", image: beachVolleyball },
    { name: "Other Sports", image: sportsJersey },
    { name: "Extra Products", image: extraProducts },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Curved Banner */}
      <CurvedBanner
        title="Create Your Own Fantasy Football T-Shirt"
        description="Design custom sports jerseys and teamwear for any sport. Professional quality printing and materials that last season after season."
        buttonText="Watch the Video"
        buttonLink="/contact"
        image={sportsJersey}
        imageAlt="Sports jersey"
        bgColorClass="bg-banner-lime"
        waveColor1="hsl(var(--banner-orange))"
        waveColor2="hsl(var(--banner-orange) / 0.7)"
      />

      {/* Sports Categories Section */}
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-poppins mb-4">
              Create customised sports uniforms
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Whether it's sports gear for football or casual sports apparel, you can customise everything! 
              If you want more information with us, we will personally be able to help you and please your 
              most innovative sporting needs if you'd like it with the finest uniforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sportsCategories.map((sport, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3] bg-muted"
              >
                <img 
                  src={sport.image} 
                  alt={sport.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">{sport.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-6 text-background">
            Do you need something special?
          </h2>
          <p className="text-background/80 mb-8 max-w-2xl mx-auto">
            Send us a request, and we answer to straighten design-origin queries you. 
            Create your own future sports uniform in the office.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-background text-foreground border-background hover:bg-background/90"
          >
            REQUEST A FREE DESIGN
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                <Infinity className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold font-poppins mb-4">Without limits</h3>
              <p className="text-muted-foreground">
                Change the colors, add logos, names, numbers and sponsors or completely create your 
                own design. You can do practically anything. You only need to use your imagination.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center mx-auto mb-6">
                <Beaker className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-poppins mb-4">Testing</h3>
              <p className="text-muted-foreground">
                To support you in the best 30 euros (incl. VAT) we can send you 
                physical samples of any piece of sport kit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-poppins mb-4">Made in Italy</h3>
              <p className="text-muted-foreground">
                This products, it makes one desirous professional and it means design 
                and made, and created in Italy 100% handwork from our italian excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;

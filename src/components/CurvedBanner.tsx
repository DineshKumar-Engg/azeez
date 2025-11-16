import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CurvedBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  imageAlt: string;
  bgColorClass: string;
  waveColor1: string;
  waveColor2: string;
}

const CurvedBanner = ({
  title,
  description,
  buttonText,
  buttonLink,
  image,
  imageAlt,
  bgColorClass,
  waveColor1,
  waveColor2,
}: CurvedBannerProps) => {
  return (
    <div className={`relative overflow-hidden ${bgColorClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6 z-10 relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
              {description}
            </p>
            <Link to={buttonLink}>
              <Button size="lg" variant="default" className="text-lg px-8 py-6">
                {buttonText}
              </Button>
            </Link>
          </div>

          {/* Right Image with Decorations */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Decorative elements */}
            <div className="absolute top-8 right-12 w-4 h-4 rounded-full bg-banner-pink animate-pulse hidden lg:block" />
            <div className="absolute top-20 right-4 w-3 h-3 rounded-full bg-banner-yellow hidden lg:block" />
            <div className="absolute bottom-20 right-16 w-6 h-6 rounded-full bg-banner-orange/50 hidden lg:block" />
            <div className="absolute top-12 left-8 text-3xl text-banner-pink font-bold hidden lg:block">+</div>
            <div className="absolute bottom-12 left-4 text-2xl text-banner-yellow font-bold hidden lg:block">×</div>
            
            {/* Main Image */}
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
                  style={{ transform: "perspective(1000px) rotateY(-5deg)" }}
                />
              </div>
            </div>

            {/* More decorative elements */}
            <div className="absolute bottom-8 right-8 w-5 h-5 rounded-full bg-banner-cyan hidden lg:block" />
            <div className="absolute top-1/2 right-0 text-4xl text-banner-magenta font-bold hidden lg:block">+</div>
          </div>
        </div>
      </div>

      {/* Curved Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          {/* Bottom wave layer */}
          <path
            d="M0,60 C240,100 480,100 720,80 C960,60 1200,40 1440,60 L1440,120 L0,120 Z"
            fill={waveColor2}
            opacity="0.7"
          />
          {/* Top wave layer */}
          <path
            d="M0,40 C240,80 480,80 720,60 C960,40 1200,20 1440,40 L1440,120 L0,120 Z"
            fill={waveColor1}
          />
        </svg>
      </div>
    </div>
  );
};

export default CurvedBanner;


import React, { useEffect, useRef, useState } from "react";
import BeeCharacter from "./BeeCharacter";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const progress = Math.min(scrollPosition / (heroHeight * 0.7), 1);
        setScrollProgress(progress);
        
        if (titleRef.current) {
          titleRef.current.style.transform = `translateZ(${100 - progress * 100}px) translateY(${progress * 20}px)`;
          titleRef.current.style.opacity = `${1 - progress * 0.8}`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden perspective-container"
      style={{
        background: `linear-gradient(180deg, #231F20 0%, #8B4513 100%)`
      }}
    >
      {/* Floating bees */}
      <div className="absolute left-[15%] top-[35%] opacity-70">
        <BeeCharacter 
          role="scout" 
          name="Scout Bee" 
          description="Finds the fastest delivery routes" 
        />
      </div>
      <div className="absolute right-[20%] top-[25%] opacity-70">
        <BeeCharacter 
          role="worker" 
          name="Worker Bee" 
          description="Handles your packages with care" 
        />
      </div>
      <div className="absolute left-[25%] bottom-[20%] opacity-70">
        <BeeCharacter 
          role="messenger" 
          name="Messenger Bee" 
          description="Keeps you updated in real-time" 
        />
      </div>
      
      {/* 3D Text */}
      <div className="z-10 text-center px-4">
        <h1 
          ref={titleRef}
          className="text-3d text-5xl md:text-7xl lg:text-8xl font-bold text-bee-honey mb-6 transition-all duration-300"
          style={{ transformStyle: 'preserve-3d' }}
        >
          DELIVER<span className="relative text-white">
            B
            <div 
              className="absolute -left-1 -right-1 top-1/2 h-1 bg-white rounded-full"
              style={{
                transform: `scaleX(${1 - scrollProgress})`,
                opacity: 1 - scrollProgress,
                transformOrigin: 'left'
              }}
            />
          </span>EE
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl transition-all duration-300"
          style={{ 
            opacity: 1 - scrollProgress,
            transform: `translateY(${scrollProgress * 50}px)`
          }}
        >
          The fastest, most reliable delivery service around.
          <br/>Like bees in a hive, we work tirelessly to deliver your packages.
        </p>
        <button 
          className="bee-button text-lg"
          style={{ 
            opacity: 1 - scrollProgress,
            transform: `translateY(${scrollProgress * 50}px)`
          }}
        >
          Start Shipping Today
        </button>
      </div>
      
      {/* Honeycomb pattern overlay */}
      <div 
        className="absolute inset-0 bg-honeycomb-pattern opacity-10"
        style={{ backgroundSize: '100px 100px' }}
      />
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={scrollToServices}
        style={{ 
          opacity: 1 - scrollProgress * 2,
        }}
      >
        <p className="text-white mb-2">Scroll to explore</p>
        <ChevronDown className="text-white animate-bounce" size={28} />
      </div>
      
      {/* Light tunnel effect based on scroll */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-bee-orange to-transparent"
        style={{ 
          opacity: scrollProgress * 0.5,
          transform: `scale(${1 + scrollProgress})`,
        }}
      />
    </div>
  );
};

export default Hero;
